# AlumUnite
The User Management System is a web application that is built using Vue.js and Bootstrap to manage users. It allows users to perform key operations such as viewing, adding, editing, and deleting user profiles. The project leverages Pinia for state management and Vue Router for navigation between pages.

project-root/
├── public/
│   └── users.json                # Mock user data
├── src/
│   ├── assets/                   # Static assets (e.g., images)
│   ├── components/               # Reusable components
│   │   ├── Navbar.vue            # Navigation bar
│   │   └── UserForm.vue          # Add/Edit user form
│   ├── views/                    # Pages for routing
│   │   ├── Dashboard.vue         # Dashboard page
│   │   ├── ManageUsers.vue       # User management page
│   │   ├── UserDetails.vue       # User details page
│   │   └── EditUser.vue          # Edit user page
│   ├── store/                    # Pinia store for user management
│   │   └── index.js
│   ├── router/                   # Vue Router configuration
│   │   └── index.js
│   ├── App.vue                   # Main App component
│   └── main.js                   # Entry point
└── package.json                  # Dependencies and scripts

#Technologies Used
Vue.js: Frontend framework for building the application.
Bootstrap: CSS framework for responsive design.
Pinia: State management library for handling user data.
Vue Router: For navigation between different pages.
Local Storage: Persists user data between sessions.

#How to Run the Project

git clone <repository_url>
cd project-root

npm install

npm run dev

Open in Browser: Visit http://localhost:3000 to use the application.


