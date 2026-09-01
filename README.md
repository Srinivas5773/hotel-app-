# Raju Garu Hotel - Restaurant Ordering Web App

A fast, mobile-first, and responsive food ordering web application designed for village and town restaurants in Andhra Pradesh.

---

## 🍽️ Key Features

- **Customer Ordering**:
  - Browse categorized menu (*Tiffins, Meals, Curries, Biryani, Snacks, Beverages*).
  - Add to cart, adjust quantities, enter special cooking notes.
  - Delivery vs Takeaway toggle.
  - One-click **Auto-Detect GPS Live Location**.
  - **Direct WhatsApp Order Integration**: Automatically formats and routes orders directly to Raju Garu on WhatsApp (`9347671131`).
  - **Live Real-time Order Tracker**: Live progress tracking (*Order Placed ➔ Confirmed ➔ Cooking & Preparing ➔ Out for Delivery ➔ Delivered*).
  - **100% Cash on Delivery & Pay at Counter**.

- **Admin Management Portal (`/admin`)**:
  - **Live Dashboard**: Today's revenue, active orders count, popular items.
  - **Live Orders Feed**: 1-click status actions (*Accept & Confirm ➔ Start Cooking ➔ Out for Delivery ➔ Delivered*).
  - **Menu Management**: Add new dishes, edit price, upload image URLs, toggle availability/sold-out.
  - **Login Members / Candidates Directory**: Search members by name, phone, or location, 1-click Call, and 1-click WhatsApp.
  - **Hotel Settings**: Manage phone, WhatsApp, opening timings, and delivery charges.

---

## 🚀 How to Run Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev -- --host
   ```

3. **Access Web App**:
   - Customer Portal: `http://localhost:3000`
   - Admin Portal: `http://localhost:3000/admin` (Username: `raju`, Password: `raju123`)
   - Candidate Login: `http://localhost:3000/login`

4. **Production Build**:
   ```bash
   npm run build
   ```
