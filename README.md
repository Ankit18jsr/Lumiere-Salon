# Lumière Salon & Spa Platform

A high-end cinematic web platform for a luxury women's salon brand. Built with modern, scalable, and highly animated technologies.

## Technology Stack
- **Frontend**: React 18, Vite, Tailwind CSS v3, Framer Motion
- **Backend**: Node.js, Express, Mongoose (MongoDB)
- **Deployment Targets**: Vercel (Front) / Render (Back)

---

## 🏃 Getting Started Locally

Both the frontend and backend run on separate processes. 

### 1. Start the Backend API
The backend requires a local or remote MongoDB instance to function properly.

```bash
cd server
# Ensure you are running MongoDB locally, or edit .env to add your Atlas MONGODB_URI
npm install
npm run dev
```

### 2. Start the Frontend Client
```bash
cd client
npm install
npm run dev
```
Navigate to `http://localhost:5173` in your browser.

---

## 📝 Editing Content

We designed this codebase to be clean and easy to update.

### Updating Services & Pricing
- **Services Menu**: Go to `client/src/pages/Services.jsx`. The data is stored in the `servicesData` dictionary at the top of the file. You can easily add new categories or items without touching HTML.
- **Pricing Packages**: Go to `client/src/pages/Pricing.jsx`. Find the `plans` array at the top of the file to modify the pricing tiers and bullet features.

### Updating Images
All images are hosted locally inside `client/public/images/`.
To update an image, simply drag your new image into that folder and name it the exact same filename (e.g. `hero.png` or `stylist1.png`), replacing the old one.

### Changing the Color Palette
We used a strict Design System defined inside `client/tailwind.config.js`. 
If you simply change the hex codes under `theme.extend.colors` (like `gold` or `blush`), the entire website—from buttons to box-shadows—will instantly update to the new color scheme.

---

## 🚀 Deployment Instructions

### 1. Vercel (Frontend)
1. Push this repository to GitHub.
2. Create a new project in Vercel and select the `client` folder as the root directory.
3. Vercel will automatically detect Vite. Click Deploy.
4. Once deployed, copy your live `https://...` URL.

### 2. Render or Railway (Backend)
1. Create a "Web Service" in Render/Railway and point it to the `server` directory of your GitHub repo.
2. Provide the following Environment Variables in the Render dashboard:
    - `MONGODB_URI`: (Your MongoDB Atlas connection string)
    - `CLIENT_URL`: (The URL of your live Vercel frontend)
3. Deploy!

### 3. Connect them
1. Inside your `client` code, make sure `Booking.jsx` points its `axios.post` request to your live Render backend URL instead of `http://localhost:5000`.
2. Push your code, Vercel will rebuild, and you are live!
