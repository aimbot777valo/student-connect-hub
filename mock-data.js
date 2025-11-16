// ==========================================
// MOCK DATA
// Location: All sample data for the application
// Customization: Edit this file to change initial data
// ==========================================

const MOCK_DATA = {
  currentUser: {
    id: 1,
    name: "Alex Johnson",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23ff6fa3' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='40' fill='white'%3EAJ%3C/text%3E%3C/svg%3E",
    college: "Tech University",
    year: "3rd Year",
    interests: "Coding, Music, Photography",
    onlineStatus: true
  },

  users: [
    { id: 1, name: "Alex Johnson", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23ff6fa3' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='40' fill='white'%3EAJ%3C/text%3E%3C/svg%3E", college: "Tech University", year: "3rd Year", onlineStatus: true },
    { id: 2, name: "Sarah Chen", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%238f6bff' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='40' fill='white'%3ESC%3C/text%3E%3C/svg%3E", college: "Arts College", year: "2nd Year", onlineStatus: true },
    { id: 3, name: "Mike Rodriguez", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%2339d98a' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='40' fill='white'%3EMR%3C/text%3E%3C/svg%3E", college: "Engineering College", year: "4th Year", onlineStatus: true },
    { id: 4, name: "Emma Wilson", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23ff6b6b' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='40' fill='white'%3EEW%3C/text%3E%3C/svg%3E", college: "Science Institute", year: "1st Year", onlineStatus: false },
    { id: 5, name: "David Kim", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%234da6ff' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='40' fill='white'%3EDK%3C/text%3E%3C/svg%3E", college: "Business School", year: "2nd Year", onlineStatus: true },
    { id: 6, name: "Lisa Anderson", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23ffb84d' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='40' fill='white'%3ELA%3C/text%3E%3C/svg%3E", college: "Medical College", year: "3rd Year", onlineStatus: false },
    { id: 7, name: "James Taylor", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23e63980' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='40' fill='white'%3EJT%3C/text%3E%3C/svg%3E", college: "Law School", year: "4th Year", onlineStatus: true },
    { id: 8, name: "Priya Sharma", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23a68fff' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='40' fill='white'%3EPS%3C/text%3E%3C/svg%3E", college: "Design Institute", year: "2nd Year", onlineStatus: true },
    { id: 9, name: "Tom Brown", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%235ce3a4' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='40' fill='white'%3ETB%3C/text%3E%3C/svg%3E", college: "Tech University", year: "3rd Year", onlineStatus: false },
    { id: 10, name: "Anna Lee", avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23ff8585' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='40' fill='white'%3EAL%3C/text%3E%3C/svg%3E", college: "Arts College", year: "1st Year", onlineStatus: true }
  ],

  chatMessages: [
    { id: 1, userId: 2, text: "Hey everyone! Just finished my final project 🎉", timestamp: Date.now() - 3600000, reactions: [{ emoji: "👍", count: 3 }] },
    { id: 2, userId: 3, text: "Congrats Sarah! What was it about?", timestamp: Date.now() - 3500000, reactions: [] },
    { id: 3, userId: 2, text: "It was a web app for tracking study habits. Took me 3 weeks!", timestamp: Date.now() - 3400000, reactions: [{ emoji: "🔥", count: 2 }] },
    { id: 4, userId: 5, text: "That sounds amazing! Would love to check it out", timestamp: Date.now() - 3300000, reactions: [] },
    { id: 5, userId: 7, text: "Anyone selling CS textbooks? I need them for next semester", timestamp: Date.now() - 3200000, reactions: [] },
    { id: 6, userId: 8, text: "Check the marketplace! I saw some listed yesterday", timestamp: Date.now() - 3100000, reactions: [{ emoji: "👍", count: 1 }] },
    { id: 7, userId: 4, text: "Quick Q: When is the library open on weekends?", timestamp: Date.now() - 3000000, reactions: [] },
    { id: 8, userId: 9, text: "9 AM to 9 PM both days!", timestamp: Date.now() - 2900000, reactions: [{ emoji: "❤️", count: 2 }] },
    { id: 9, userId: 10, text: "Does anyone know good hostels near campus?", timestamp: Date.now() - 2800000, reactions: [] },
    { id: 10, userId: 3, text: "Check out the Hostels section! Lots of reviews there", timestamp: Date.now() - 2700000, reactions: [{ emoji: "👍", count: 1 }] },
    { id: 11, userId: 6, text: "Study group for finals anyone? 📚", timestamp: Date.now() - 2600000, reactions: [{ emoji: "👍", count: 4 }] },
    { id: 12, userId: 7, text: "I'm in! What subject?", timestamp: Date.now() - 2500000, reactions: [] },
    { id: 13, userId: 6, text: "Data Structures and Algorithms", timestamp: Date.now() - 2400000, reactions: [] },
    { id: 14, userId: 2, text: "Count me in! I need all the help I can get 😅", timestamp: Date.now() - 2300000, reactions: [{ emoji: "😂", count: 3 }] },
    { id: 15, userId: 8, text: "Just uploaded some design resources in the Resources section!", timestamp: Date.now() - 2200000, reactions: [{ emoji: "🔥", count: 5 }] },
    { id: 16, userId: 5, text: "You're a lifesaver Priya!", timestamp: Date.now() - 2100000, reactions: [] },
    { id: 17, userId: 10, text: "Anyone going to the tech talk tomorrow?", timestamp: Date.now() - 2000000, reactions: [] },
    { id: 18, userId: 3, text: "Which one? There are two scheduled", timestamp: Date.now() - 1900000, reactions: [] },
    { id: 19, userId: 10, text: "The AI/ML one at 3 PM", timestamp: Date.now() - 1800000, reactions: [] },
    { id: 20, userId: 4, text: "I'll be there! Should be interesting", timestamp: Date.now() - 1700000, reactions: [{ emoji: "👍", count: 2 }] }
  ],

  marketplaceItems: [
    { id: 1, title: "Data Structures Textbook", price: 25, condition: "Like New", seller: "Sarah Chen", sellerId: 2, category: "books", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%238f6bff' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3ETextbook%3C/text%3E%3C/svg%3E", description: "Barely used, all pages intact", location: "Campus", tags: ["textbook", "CS"] },
    { id: 2, title: "Mechanical Keyboard", price: 80, condition: "Used", seller: "Mike Rodriguez", sellerId: 3, category: "electronics", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%2339d98a' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3EKeyboard%3C/text%3E%3C/svg%3E", description: "Cherry MX Blues, works perfectly", location: "Downtown", tags: ["electronics", "gaming"] },
    { id: 3, title: "Study Desk", price: 50, condition: "Good", seller: "Emma Wilson", sellerId: 4, category: "furniture", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23ff6b6b' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3EDesk%3C/text%3E%3C/svg%3E", description: "Solid wood, minor scratches", location: "North Campus", tags: ["furniture", "study"] },
    { id: 4, title: "Calculus Book Bundle", price: 40, condition: "Used", seller: "David Kim", sellerId: 5, category: "books", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%234da6ff' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3ECalculus%3C/text%3E%3C/svg%3E", description: "3 books, some highlighting", location: "Library Area", tags: ["textbook", "math"] },
    { id: 5, title: "Laptop Stand", price: 15, condition: "Like New", seller: "Lisa Anderson", sellerId: 6, category: "electronics", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23ffb84d' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3EStand%3C/text%3E%3C/svg%3E", description: "Adjustable, aluminum", location: "South Campus", tags: ["electronics", "accessories"] },
    { id: 6, title: "Winter Jacket", price: 35, condition: "Good", seller: "James Taylor", sellerId: 7, category: "clothing", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23e63980' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3EJacket%3C/text%3E%3C/svg%3E", description: "Size M, warm and cozy", location: "Campus", tags: ["clothing", "winter"] },
    { id: 7, title: "Scientific Calculator", price: 20, condition: "Like New", seller: "Priya Sharma", sellerId: 8, category: "electronics", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23a68fff' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3ECalculator%3C/text%3E%3C/svg%3E", description: "TI-84, with manual", location: "Engineering Block", tags: ["electronics", "study"] },
    { id: 8, title: "Office Chair", price: 60, condition: "Good", seller: "Tom Brown", sellerId: 9, category: "furniture", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%235ce3a4' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3EChair%3C/text%3E%3C/svg%3E", description: "Ergonomic, adjustable height", location: "Campus", tags: ["furniture", "study"] },
    { id: 9, title: "Programming Books Set", price: 55, condition: "Used", seller: "Anna Lee", sellerId: 10, category: "books", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23ff8585' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3EBooks%3C/text%3E%3C/svg%3E", description: "Python, Java, C++ books", location: "Library", tags: ["textbook", "programming"] },
    { id: 10, title: "Wireless Mouse", price: 12, condition: "Like New", seller: "Sarah Chen", sellerId: 2, category: "electronics", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%238f6bff' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3EMouse%3C/text%3E%3C/svg%3E", description: "Logitech, barely used", location: "Campus", tags: ["electronics", "accessories"] },
    { id: 11, title: "Backpack", price: 25, condition: "Good", seller: "Mike Rodriguez", sellerId: 3, category: "other", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%2339d98a' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3EBackpack%3C/text%3E%3C/svg%3E", description: "Large capacity, laptop sleeve", location: "Downtown", tags: ["accessories", "school"] },
    { id: 12, title: "Biology Textbook", price: 30, condition: "Like New", seller: "Emma Wilson", sellerId: 4, category: "books", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23ff6b6b' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3EBiology%3C/text%3E%3C/svg%3E", description: "Latest edition, pristine", location: "Science Block", tags: ["textbook", "biology"] }
  ],

  qnaQuestions: [
    { id: 1, title: "How to prepare for Data Structures final exam?", description: "I'm struggling with trees and graphs. Any tips?", author: "Sarah Chen", authorId: 2, votes: 15, answers: 8, tags: ["academics", "CS", "exams"], timestamp: Date.now() - 86400000, answersList: [] },
    { id: 2, title: "Best places to study on campus?", description: "Looking for quiet spots with good wifi", author: "Mike Rodriguez", authorId: 3, votes: 22, answers: 12, tags: ["campus", "study"], timestamp: Date.now() - 172800000, answersList: [] },
    { id: 3, title: "Internship opportunities for 2nd year students?", description: "Where should I start looking?", author: "Emma Wilson", authorId: 4, votes: 18, answers: 6, tags: ["career", "internship"], timestamp: Date.now() - 259200000, answersList: [] },
    { id: 4, title: "Hostel vs Apartment: Which is better?", description: "Pros and cons of each option?", author: "David Kim", authorId: 5, votes: 31, answers: 15, tags: ["housing", "advice"], timestamp: Date.now() - 345600000, answersList: [] },
    { id: 5, title: "How to balance studies and extracurriculars?", description: "I feel overwhelmed with everything", author: "Lisa Anderson", authorId: 6, votes: 27, answers: 10, tags: ["advice", "time-management"], timestamp: Date.now() - 432000000, answersList: [] },
    { id: 6, title: "Best online resources for learning Python?", description: "Need recommendations for beginners", author: "James Taylor", authorId: 7, votes: 19, answers: 14, tags: ["programming", "resources"], timestamp: Date.now() - 518400000, answersList: [] },
    { id: 7, title: "Campus gym membership worth it?", description: "Is it better than off-campus gyms?", author: "Priya Sharma", authorId: 8, votes: 12, answers: 7, tags: ["fitness", "campus"], timestamp: Date.now() - 604800000, answersList: [] },
    { id: 8, title: "How to network effectively in college?", description: "Any tips for introverts?", author: "Tom Brown", authorId: 9, votes: 25, answers: 11, tags: ["networking", "career"], timestamp: Date.now() - 691200000, answersList: [] },
    { id: 9, title: "Dealing with procrastination?", description: "I keep putting off assignments until last minute", author: "Anna Lee", authorId: 10, votes: 34, answers: 19, tags: ["productivity", "advice"], timestamp: Date.now() - 777600000, answersList: [] },
    { id: 10, title: "Best cafes near campus for group study?", description: "Need recommendations with good ambiance", author: "Sarah Chen", authorId: 2, votes: 16, answers: 9, tags: ["study", "food"], timestamp: Date.now() - 864000000, answersList: [] },
    { id: 11, title: "Scholarship application tips?", description: "First time applying, feeling nervous", author: "Mike Rodriguez", authorId: 3, votes: 20, answers: 8, tags: ["scholarship", "advice"], timestamp: Date.now() - 950400000, answersList: [] },
    { id: 12, title: "How to improve presentation skills?", description: "I get really nervous speaking in front of class", author: "Emma Wilson", authorId: 4, votes: 17, answers: 10, tags: ["skills", "communication"], timestamp: Date.now() - 1036800000, answersList: [] },
    { id: 13, title: "Part-time job recommendations?", description: "Looking for flexible hours that work with classes", author: "David Kim", authorId: 5, votes: 23, answers: 13, tags: ["jobs", "part-time"], timestamp: Date.now() - 1123200000, answersList: [] },
    { id: 14, title: "How to stay motivated during exams?", description: "Feeling burnt out already", author: "Lisa Anderson", authorId: 6, votes: 29, answers: 16, tags: ["exams", "motivation"], timestamp: Date.now() - 1209600000, answersList: [] },
    { id: 15, title: "Best note-taking methods?", description: "Digital vs paper?", author: "James Taylor", authorId: 7, votes: 21, answers: 11, tags: ["study", "productivity"], timestamp: Date.now() - 1296000000, answersList: [] },
    { id: 16, title: "Club recommendations for freshers?", description: "Want to meet new people and explore interests", author: "Priya Sharma", authorId: 8, votes: 14, answers: 12, tags: ["clubs", "social"], timestamp: Date.now() - 1382400000, answersList: [] },
    { id: 17, title: "How to choose elective courses?", description: "So many options, not sure what to pick", author: "Tom Brown", authorId: 9, votes: 18, answers: 7, tags: ["academics", "advice"], timestamp: Date.now() - 1468800000, answersList: [] },
    { id: 18, title: "Dealing with homesickness?", description: "Missing home a lot lately", author: "Anna Lee", authorId: 10, votes: 26, answers: 15, tags: ["mental-health", "advice"], timestamp: Date.now() - 1555200000, answersList: [] },
    { id: 19, title: "Research opportunities for undergrads?", description: "How to get started in research?", author: "Sarah Chen", authorId: 2, votes: 15, answers: 6, tags: ["research", "academics"], timestamp: Date.now() - 1641600000, answersList: [] },
    { id: 20, title: "Budget meal prep ideas?", description: "Trying to save money on food", author: "Mike Rodriguez", authorId: 3, votes: 24, answers: 18, tags: ["food", "budget"], timestamp: Date.now() - 1728000000, answersList: [] }
  ],

  resources: [
    { id: 1, title: "Introduction to React", type: "visual", url: "https://youtube.com", thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect fill='%23ff6fa3' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='white'%3EReact Tutorial%3C/text%3E%3C/svg%3E", description: "Complete React tutorial for beginners", tags: ["programming", "web-dev"], rating: 4.5, author: "Tech Channel" },
    { id: 2, title: "Data Structures Cheat Sheet", type: "text", filename: "ds-cheatsheet.pdf", description: "Quick reference for all major data structures", tags: ["CS", "reference"], rating: 4.8, author: "Sarah Chen", uploadDate: Date.now() - 86400000 },
    { id: 3, title: "Python Full Course", type: "visual", url: "https://youtube.com", thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect fill='%238f6bff' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='white'%3EPython Course%3C/text%3E%3C/svg%3E", description: "12-hour comprehensive Python course", tags: ["programming", "python"], rating: 4.7, author: "Code Academy" },
    { id: 4, title: "Machine Learning Notes", type: "text", filename: "ml-notes.pdf", description: "Complete ML course notes with examples", tags: ["AI", "ML"], rating: 4.6, author: "Mike Rodriguez", uploadDate: Date.now() - 172800000 },
    { id: 5, title: "Web Development Roadmap", type: "visual", url: "https://roadmap.sh", thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect fill='%2339d98a' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='white'%3EWeb Dev Roadmap%3C/text%3E%3C/svg%3E", description: "Step-by-step guide to becoming a web developer", tags: ["web-dev", "career"], rating: 4.9, author: "Roadmap.sh" },
    { id: 6, title: "Calculus Formula Sheet", type: "text", filename: "calc-formulas.pdf", description: "All important calculus formulas", tags: ["math", "reference"], rating: 4.4, author: "Emma Wilson", uploadDate: Date.now() - 259200000 },
    { id: 7, title: "Git & GitHub Tutorial", type: "visual", url: "https://youtube.com", thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect fill='%23ff6b6b' width='400' height='250'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='white'%3EGit Tutorial%3C/text%3E%3C/svg%3E", description: "Learn version control basics", tags: ["programming", "tools"], rating: 4.5, author: "Dev Tips" },
    { id: 8, title: "Resume Writing Guide", type: "text", filename: "resume-guide.pdf", description: "How to write an effective tech resume", tags: ["career", "guide"], rating: 4.7, author: "David Kim", uploadDate: Date.now() - 345600000 }
  ],

  hostels: [
    { 
      id: 1, 
      name: "Green Valley Hostel", 
      rating: 4.2, 
      reviewCount: 45,
      price: "$200/month", 
      distance: "0.5 km from campus", 
      amenities: ["WiFi", "Mess", "Laundry", "Security"],
      reviews: [
        { id: 1, author: "Sarah Chen", rating: 4, text: "Great location and clean rooms. Food could be better.", date: Date.now() - 86400000 },
        { id: 2, author: "Mike Rodriguez", rating: 5, text: "Best hostel I've stayed in! Friendly staff and good facilities.", date: Date.now() - 172800000 },
        { id: 3, author: "Emma Wilson", rating: 4, text: "Nice place, but WiFi is sometimes slow.", date: Date.now() - 259200000 }
      ]
    },
    { 
      id: 2, 
      name: "Sunrise Residency", 
      rating: 4.5, 
      reviewCount: 62,
      price: "$250/month", 
      distance: "1 km from campus", 
      amenities: ["WiFi", "Gym", "Mess", "Study Room"],
      reviews: [
        { id: 1, author: "David Kim", rating: 5, text: "Excellent facilities! The gym is a huge plus.", date: Date.now() - 345600000 },
        { id: 2, author: "Lisa Anderson", rating: 4, text: "Good overall, but a bit pricey.", date: Date.now() - 432000000 },
        { id: 3, author: "James Taylor", rating: 5, text: "Love the study room! Very quiet and well-lit.", date: Date.now() - 518400000 },
        { id: 4, author: "Priya Sharma", rating: 4, text: "Great place, highly recommend!", date: Date.now() - 604800000 }
      ]
    },
    { 
      id: 3, 
      name: "Campus View Lodge", 
      rating: 3.8, 
      reviewCount: 28,
      price: "$180/month", 
      distance: "0.3 km from campus", 
      amenities: ["WiFi", "Mess", "Security"],
      reviews: [
        { id: 1, author: "Tom Brown", rating: 4, text: "Very close to campus which is convenient.", date: Date.now() - 691200000 },
        { id: 2, author: "Anna Lee", rating: 3, text: "Rooms are small but location makes up for it.", date: Date.now() - 777600000 }
      ]
    },
    { 
      id: 4, 
      name: "Elite Student Housing", 
      rating: 4.7, 
      reviewCount: 83,
      price: "$300/month", 
      distance: "1.5 km from campus", 
      amenities: ["WiFi", "Gym", "Pool", "Mess", "Laundry", "Study Room", "24/7 Security"],
      reviews: [
        { id: 1, author: "Sarah Chen", rating: 5, text: "Premium facilities worth the price!", date: Date.now() - 864000000 },
        { id: 2, author: "Mike Rodriguez", rating: 5, text: "The pool is amazing! Great for relaxing after classes.", date: Date.now() - 950400000 },
        { id: 3, author: "Emma Wilson", rating: 4, text: "Bit far from campus but the amenities are top-notch.", date: Date.now() - 1036800000 },
        { id: 4, author: "David Kim", rating: 5, text: "Best decision I made! Love living here.", date: Date.now() - 1123200000 },
        { id: 5, author: "Lisa Anderson", rating: 5, text: "Highly recommend! Professional management.", date: Date.now() - 1209600000 },
        { id: 6, author: "James Taylor", rating: 4, text: "Great place, slightly expensive but worth it.", date: Date.now() - 1296000000 }
      ]
    },
    { 
      id: 5, 
      name: "Budget Stay Hostel", 
      rating: 3.5, 
      reviewCount: 19,
      price: "$150/month", 
      distance: "2 km from campus", 
      amenities: ["WiFi", "Mess"],
      reviews: [
        { id: 1, author: "Priya Sharma", rating: 3, text: "Good for tight budgets, basic facilities.", date: Date.now() - 1382400000 },
        { id: 2, author: "Tom Brown", rating: 4, text: "Not fancy but gets the job done!", date: Date.now() - 1468800000 }
      ]
    },
    { 
      id: 6, 
      name: "University Heights", 
      rating: 4.4, 
      reviewCount: 56,
      price: "$280/month", 
      distance: "0.8 km from campus", 
      amenities: ["WiFi", "Gym", "Mess", "Laundry", "Recreation Room"],
      reviews: [
        { id: 1, author: "Anna Lee", rating: 4, text: "Really nice place with friendly roommates!", date: Date.now() - 1555200000 },
        { id: 2, author: "Sarah Chen", rating: 5, text: "Recreation room is perfect for socializing.", date: Date.now() - 1641600000 },
        { id: 3, author: "Mike Rodriguez", rating: 4, text: "Good balance of price and quality.", date: Date.now() - 1728000000 }
      ]
    }
  ],

  achievements: [
    { id: 1, title: "First Message", description: "Send your first message in chat", icon: "💬", progress: 100, claimed: true },
    { id: 2, title: "Marketplace Seller", description: "List your first item for sale", icon: "🛍️", progress: 100, claimed: false },
    { id: 3, title: "Question Master", description: "Ask 5 questions in Q&A", icon: "❓", progress: 60, claimed: false },
    { id: 4, title: "Helper", description: "Answer 10 questions", icon: "🙋", progress: 40, claimed: false },
    { id: 5, title: "Resource Contributor", description: "Upload 3 helpful resources", icon: "📚", progress: 33, claimed: false },
    { id: 6, title: "Social Butterfly", description: "React to 20 messages", icon: "🦋", progress: 75, claimed: false },
    { id: 7, title: "Early Bird", description: "Join the platform in first month", icon: "🐦", progress: 100, claimed: true },
    { id: 8, title: "Community Star", description: "Get 50 upvotes on your content", icon: "⭐", progress: 20, claimed: false },
    { id: 9, title: "Review Expert", description: "Write 5 hostel reviews", icon: "✍️", progress: 0, claimed: false },
    { id: 10, title: "Active Trader", description: "Complete 10 marketplace transactions", icon: "💰", progress: 10, claimed: false }
  ],

  announcements: [
    { id: 1, title: "🎉 Welcome to Student Welfare Community!", content: "We're excited to have you here! This platform connects students to share resources, buy and sell items, ask questions, and find the best hostels. Explore all the features and make the most of your student life!", author: "Admin Team", date: Date.now() - 604800000, sticky: true },
    { id: 2, title: "🏆 New Achievement System Launched", content: "We've just launched our achievement system! Earn badges by being active in the community. Check your progress in the Achievements section.", author: "Admin Team", date: Date.now() - 518400000, sticky: false },
    { id: 3, title: "📚 Resource Library Updated", content: "50+ new study resources have been added this week! Check out the Resources section for the latest materials on programming, mathematics, and more.", author: "Admin Team", date: Date.now() - 432000000, sticky: false },
    { id: 4, title: "🎓 Career Fair Next Week", content: "Don't miss the virtual career fair happening next Tuesday! Top companies will be recruiting. Register through the college portal.", author: "Career Services", date: Date.now() - 345600000, sticky: true },
    { id: 5, title: "🔧 Platform Maintenance - Saturday 2 AM", content: "The platform will be under maintenance this Saturday from 2 AM to 4 AM. Please save your work before then.", author: "Tech Team", date: Date.now() - 259200000, sticky: false },
    { id: 6, title: "🏠 New Hostel Reviews Added", content: "Students have shared 20+ new hostel reviews this month! If you're looking for accommodation, check out the Hostels section for honest reviews.", author: "Community Manager", date: Date.now() - 172800000, sticky: false },
    { id: 7, title: "💡 Feature Request: We're Listening!", content: "Have ideas for new features? Share them in the Q&A section with the tag 'feature-request'. We're constantly improving based on your feedback!", author: "Admin Team", date: Date.now() - 86400000, sticky: false }
  ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MOCK_DATA;
}