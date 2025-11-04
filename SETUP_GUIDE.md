# 🚀 Setup Guide — Deep Learning Repository (AL 503(B))

This guide provides step-by-step instructions to set up and run the Deep Learning repository locally.

---

## Prerequisites

Before you begin, ensure you have the following installed:

1. **Python 3.9 - 3.14** (Download from [python.org](https://www.python.org/downloads/))
2. **Node.js 18+** and npm (Download from [nodejs.org](https://nodejs.org/))
3. **Git** (Optional, for cloning the repository)

---

## 📦 Part 1: Python Environment & Jupyter Notebooks

### Step 1: Navigate to the repository

```powershell
cd "d:\Deep Learning\deep-learning-5th-sem-rgpv"
```

### Step 2: Create a Python virtual environment

```powershell
python -m venv .venv
```

### Step 3: Activate the virtual environment

```powershell
.\.venv\Scripts\Activate.ps1
```

**Note:** If you get an execution policy error, run this first:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Step 4: Install Python dependencies

```powershell
pip install -r requirements.txt
```

**Important:** If you're using Python 3.14+, TensorFlow may not install. The repository uses **PyTorch** as the primary framework, which is fully compatible.

### Step 5: Launch Jupyter Notebook

```powershell
jupyter notebook
```

This will open Jupyter in your default browser. Navigate to the `practicals/` folder and open any notebook to run experiments.

### Step 6: Run a notebook

- Open `P1_MLP_Implementation.ipynb`
- Click **Run All** or execute cells one by one
- The first run will download datasets (MNIST, CIFAR-10) automatically

---

## 💻 Part 2: React UI (Syllabus & Practicals Viewer)

### Step 1: Navigate to the UI folder

```powershell
cd ui
```

### Step 2: Install Node.js dependencies

```powershell
npm install
```

**Note:** If you don't have Node.js installed:
1. Download from [nodejs.org](https://nodejs.org/) (LTS version recommended)
2. Run the installer
3. Restart your terminal and try `npm install` again

### Step 3: Start the development server

```powershell
npm run dev
```

### Step 4: Open in browser

The UI will be available at:
```
http://localhost:5173
```

You can browse:
- **Syllabus**: View all units with topics
- **Practicals**: Links to Jupyter notebooks

---

## 🧪 Quick Test Commands

### Test Python environment:

```powershell
.\.venv\Scripts\python.exe -c "import torch; import numpy; import pandas; print('✓ All packages work!')"
```

### Test Jupyter:

```powershell
.\.venv\Scripts\jupyter.exe --version
```

### Test Node/npm:

```powershell
node --version
npm --version
```

---

## 📝 Notes

### Python 3.14 Compatibility
- **TensorFlow** is not yet stable for Python 3.14
- Use **PyTorch** (already configured in `requirements.txt`)
- All practicals work with PyTorch equivalents

### Dataset Downloads
- MNIST, CIFAR-10, and text data are downloaded automatically in notebooks
- First run may take a few minutes for downloads

### VS Code Integration
- Install **Python** extension for `.ipynb` support
- Install **Jupyter** extension to run notebooks in VS Code

---

## 🛠️ Troubleshooting

### "Execution Policy" error (PowerShell)
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### "npm not found"
- Install Node.js from [nodejs.org](https://nodejs.org/)
- Restart your terminal after installation

### "TensorFlow not found"
- This is expected for Python 3.14+
- Use PyTorch instead (already configured)

### Jupyter kernel not found
```powershell
python -m ipykernel install --user --name=deep-learning --display-name="Deep Learning (AL 503)"
```

---

## 📚 Additional Resources

- [PyTorch Documentation](https://pytorch.org/docs/)
- [Jupyter Notebook Basics](https://jupyter-notebook.readthedocs.io/)
- [React + Vite Guide](https://vitejs.dev/guide/)

---

**Happy Learning! 🎓**
