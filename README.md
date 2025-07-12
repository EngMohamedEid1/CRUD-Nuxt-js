# 🧩 Nuxt 3 CRUD Users App

A minimal and professional **User Management Dashboard** built with **Nuxt 3**, **Pinia**, and **pure CSS**, featuring:

- 🔐 Fake login & authentication
- 👥 User CRUD (Create, Read, Update, Delete)
- 🎛️ Protected routes via middleware
- 🔍 Search + pagination
- 💡 Modal-based form
- 🎨 Dark theme with CSS variables
- ⚡ Lazy loading for large components
- 📱 Responsive layout under 573px

---


### 1. Install dependencies

```bash
# to install dependencies
npm install 

# to run the development server
npm run dev 

# to build the application for production
npm run build

# to preview the production build
npm run preview
```
### 2. Project Structure
/components
  - LoginForm.vue
  - UsersTable.vue
  - UserForm.vue

/pages
  - index.vue      // Home
  - login.vue      // Login
  - users.vue      // Protected

/stores
  - auth.js
  - users.js

/middleware
  - auth.js

/assets/css
  - main.css
  - variables.css
  - components/
    - LoginForm.css
    - UserForm.css
    - UsersTable.css
    - UserModal.css
    - HomeHero.css

/utils
  - fakeUser.js

### 3. Technologies used


Nuxt 3 (Composition API)

Pinia for state management

CSS3 (No Tailwind)

defineAsyncComponent (for lazy loading)

Nuxt Middleware



