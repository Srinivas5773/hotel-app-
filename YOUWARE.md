# Raju Garu Hotel - Restaurant Ordering App

A mobile-first, fast-loading restaurant ordering web app for village hotels with instant WhatsApp order dispatching directly to **`9347671131`**.

## 📱 Features

### 1. Candidate / Customer Welcome & Login
- **Welcome Screen**: Warm greeting with Telugu accents (`స్వాగతం`) and hotel tagline ("Famous for Authentic Home Style Andhra Meals Since 2015").
- **Candidate Details**:
  - **Name**: Customer / Candidate full name
  - **Phone**: 10-digit mobile number
  - **Location Name**: Village area / landmark name with 1-click selectable popular locations (Near Ramalayam Temple, Old Panchayat Office, Bazaar Center, High School Road, Bus Stand Chowk, Field / Farm Delivery)
  - **Location URL**: Google Maps shareable location link with 1-click **"📍 Auto Detect GPS"** button (`navigator.geolocation`)
- **1-Tap Google Login** & **Guest Mode** options.

### 2. Direct WhatsApp Order Notification (`9347671131`)
- When a customer places an order, the system generates a structured WhatsApp message and routes it straight to `wa.me/919347671131`:
  ```
  *NEW ORDER - Raju Garu Hotel*
  ━━━━━━━━━━━━━━━━━
  *Order ID:* #RGH-7821
  *Customer Name:* Rama Rao
  *Customer Phone:* 9347671131
  *Order Type:* 🛵 Home Delivery
  *Location Name:* Near Ramalayam Temple, Main Street, Village
  *Google Maps Live Location:* https://www.google.com/maps?q=16.9890,81.7840

  *Items Ordered:*
  • Raju Garu Special Natu Kodi Biryani x 2 - ₹480
  • Andhra Unlimited Bhojanam x 1 - ₹120

  *Subtotal:* ₹600
  *Packaging Charges:* FREE
  *Delivery Fee:* FREE
  *Grand Total:* *₹600* (Cash on Delivery)
  *Special Request:* Extra spicy, extra Gongura please.
  ━━━━━━━━━━━━━━━━━
  Namaskaram Raju Garu! Please confirm this order.
  ```

### 3. Customer Experience
- **Home Page**: Live "Open Now" status, one-tap quick actions (Call, WhatsApp, Google Maps, Share), Today's Specials, Top Categories, and Customer Reviews.
- **Menu Page**: Tiffins, Meals, Curries, Biryani, Snacks, Beverages, Veg/Non-Veg filters, Andhra Spicy filter, and instant search.
- **Cart Page**: Quantity adjustments, Delivery vs Takeaway selector, cooking notes, and Cash on Delivery / UPI QR scan.
- **Order Page**: Live status timeline tracking (Pending ➔ Confirmed ➔ Preparing ➔ Out for Delivery ➔ Delivered) and printable receipt.
- **Profile Page**: Saved details, active order tracker, past orders history, and 1-click re-order.

### 4. Admin Management Portal
- **Default Admin Login**:
  - **Username**: `raju`
  - **Password**: `raju123`
- **Live Orders**: Real-time orders feed, 1-click status updater, direct call & WhatsApp customer triggers.
- **Menu Management**: Add/edit/delete dishes with 1-click **In Stock / Sold Out** switch.
- **Hotel Settings**: Manage phone, WhatsApp receiver number (`9347671131`), timings, and delivery fees.

---

## 🛠️ Project Structure
```
raju-garu-hostel/
├── public/
│   └── images/
│       └── logo.svg
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── BottomNav.tsx
│   │   ├── FoodItemCard.tsx
│   │   ├── CategoryBar.tsx
│   │   ├── SpecialBanner.tsx
│   │   ├── QuickActions.tsx
│   │   ├── UpiModal.tsx
│   │   ├── OrderReceipt.tsx
│   │   ├── AdminOrderCard.tsx
│   │   └── Toast.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── MenuPage.tsx
│   │   ├── CartPage.tsx
│   │   ├── OrderPage.tsx
│   │   ├── ProfilePage.tsx
│   │   ├── LoginPage.tsx
│   │   └── AdminPage.tsx
│   ├── store/
│   │   ├── authStore.ts
│   │   ├── cartStore.ts
│   │   ├── menuStore.ts
│   │   ├── orderStore.ts
│   │   ├── settingsStore.ts
│   │   └── index.ts
│   ├── types/
│   │   └── index.ts
│   ├── data/
│   │   └── defaultMenu.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── YOUWARE.md
└── yw_manifest.json
```
