# ✅ Repository Setup Complete!

Your **Deep Learning (AL 503(B))** repository is ready. Here are the verified commands to run everything locally.

---

## 📦 Python Environment & Jupyter Notebooks

### 1️⃣ Create Virtual Environment

```powershell
cd "d:\Deep Learning\deep-learning-5th-sem-rgpv"
python -m venv .venv
```

### 2️⃣ Activate Virtual Environment

```powershell
.\.venv\Scripts\Activate.ps1
```

**If you get an execution policy error:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 3️⃣ Install Python Dependencies

```powershell
pip install -r requirements.txt
```

**What gets installed:**
- ✅ PyTorch (primary framework, Python 3.14 compatible)
- ✅ NumPy, Pandas, Matplotlib, Seaborn
- ✅ Jupyter Notebook
- ✅ Scikit-learn
- ⚠️ TensorFlow (only if Python < 3.13)

### 4️⃣ Launch Jupyter

```powershell
jupyter notebook
```

### 5️⃣ Open and Run Notebooks

Navigate to `practicals/` folder in Jupyter and open:
- `P1_MLP_Implementation.ipynb`
- `P2_Autoencoder.ipynb`
- `P3_CNN_Image_Classification.ipynb`
- `P4_RNN_Text_Generation.ipynb`
- `P5_GAN_Image_Generation.ipynb`

Click **Run All** or execute cells individually.

---

## 💻 UI Setup (React + Vite + Tailwind)

### 1️⃣ Install Node.js (if not installed)

Download from: https://nodejs.org/ (LTS version recommended)

### 2️⃣ Navigate to UI Folder

```powershell
cd ui
```

### 3️⃣ Install Dependencies

```powershell
npm install
```

### 4️⃣ Start Development Server

```powershell
npm run dev
```

### 5️⃣ Open in Browser

```
http://localhost:5173
```

You'll see:
- **Navbar** with RGPV branding
- **Syllabus View** (5 units with topics)
- **Practicals View** (links to all 5 notebooks)

---

## ✅ Verification Commands

### Test Python Environment

```powershell
.\.venv\Scripts\python.exe -c "import torch; import numpy; import pandas; import matplotlib; print('✅ All packages work!')"
```

Expected output:
```
✅ All packages work!
```

### Test Jupyter

```powershell
.\.venv\Scripts\jupyter.exe --version
```

### Test Node/npm

```powershell
node --version
npm --version
```

---

## 📁 Repository Structure

```
deep-learning-5th-sem-rgpv/
├── README.md                    # Main documentation
├── SETUP_GUIDE.md               # Detailed setup instructions
├── requirements.txt             # Python dependencies
├── LICENSE                      # MIT License
├── .gitignore                   # Git ignore rules
│
├── syllabus/
│   └── deep_learning_syllabus.md
│
├── notes/
│   ├── unit1_introduction.md
│   ├── unit2_feedforward_networks.md
│   ├── unit3_convolutional_networks.md
│   ├── unit4_recurrent_networks.md
│   └── unit5_generative_models.md
│
├── practicals/
│   ├── README.md
│   ├── P1_MLP_Implementation.ipynb
│   ├── P2_Autoencoder.ipynb
│   ├── P3_CNN_Image_Classification.ipynb
│   ├── P4_RNN_Text_Generation.ipynb
│   └── P5_GAN_Image_Generation.ipynb
│
├── datasets/
│   ├── mnist_sample/
│   ├── cifar10_sample/
│   └── text_data_sample/
│
├── references/
│   ├── textbooks_list.md
│   └── research_papers.md
│
└── ui/                          # React + Vite UI
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    ├── public/
    └── src/
        ├── App.tsx
        ├── main.tsx
        └── components/
            ├── Navbar.tsx
            ├── SyllabusView.tsx
            └── PracticalsView.tsx
```

---

## 🎯 What's Included

### ✅ Syllabus & Notes
- Complete unit-wise syllabus (5 units)
- Notes for each unit with learning outcomes
- Reference materials (textbooks + research papers)

### ✅ Practicals
- 5 Jupyter notebooks covering:
  - MLP (Multilayer Perceptron)
  - Autoencoder
  - CNN (Convolutional Neural Networks)
  - RNN/LSTM (Recurrent Networks)
  - GAN (Generative Adversarial Networks)

### ✅ UI Dashboard
- React + TypeScript + Tailwind CSS
- Clean academic theme
- Interactive syllabus viewer
- Direct links to practicals

### ✅ Documentation
- Comprehensive README
- Detailed setup guide
- Troubleshooting tips

---

## 🚀 Quick Start (Copy-Paste)

**All-in-one Python setup:**
```powershell
cd "d:\Deep Learning\deep-learning-5th-sem-rgpv"; python -m venv .venv; .\.venv\Scripts\Activate.ps1; pip install -r requirements.txt; jupyter notebook
```

**All-in-one UI setup:**
```powershell
cd "d:\Deep Learning\deep-learning-5th-sem-rgpv\ui"; npm install; npm run dev
```

---

## 📝 Important Notes

### Python 3.14 Compatibility
- ✅ **PyTorch** fully supported (used in all notebooks)
- ⚠️ **TensorFlow** not available for Python 3.14+
- All practicals work with PyTorch equivalents

### Dataset Downloads
- MNIST, CIFAR-10 download automatically on first run
- First execution may take 2-5 minutes for downloads
- Subsequent runs use cached datasets

### GPU Support
- Notebooks run on CPU by default
- For GPU acceleration, install CUDA-enabled PyTorch:
  ```powershell
  pip install torch torchvision --index-url https://download.pytorch.org/whl/cu121
  ```

---

## 🛠️ Troubleshooting

### PowerShell Execution Policy
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### TensorFlow Installation Failed
✅ **This is expected** for Python 3.14. Use PyTorch instead (already configured).

### Node.js Not Found
1. Download from https://nodejs.org/
2. Install LTS version
3. Restart terminal
4. Try `npm install` again

### Jupyter Kernel Issues
```powershell
python -m ipykernel install --user --name=deep-learning --display-name="Deep Learning (AL 503)"
```

---

## 📚 Next Steps

1. ✅ Run the notebooks to familiarize yourself with the code
2. ✅ Modify practicals to experiment with hyperparameters
3. ✅ Add your own experiments and notes
4. ✅ Use the UI to track progress and syllabus coverage

---

**Happy Learning! 🎓**

*Repository scaffolded for RGPV Deep Learning (AL 503(B)) — 5th Semester AI & ML*
