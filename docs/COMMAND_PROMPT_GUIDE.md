# 🚀 How to Run Raju Garu Hotel in Windows Command Prompt (CMD)

This guide provides step-by-step instructions to run the **Raju Garu Hotel** web application on your local machine using **Windows Command Prompt (`cmd.exe`)**.

---

## 📋 Prerequisites
1. **Node.js** installed on your system (v18 or newer recommended).
   - Verify by typing: `node -v` and `npm -v`

---

## 🛠️ Step-by-Step Terminal Execution

### Step 1: Open Windows Command Prompt
1. Press `Win + R` on your keyboard.
2. Type `cmd` and press **Enter** (or search "Command Prompt" in the Windows Start menu).

---

### Step 2: Navigate to the Project Folder
Copy and paste the exact command below into Command Prompt and press **Enter**:

```cmd
cd "c:\Users\91934\OneDrive\Desktop\Github Projects\raju-garu-hostel"
```

---

### Step 3: Install Dependencies (First-time setup only)
If you haven't installed packages yet, run:

```cmd
npm install
```

---

### Step 4: Start the Local Development Server
Run the following command to start the app with network access enabled:

```cmd
npm run dev -- --host
```

You will see output similar to this:
```
  VITE v5.4.21  ready in 420 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.1.121:3000/
  ➜  press h + enter to show help
```

---

### Step 5: Open in Your Browser
- **Customer Web App**: Open [**http://localhost:3000**](http://localhost:3000)
- **Hotel Admin Portal**: Open [**http://localhost:3000/admin**](http://localhost:3000/admin)
  - **Username**: `raju`
  - **Password**: `raju123`
- **Candidate Login Page**: [**http://localhost:3000/login**](http://localhost:3000/login)
- **On Mobile Phone (Same Wi-Fi)**: Open `http://<YOUR-LOCAL-IP>:3000` (e.g. `http://192.168.1.121:3000`)

---

## 🏗️ Production Build Command

To create a production-ready optimized build:

```cmd
npm run build
```

To preview the built production bundle locally:

```cmd
npm run preview
```

---

## 🛑 How to Stop the Server
In the Command Prompt window, press `Ctrl + C` and type `Y` when prompted.
