# React E-Commerce Store

A clean, modern, and fully responsive E-Commerce web application built using **Vite + React JS**.

---

## 🎯 What is the Use of this Website?

This website is a fully-functional **E-Commerce storefront** designed to allow users to:
1. **Browse Categories:** Explore a curated grid of categories (Beauty, Tech, Groceries, etc.) to quickly find specific groups of products.
2. **Explore Products:** View lists of available items dynamically fetched with real-time price, rating, thumbnail, and description details.
3. **Inspect Product Details:** View individual product pages showcasing item specifications, category tags, stock indicators, and description copy.
4. **Manage Shopping Cart:** Add products to a shopping cart, dynamically alter item quantities via custom steppers (`− 1 +`), track total cost, and clean the cart list.
5. **Simulated Checkout:** Confirm purchases using custom pop-up interactive Toastify status modals.

---

## ⚙️ How this Website Works (Workflow & Architecture)

The app is built on a modern single-page-app (SPA) architecture with React Router. Here is the lifecycle of how it runs:

1. **Initial Boot & Fetching (App.jsx):**
   * When the page loads, the global component `App.jsx` triggers a `useEffect` lifecycle hook to call the DummyJSON API via **Axios**.
   * It stores all fetched products in React state. It also checks `localStorage` to see if there is a saved cart from a previous session and loads it.

2. **Routing & Navigation (React Router):**
   * The app is wrapped in `<Router>` to handle switching views instantly without reloading the browser page.
   * If a user clicks a Category card on the Home page, they are routed to `/products?category=category-name`. The `Products` page reads this search parameter (`useSearchParams`) and filters the product list state accordingly.

3. **Detailed Product Loading:**
   * Clicking a product title routes the page to `/products/:id`.
   * The `ProductDetails` component extracts the ID from the URL (`useParams`) and sends a specific API request to retrieve detailed information for that item.

4. **Cart Actions & Persistence:**
   * Adding an item to the cart lifts the action to `App.jsx`, modifying the global `cartItems` state.
   * A secondary `useEffect` listens for changes to `cartItems` and immediately writes the stringified array to `localStorage` to keep the user's choices safe.
   * **React Toastify** intercepts these actions to pop up success or info banners in the bottom-right corner.

---

## 📚 Core Topics Used in this Project

This website utilizes several core frontend web development topics. Here is the list of topics implemented:

### 1. Component Architecture & Reusability
* **Functional Components:** Organized into pages and reusable UI components.
* **Props (Properties):** Passing data and action handlers (like functions) down from parent to child components (e.g., passing product data to `ProductCard`, passing handlers to `CartItem`).
* **Prop Destructuring:** Using modern ES6 destructuring (`const CartItem = ({ item, onRemove }) => ...`) for cleaner and more readable code.

### 2. State Management (`useState`)
* **Local State:** Managing local UI variables like the active state of the mobile navbar menu (`isOpen`), the quantity stepper count (`quantity`), loading indicators (`loading`), and API errors (`error`).
* **Lifted / Global State:** Lifting the shopping cart state (`cartItems`) up to the parent `App.jsx` so it can be shared and updated across different routes/pages.

### 3. Lifecycle & Side Effects (`useEffect`)
* **API Fetching on Mount:** Fetching the products catalog once when the application boots up.
* **Event Listeners:** Attaching a window resize event listener in the `Navbar` component to dynamically check screen width and close the mobile menu on desktop screens, with correct clean-up on unmount.
* **State Synchronization:** Automatically syncing the cart state with `localStorage` whenever the cart changes.

### 4. API Integration with Axios
* **REST API Calls:** Fetching all products from the external public API (`https://dummyjson.com/products?limit=0`).
* **Dynamic Details Page Fetching:** Querying a specific item's details dynamically using its ID (`https://dummyjson.com/products/${id}`).
* **Asynchronous Handling:** Using promises (`.then()` and `.catch()`) to handle loading and error states during API calls.

### 5. Client-Side Routing (React Router DOM)
* **BrowserRouter, Routes, Route:** Setting up clean URLs for navigation (`/`, `/products`, `/products/:id`, `/cart`, and wildcard `*` for a custom 404 page).
* **Dynamic Route Parameters (`useParams`):** Extracting the dynamic product ID from the URL path to load the corresponding product details page.
* **URL Search Params (`useSearchParams`):** Reading the active category parameter from the URL query string (`/products?category=beauty`) to filter products accordingly.

### 6. Local Storage Persistence
* **State Persistence:** Using `localStorage.getItem()` and `localStorage.setItem()` to store the shopping cart as a JSON string so that items remain in the cart even if the user refreshes the page.

### 7. Interactive User Notifications (React Toastify)
* **Toast Alerts:** Giving visual, instant feedback to users when they perform cart actions (e.g., adding an item, updating quantities, removing an item, or clearing the cart).

### 8. Custom Vanilla CSS & Responsiveness
* **Flexbox & CSS Grid:** Arranging components (like the product grid, cart layout, and navbar) dynamically.
* **Media Queries & Mobile-First Design:** Adapting font sizes, margins, and columns to fit all screen sizes (phones, tablets, laptops, and desktops).
* **CSS Variables (Tokens):** Reusing colors, padding, and font weights for design consistency.

---

## 📂 Updated Project Structure

```text
ecom/
│
├── src/
│   ├── css/
│   │   ├── Navbar.css
│   │   ├── Home.css
│   │   ├── Product.css
│   │   ├── ProductDetails.css
│   │   ├── Cart.css
│   │   ├── Footer.css
│   │   └── NotFound.css
│   │
│   ├── components/
│   │   ├── Navbar.jsx          # Header with logo, pages link, and cart badge
│   │   ├── Footer.jsx          # Footer with info, links, and contact information
│   │   ├── ProductCard.jsx     # Individual product grid cell item
│   │   ├── ProductList.jsx     # Grid container rendering all cards
│   │   ├── CartItem.jsx        # Row representation of product inside cart
│   │   └── Loading.jsx         # Spinner shown when API is fetching
│   │
│   ├── pages/
│   │   ├── Home.jsx            # Category grid page
│   │   ├── Products.jsx        # Product catalog page (with category filters)
│   │   ├── ProductDetails.jsx  # Single product detail view page with custom stepper
│   │   ├── Cart.jsx            # Shopping cart overview & summary
│   │   └── NotFound.jsx        # Custom 404 page
│   │
│   ├── App.jsx                 # Entry point defining routes, global state, and handlers
│   ├── index.css               # Global variables & base reset styles
│   └── main.jsx                # Renders App component into HTML DOM root
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Running Locally

1. **Clone or download the project** to your local computer.
2. **Open the project folder in terminal:**
   ```bash
   cd ecom
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the local development server:**
   ```bash
   npm run dev
   ```
5. **Open in browser:** Visit `http://localhost:5173`.
