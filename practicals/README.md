# Practicals — Deep Learning (AL 503(B))

This folder contains Jupyter notebooks for hands-on practicals aligned with the syllabus.

Notebooks:
- P1_MLP_Implementation.ipynb — MLP implementation (NumPy/TensorFlow)
- P2_Autoencoder.ipynb — Autoencoder on MNIST
- P3_CNN_Image_Classification.ipynb — CNN on CIFAR-10
- P4_RNN_Text_Generation.ipynb — RNN/LSTM for Text Generation
- P5_GAN_Image_Generation.ipynb — GAN for Synthetic Image Generation

Each notebook contains:
- Objective
- Brief theory
- Code implementation
- Visualizations (loss/accuracy)
- Summary and exercises

Run instructions:
1. Activate venv: `.\.venv\Scripts\Activate.ps1` (from repo root)
2. Install requirements: `pip install -r requirements.txt`
3. Launch Jupyter: `jupyter notebook` and open notebooks here.

Notes:
- **Framework:** Notebooks use PyTorch (compatible with Python 3.9-3.14). TensorFlow examples are provided but require Python <3.13.
- Sample datasets will be downloaded automatically using PyTorch/Keras dataset loaders.
- Notebooks are configured for CPU training; for GPU, ensure CUDA-enabled PyTorch is installed.
- First run may take time for dataset downloads (MNIST: ~50MB, CIFAR-10: ~170MB).
