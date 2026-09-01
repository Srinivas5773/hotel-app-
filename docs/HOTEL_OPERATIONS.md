# 🏪 Raju Garu Hotel - Daily Operations & Management Handbook

A reference handbook for Raju Garu and staff operating the restaurant web application.

---

## 1. 📞 Direct WhatsApp Order Channel
- **WhatsApp Receiver Number**: `9347671131`
- When a customer clicks "Send Order to WhatsApp", a pre-formatted message arrives with:
  - Order ID & Timestamp
  - Customer Name & Mobile Number
  - Delivery Location Landmark & Google Maps Live GPS Link
  - Itemized dishes & Total payable amount (Cash on Delivery)

---

## 2. 👥 Managing Login Members & Candidates (`/admin`)
- Open the Admin Portal at `/admin` (Credentials: `raju` / `raju123`).
- Go to the **Login Members / Candidates** tab to view:
  - Full registered candidates and customer list
  - 1-Click direct call button (`tel:`)
  - 1-Click WhatsApp greeting button (`wa.me`)
  - Live GPS Google Maps navigation links

---

## 3. 🍳 Kitchen Status Flow
1. **Pending (కొత్త ఆర్డర్)**: Order placed by customer.
2. **Confirmed (స్వీకరించబడింది)**: Admin clicks "Accept & Confirm Order".
3. **Cooking (వంట అవుతోంది 🔥)**: Admin clicks "Start Cooking / Preparing".
4. **Out for Delivery (డెలివరీలో ఉంది 🛵)** / **Ready (పార్శిల్ సిద్ధం 🛍️)**: Admin clicks "Send Out for Delivery".
5. **Delivered (పూర్తయింది 🎉)**: Admin marks delivered upon cash collection.
