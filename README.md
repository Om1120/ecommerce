# ecom

A clean, modern, and fully responsive E-Commerce web application built using **Vite + React JS**.

Designed and structured to match standard guidelines, the codebase reflects the work of a student who has mastered up to **Topic 13 (React Basics, LocalStorage, Axios Calling, Router, and Toastify)**.

---

## Features

- **Responsive Viewport Layouts:** Custom Flexbox and CSS Grid designs adapt seamlessly to desktop, tablet, and mobile screens without a single `@media` CSS query.
- **Dynamic Product Catalogue:** Pulls 30 products from the `https://dummyjson.com/products` endpoint via Axios with visual loading and error-boundary fallbacks.
- **Full Catalog Search & Sort:** Instantly query items by title/description and sort them dynamically by Price (ascending/descending) or Alphabetically (A-Z/Z-A).
- **Category Filter Interface:** Browse through specialized chips to filter the grid by category (Beauty, Fragrance, Laptops, Groceries, etc.), fully synced with React Router query parameters.
- **Stateful Shopping Cart:** Add products, update quantities, remove items, clear catalog, and observe automatic subtotal, flat rate shipping, and grand total recalculations.
- **Persistent Storage:** Synced with browser `localStorage` to keep cart products intact upon reload.
- **Form Submissions:** Newsletter forms built with local state validation checks and interactive Toast notification messaging responses.

---

## Technologies Used

- **HTML5 & Vanilla CSS3** (Flexbox, CSS Grid, clamp font scaling)
- **JavaScript (ES6)** (Array methods, destructuring, spreads)
- **React JS** (Functional Components, props, rendering lists)
- **React Router DOM** (Client-side routing, useParams, useSearchParams)
- **Axios** (API requests)
- **React Toastify** (Status notifications)

---

## Project Structure

```
ecom/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │      hero_electronics.png
│   │
│   ├── css/
│   │      Navbar.css
│   │      Home.css
│   │      Product.css
│   │      ProductDetails.css
│   │      Cart.css
│   │      Footer.css
│   │      NotFound.css
│   │
│   ├── components/
│   │      Navbar.jsx
│   │      Footer.jsx
│   │      Hero.jsx
│   │      ProductCard.jsx
│   │      ProductList.jsx
│   │      Category.jsx
│   │      SearchBar.jsx
│   │      Filter.jsx
│   │      Carousel.jsx
│   │      Newsletter.jsx
│   │      CartItem.jsx
│   │      Loading.jsx
│   │
│   ├── pages/
│   │      Home.jsx
│   │      Products.jsx
│   │      ProductDetails.jsx
│   │      Cart.jsx
│   │      NotFound.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│
├── package.json
└── README.md
```

---

## Installation & Setup

Ensure you have [Node.js](https://nodejs.org) installed on your system.

1. **Navigate to the project root:**
   ```bash
   cd ecom
   ```

2. **Install all packages and dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Open the localhost address shown in your console (usually `http://localhost:5173`).

---

## Technical Constraints Respected

1. **No `@media` Queries:** All responsiveness is achieved using CSS Flexbox (with wrapping), Grid auto-layouts (`repeat(auto-fit, minmax(...))`), relative percentage sizing, and Javascript event width tracking for menu toggles.
2. **No `key` props:** List items are loaded in standard mapping layouts without setting the JSX `key` property.
3. **Lifted State Pattern:** Cart global state is maintained in `App.jsx` and passed to child components via props, avoiding Context API, Redux, or custom hook abstractions.
4. **Vite Boilerplate Cleanup:** Deleted default assets, styling sheets, and variables for a bespoke look.

---

## Screenshots Placeholder

*[Screenshots showing Home carousel, Filter controls, and Cart subtotals will be added here]*

---

## Future Improvements

- Integrate actual backend services for payment gateways (Stripe/PayPal).
- Implement persistent User Accounts and authentication flow.
- Add product review submission fields.
- Integrate database tables to persist client cart state permanently inside user accounts.
