# 🎬 MovieApp
## A React movie discovery app built with the TMDB API. Browse popular movies, search by title, and save your favorites — all in a clean, responsive interface.

---
**Features**
- Browse popular movies fetched from the TMDB API
- Search for movies by title
- Add and remove movies from your Favorites list
- Favorites persist using React Context
- Multi-page navigation with React Router
---
**Tech Stack**
- React — UI library
- Vite — build tool and dev server
- React Router — client-side routing
- TMDB API — movie data
---

### Getting Started
**1. Clone the repository**
``` bash
git clone https://github.com/your-username/MovieApp.git
cd MovieApp
```
**2. Install dependencies**
```bash
npm install
```
**3. Set up your TMDB API key**
Create a `.env` file in the root of the project:
```
VITE_API_KEY=your_tmdb_api_key_here
```
You can get a free API key by creating an account at themoviedb.org.
**4. Run the app**
```bash
npm run dev
```
Open http://localhost:5173 in your browser.
---

**Project Structure**
```
src/
├── components/
│   ├── MovieCard.jsx
│   └── Navbar.jsx
├── pages/
│   ├── Home.jsx
│   └── Favorites.jsx
├── contexts/
│   └── MovieContext.jsx
├── css/
│   ├── App.css
│   ├── Home.css
│   ├── Favorites.css
│   └── MovieCard.css
└── App.jsx
```
---

**What I Learned**
- React component structure and JSX
- useState and useEffect hooks
- Fetching data from a real API
- React Router for multi-page navigation
- React Context for global state management
- Conditional rendering and list rendering with `.map()`
---

**Acknowledgements**
- Tech With Tim for the tutorial
- The Movie Database (TMDB) for the free API

> Built by following the [Tech With Tim — Learn React With This ONE Project](https://www.youtube.com/watch?v=G6D9cBaLViA) tutorial.
