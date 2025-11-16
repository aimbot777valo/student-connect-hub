// STUDENT WELFARE COMMUNITY - Main Application Logic
// This file contains all JavaScript functionality

let appState = {
  currentPage: 'dashboard',
  currentUser: null,
  users: [],
  chatMessages: [],
  marketplaceItems: [],
  qnaQuestions: [],
  resources: [],
  hostels: [],
  achievements: [],
  announcements: [],
  theme: 'dark',
  sidebarCollapsed: false,
  currentResourceTab: 'visual',
  currentQnaSort: 'votes',
  chatSimulationInterval: null
};

document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  loadFromLocalStorage();
  setupEventListeners();
  renderCurrentPage();
  startChatSimulation();
  updateStats();
}

function loadFromLocalStorage() {
  appState.currentUser = JSON.parse(localStorage.getItem('swc_user')) || MOCK_DATA.currentUser;
  appState.users = JSON.parse(localStorage.getItem('swc_users')) || MOCK_DATA.users;
  appState.chatMessages = JSON.parse(localStorage.getItem('swc_chat')) || MOCK_DATA.chatMessages;
  appState.marketplaceItems = JSON.parse(localStorage.getItem('swc_marketplace')) || MOCK_DATA.marketplaceItems;
  appState.qnaQuestions = JSON.parse(localStorage.getItem('swc_qna')) || MOCK_DATA.qnaQuestions;
  appState.resources = JSON.parse(localStorage.getItem('swc_resources')) || MOCK_DATA.resources;
  appState.hostels = JSON.parse(localStorage.getItem('swc_hostels')) || MOCK_DATA.hostels;
  appState.achievements = JSON.parse(localStorage.getItem('swc_achievements')) || MOCK_DATA.achievements;
  appState.announcements = JSON.parse(localStorage.getItem('swc_announcements')) || MOCK_DATA.announcements;
  appState.theme = localStorage.getItem('swc_theme') || 'dark';
  
  if (appState.theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    document.querySelector('#themeToggle i').className = 'fas fa-sun';
    document.querySelector('#themeToggle .nav-text').textContent = 'Light Mode';
  }
}

function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function setupEventListeners() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      navigateToPage(e.currentTarget.getAttribute('data-page'));
    });
  });

  document.querySelectorAll('.bottom-nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      navigateToPage(e.currentTarget.getAttribute('data-page'));
    });
  });

  document.getElementById('sidebarToggle').addEventListener('click', toggleSidebar);
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  document.getElementById('sendButton').addEventListener('click', sendChatMessage);
  document.getElementById('chatInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendChatMessage();
  });
  document.getElementById('emojiTrigger').addEventListener('click', toggleEmojiPicker);
  initializeEmojiPicker();
  
  document.getElementById('createListingBtn').addEventListener('click', openCreateListingModal);
  document.getElementById('marketplaceSearch').addEventListener('input', filterMarketplace);
  document.getElementById('categoryFilter').addEventListener('change', filterMarketplace);
  document.getElementById('sortFilter').addEventListener('change', filterMarketplace);
  
  document.getElementById('askQuestionBtn').addEventListener('click', openAskQuestionModal);
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      appState.currentQnaSort = e.currentTarget.getAttribute('data-sort');
      renderQnA();
    });
  });
  
  document.getElementById('addResourceBtn').addEventListener('click', openAddResourceModal);
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      appState.currentResourceTab = e.currentTarget.getAttribute('data-tab');
      renderResources();
    });
  });
  
  document.getElementById('createAnnouncementBtn').addEventListener('click', openCreateAnnouncementModal);
  document.getElementById('editProfileBtn').addEventListener('click', openEditProfileModal);
  document.getElementById('userProfileTrigger').addEventListener('click', openEditProfileModal);
  document.getElementById('globalSearch').addEventListener('input', handleGlobalSearch);
  document.getElementById('modalOverlay').addEventListener('click', closeModal);
}

function navigateToPage(pageName) {
  appState.currentPage = pageName;
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(`${pageName}-page`).classList.add('active');
  document.querySelectorAll('.nav-item, .bottom-nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-page') === pageName) item.classList.add('active');
  });
  renderCurrentPage();
  document.querySelector('.sidebar').classList.remove('mobile-open');
}

function renderCurrentPage() {
  const pages = {
    dashboard: renderDashboard,
    chat: renderChat,
    marketplace: renderMarketplace,
    qna: renderQnA,
    resources: renderResources,
    hostels: renderHostels,
    achievements: renderAchievements,
    announcements: renderAnnouncements,
    settings: renderSettings
  };
  pages[appState.currentPage]?.();
}

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (window.innerWidth <= 1024) {
    sidebar.classList.toggle('mobile-open');
  } else {
    sidebar.classList.toggle('collapsed');
    appState.sidebarCollapsed = !appState.sidebarCollapsed;
  }
}

function toggleTheme() {
  appState.theme = appState.theme === 'dark' ? 'light' : 'dark';
  if (appState.theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    document.querySelector('#themeToggle i').className = 'fas fa-sun';
    document.querySelector('#themeToggle .nav-text').textContent = 'Light Mode';
  } else {
    document.documentElement.removeAttribute('data-theme');
    document.querySelector('#themeToggle i').className = 'fas fa-moon';
    document.querySelector('#themeToggle .nav-text').textContent = 'Dark Mode';
  }
  localStorage.setItem('swc_theme', appState.theme);
}

// Render functions for each page
function renderDashboard() {
  updateStats();
  document.getElementById('headerAvatar').src = appState.currentUser.avatar;
  document.getElementById('headerUsername').textContent = appState.currentUser.name;
  
  const recentAnnouncements = appState.announcements.sort((a, b) => b.date - a.date).slice(0, 3);
  document.getElementById('recentAnnouncements').innerHTML = recentAnnouncements.map(ann => `
    <div class="announcement ${ann.sticky ? 'sticky' : ''}">
      <h4>${ann.title}</h4>
      <p>${ann.content.substring(0, 100)}...</p>
    </div>
  `).join('') || '<p class="text-muted">No announcements</p>';
  
  const userAchievements = appState.achievements.filter(ach => ach.progress >= 100).slice(0, 3);
  document.getElementById('dashboardAchievements').innerHTML = userAchievements.map(ach => `
    <div class="achievement-card ${ach.claimed ? 'claimed' : ''}">
      <div class="achievement-icon">${ach.icon}</div>
      <h4>${ach.title}</h4>
    </div>
  `).join('') || '<p class="text-muted">Complete actions to earn achievements!</p>';
}

function updateStats() {
  document.getElementById('onlineCount').textContent = appState.users.filter(u => u.onlineStatus).length;
  document.getElementById('resourceCount').textContent = appState.resources.length;
  document.getElementById('reviewCount').textContent = appState.hostels.reduce((sum, h) => sum + h.reviews.length, 0);
  document.getElementById('listingCount').textContent = appState.marketplaceItems.length;
}

function renderChat() {
  const html = appState.chatMessages.map(msg => {
    const user = appState.users.find(u => u.id === msg.userId);
    return `
      <div class="chat-message">
        <img src="${user.avatar}" alt="${user.name}" class="message-avatar">
        <div class="message-content">
          <div class="message-header">
            <span class="message-author">${user.name}</span>
            <span class="message-time">${formatTime(msg.timestamp)}</span>
          </div>
          <div class="message-text">${escapeHtml(msg.text)}</div>
        </div>
      </div>
    `;
  }).join('');
  document.getElementById('chatMessages').innerHTML = html;
  document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  
  appState.chatMessages.push({
    id: Date.now(),
    userId: appState.currentUser.id,
    text: text,
    timestamp: Date.now(),
    reactions: []
  });
  saveToLocalStorage('swc_chat', appState.chatMessages);
  input.value = '';
  renderChat();
}

function startChatSimulation() {
  appState.chatSimulationInterval = setInterval(() => {
    if (Math.random() > 0.7 && appState.currentPage !== 'chat') {
      const randomUser = appState.users[Math.floor(Math.random() * appState.users.length)];
      const messages = ["Great day!", "Anyone studying?", "Check the marketplace!", "New resources available!"];
      appState.chatMessages.push({
        id: Date.now(),
        userId: randomUser.id,
        text: messages[Math.floor(Math.random() * messages.length)],
        timestamp: Date.now(),
        reactions: []
      });
      saveToLocalStorage('swc_chat', appState.chatMessages);
      if (appState.currentPage === 'chat') renderChat();
    }
  }, 45000);
}

function initializeEmojiPicker() {
  const emojis = ['😀', '😂', '❤️', '👍', '🎉', '🔥', '✨', '💯'];
  document.getElementById('emojiPicker').innerHTML = emojis.map(e => `<span onclick="document.getElementById('chatInput').value+='${e}'; toggleEmojiPicker();">${e}</span>`).join('');
}

function toggleEmojiPicker() {
  document.getElementById('emojiPicker').classList.toggle('hidden');
}

function renderMarketplace() { filterMarketplace(); }
function filterMarketplace() {
  const search = document.getElementById('marketplaceSearch').value.toLowerCase();
  const category = document.getElementById('categoryFilter').value;
  let items = appState.marketplaceItems.filter(i => 
    (i.title.toLowerCase().includes(search) || i.description.toLowerCase().includes(search)) &&
    (!category || i.category === category)
  );
  document.getElementById('marketplaceGrid').innerHTML = items.map(i => `
    <div class="marketplace-item">
      <img src="${i.image}" class="item-image">
      <div class="item-content">
        <h3>${i.title}</h3>
        <p class="item-price">$${i.price}</p>
        <span class="item-tag">${i.condition}</span>
        <div class="item-seller"><i class="fas fa-user"></i> ${i.seller}</div>
      </div>
    </div>
  `).join('');
}

function renderQnA() {
  let sorted = [...appState.qnaQuestions];
  if (appState.currentQnaSort === 'votes') sorted.sort((a, b) => b.votes - a.votes);
  else if (appState.currentQnaSort === 'newest') sorted.sort((a, b) => b.timestamp - a.timestamp);
  else sorted = sorted.filter(q => q.answers === 0);
  
  document.getElementById('qnaList').innerHTML = sorted.map(q => `
    <div class="qna-item">
      <h3>${q.title}</h3>
      <p class="text-muted">${q.description.substring(0, 100)}...</p>
      <div class="qna-tags">${q.tags.map(t => `<span class="qna-tag">${t}</span>`).join('')}</div>
      <div class="qna-meta">
        <span>${q.votes} votes</span>
        <span>${q.answers} answers</span>
        <span>${q.author}</span>
      </div>
    </div>
  `).join('');
}

function renderResources() {
  const filtered = appState.resources.filter(r => r.type === appState.currentResourceTab);
  document.getElementById('resourcesGrid').innerHTML = filtered.map(r => `
    <div class="resource-card">
      <div class="resource-content">
        <h3>${r.title}</h3>
        <p class="resource-description">${r.description}</p>
        <div class="qna-tags">${r.tags.map(t => `<span class="qna-tag">${t}</span>`).join('')}</div>
        <span class="text-warning">⭐ ${r.rating}</span>
      </div>
    </div>
  `).join('');
}

function renderHostels() {
  document.getElementById('hostelsList').innerHTML = appState.hostels.map(h => `
    <div class="hostel-card">
      <h3 class="hostel-title">${h.name}</h3>
      <div class="hostel-rating">
        <span class="stars">${'⭐'.repeat(Math.round(h.rating))}</span>
        <span>${h.rating} (${h.reviewCount} reviews)</span>
      </div>
      <div class="hostel-info">
        <div class="info-item"><i class="fas fa-dollar-sign"></i> ${h.price}</div>
        <div class="info-item"><i class="fas fa-map-marker-alt"></i> ${h.distance}</div>
      </div>
      <div class="item-meta">${h.amenities.slice(0,3).map(a => `<span class="item-tag">${a}</span>`).join('')}</div>
    </div>
  `).join('');
}

function renderAchievements() {
  document.getElementById('achievementsGrid').innerHTML = appState.achievements.map(a => `
    <div class="achievement-card ${a.claimed ? 'claimed' : ''}">
      <div class="achievement-icon">${a.icon}</div>
      <h3>${a.title}</h3>
      <p class="achievement-description">${a.description}</p>
      <div class="achievement-progress"><div class="progress-bar" style="width:${a.progress}%"></div></div>
      <p class="text-muted">${a.progress}% Complete</p>
    </div>
  `).join('');
}

function renderAnnouncements() {
  document.getElementById('announcementsList').innerHTML = appState.announcements.map(a => `
    <div class="announcement ${a.sticky ? 'sticky' : ''}">
      <div class="announcement-header">
        <h3 class="announcement-title">${a.title}</h3>
        <span class="announcement-date">${formatDate(a.date)}</span>
      </div>
      <p>${a.content}</p>
      <div class="announcement-author"><i class="fas fa-user-circle"></i> ${a.author}</div>
    </div>
  `).join('');
}

function renderSettings() {
  document.getElementById('profileAvatar').src = appState.currentUser.avatar;
  document.getElementById('profileName').textContent = appState.currentUser.name;
  document.getElementById('profileCollege').textContent = appState.currentUser.college;
  document.getElementById('profileYear').textContent = appState.currentUser.year;
  document.getElementById('profileInterests').textContent = appState.currentUser.interests;
}

// Modal functions
function openModal(content) {
  document.getElementById('modalContent').innerHTML = content;
  document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

function openCreateListingModal() { showNotification('Feature demo - Create your own listing!', 'info'); }
function openAskQuestionModal() { showNotification('Feature demo - Ask your question!', 'info'); }
function openAddResourceModal() { showNotification('Feature demo - Share resources!', 'info'); }
function openCreateAnnouncementModal() { showNotification('Feature demo - Create announcement!', 'info'); }
function openEditProfileModal() { showNotification('Feature demo - Edit your profile!', 'info'); }

function handleGlobalSearch() {}

function formatDate(timestamp) {
  const diff = Date.now() - timestamp;
  const days = Math.floor(diff / 86400000);
  return days === 0 ? 'Today' : days === 1 ? 'Yesterday' : `${days}d ago`;
}

function formatTime(timestamp) {
  return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function showNotification(message, type = 'info') {
  const notif = document.createElement('div');
  notif.style.cssText = 'position:fixed;top:20px;right:20px;background:var(--panel);border:1px solid var(--border);border-radius:var(--radius);padding:16px 24px;box-shadow:var(--shadow-lg);z-index:10000;';
  notif.textContent = message;
  document.body.appendChild(notif);
  setTimeout(() => notif.remove(), 3000);
}

window.navigateToPage = navigateToPage;
window.closeModal = closeModal;