# Unit III — Convolutional Neural Networks

## Topics
- Convolution, pooling, padding, stride
- Architectures: LeNet, AlexNet, VGG, ResNet, Inception
- Regularization: Dropout, BatchNorm
- Transfer learning and fine-tuning

## Learning Outcomes
- Understand and implement CNN layers and architectures.
- Use pre-trained models and fine-tune for custom datasets.

## Suggested Reading
- Goodfellow et al., relevant chapters
- Papers: AlexNet, VGG, ResNet (He et al.)

---

## Key Concepts
- Receptive field grows with kernel size, depth, and stride; deeper layers capture global context.
- BatchNorm stabilizes training; place before activation in many modern implementations.
- Residual connections ease optimization by learning residuals \(F(x)+x\).

## Equations
- 2D convolution: \((X * W)_{i,j} = \sum_{u,v} X_{i+u, j+v} W_{u,v}\)
- ResNet block: \(y = f(x) + x\)

## Quick Lab Checklist
1. Train a 3-block CNN on CIFAR-10, report accuracy
2. Fine-tune a pretrained ResNet18 on 2 classes (e.g., cats vs dogs subset)
3. Visualize Grad-CAM for 5 images

## Summary
CNNs exploit spatial locality via weight sharing and subsampling. Architectural innovations (VGG, ResNet, Inception) trade off depth, width, and efficiency.
