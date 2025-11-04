# ✅ Node.js Setup Fixed!

## Problem
After installing Node.js, PowerShell doesn't automatically recognize `npm` and `node` commands because the PATH environment variable needs to be refreshed.

## Solution

### **Quick Fix: Use the Helper Scripts**

I've created two helper scripts that automatically handle the Node.js PATH issue:

#### **PowerShell:**
```powershell
.\run-ui.ps1
```

#### **Command Prompt:**
```cmd
run-ui.bat
```

These scripts will:
1. Add Node.js to PATH automatically
2. Install npm dependencies (if needed)
3. Start the Vite dev server

---

## Alternative Solutions

### **Option 1: Restart Your Terminal**
Close and reopen PowerShell/Command Prompt. The PATH will be refreshed automatically.

Then run:
```powershell
cd ui
npm install
npm run dev
```

---

### **Option 2: Manually Add to PATH (Current Session)**
```powershell
$env:Path += ";C:\Program Files\nodejs"
cd ui
npm install
npm run dev
```

---

### **Option 3: Permanently Add to System PATH**

1. Press `Win + X` → **System**
2. Click **Advanced system settings**
3. Click **Environment Variables**
4. Under **System variables**, find `Path`
5. Click **Edit** → **New**
6. Add: `C:\Program Files\nodejs`
7. Click **OK** on all dialogs
8. Restart your terminal

---

## Verify Node.js Installation

```powershell
node -v
npm -v
```

Expected output:
```
v23.x.x (or similar)
11.x.x (or similar)
```

---

## Current Status

✅ **Node.js Installed:** `C:\Program Files\nodejs`  
✅ **npm Dependencies Installed:** 216 packages  
✅ **Vite Dev Server:** Running at http://localhost:5173  

---

## Quick Start Commands

**From repository root:**

```powershell
# Using helper script (easiest)
.\run-ui.ps1

# Or manually (if terminal restarted)
cd ui
npm run dev
```

**Then open:** http://localhost:5173

---

The UI is now working and displays:
- RGPV branding
- Course syllabus (5 units)
- Links to all practicals
- Clean academic theme with Tailwind CSS
