# UI Preview Guide

## ✅ Server is Running

The Vite dev server is running at: **http://localhost:5173**

## How to View the UI

### Method 1: Browser
Open any web browser and go to:
```
http://localhost:5173
```

### Method 2: VS Code Simple Browser
- Press `Ctrl+Shift+P`
- Type "Simple Browser"
- Select "Simple Browser: Show"
- Enter URL: `http://localhost:5173`

## What You Should See

The UI displays:
- **Header:** RGPV branding with "Deep Learning — AL 503(B)"
- **Navigation:** Links to Syllabus and Practicals
- **Syllabus Section:** 5 unit cards with topics
- **Practicals Section:** 5 notebook links

## If You See a Blank Page

### Check 1: Is the server running?
Look for this in terminal:
```
✓ VITE v5.4.21  ready in 293 ms
➜  Local:   http://localhost:5173/
```

### Check 2: Restart the server
```powershell
# Stop with Ctrl+C in the terminal
# Then restart:
.\run-ui.ps1
```

### Check 3: Clear browser cache
- Press `Ctrl+Shift+R` (hard refresh)
- Or open in incognito/private mode

### Check 4: Check browser console
- Press `F12` to open DevTools
- Look for errors in Console tab
- If you see module errors, restart the dev server

## Current Status

✅ Server running on port 5173
✅ index.html in correct location
✅ React components created
✅ Tailwind CSS configured
✅ Vite plugin loaded

## Quick Restart Commands

```powershell
# From repository root
.\run-ui.ps1

# Or manually (with Node.js in PATH)
cd ui
npm run dev
```

## Server Controls

- **Stop server:** Press `Ctrl+C` in the terminal
- **Restart:** Run `.\run-ui.ps1` again
- **View help:** Press `h + Enter` while server is running

## Troubleshooting

### Port 5173 already in use
```powershell
# Find and kill the process
netstat -ano | findstr :5173
taskkill /PID <PID_NUMBER> /F
```

### Changes not showing
- Hard refresh: `Ctrl+Shift+R`
- Clear cache: `Ctrl+Shift+Delete`
- Restart dev server

### "Cannot GET /"
This means the server is running but React app isn't loading. Check:
1. `index.html` exists in `ui/` folder (not in `ui/public/`)
2. `src/main.tsx` exists
3. Restart the dev server

---

**The UI should now be visible at http://localhost:5173** 🎉
