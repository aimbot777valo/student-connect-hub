# Student Welfare Community - Frontend

A fully functional, responsive student community web application built with **vanilla HTML5, CSS3, and JavaScript**.

## 🚀 Quick Start

Simply **double-click `index.html`** in your browser. No installation required!

## 📁 Project Structure

- **index.html** - Main app structure
- **styles.css** - All styles & design system
- **app.js** - Application logic
- **mock-data.js** - Sample data
- **assets/** - Images (create this folder and add avatar images)

## 🎨 Customization Guide

### Change Colors (styles.css, lines 10-40)
```css
--accent: #ff6fa3;    /* Main pink color */
--bg: #0f1115;        /* Background */
```

### Change Fonts (index.html line 13 + styles.css line 33)
Replace Google Fonts link and update `--font-family`

### Dark/Light Mode
Click theme toggle button in sidebar (controlled in app.js lines 140-155)

## 📝 File Functions

| File | Purpose | Key Sections |
|------|---------|-------------|
| **styles.css** | All styles | Lines 10-55: Colors, Lines 225-350: Sidebar |
| **app.js** | All logic | Lines 80-150: localStorage, Lines 400-550: Chat |
| **mock-data.js** | Sample data | Edit to change initial content |

## 💾 Data Management

**localStorage Keys:**
- `swc_user` - Current user
- `swc_chat` - Chat messages  
- `swc_marketplace` - Listings
- `swc_qna` - Questions
- `swc_resources` - Resources
- `swc_hostels` - Hostels
- `swc_achievements` - Achievements
- `swc_announcements` - Announcements
- `swc_theme` - Theme preference

**Reset data:** Open console and run `localStorage.clear(); location.reload();`

## 📱 Responsive Breakpoints

- Desktop: > 1024px
- Tablet: 768-1024px
- Mobile: < 768px

## ♿ Accessibility

- Full keyboard navigation
- ARIA labels
- WCAG AA compliant colors
- Skip to content link

## 🌐 Adding Backend

To add a real backend, replace localStorage calls with:
- **Supabase** (recommended)
- **Firebase**
- **Node.js + Express**

## Features

✅ Dashboard with stats
✅ Real-time style chat
✅ Marketplace (buy/sell)
✅ Q&A forum
✅ Resource library
✅ Hostel reviews
✅ Achievement system
✅ Announcements
✅ Profile management
✅ Dark/Light mode
✅ Fully responsive

Built with ❤️ using vanilla HTML, CSS, and JavaScript