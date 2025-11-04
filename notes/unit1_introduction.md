# Unit I — Introduction to Deep Learning

## Topics
- History and motivation for deep learning
- McCulloch-Pitts Neuron
- Perceptron vs. Multilayer Perceptron (MLP)
- Activation functions
- Backpropagation algorithm
- Dimensionality reduction: PCA and SVD

## Learning Outcomes
- Understand the historical development and motivation for deep learning.
- Implement a basic MLP and backpropagation.
- Apply PCA for dimensionality reduction and visualize results.

## Suggested Reading
- Goodfellow et al., _Deep Learning_, Chapters 1-6
- Tutorial articles and lecture notes

---

## Key Concepts (Concise)

- Perceptron: \(y = \operatorname{sign}(\mathbf{w}^T \mathbf{x} + b)\). Linear decision boundary.
- MLP: Stack of affine layers + nonlinearities: \(h^{(l)} = \sigma(W^{(l)} h^{(l-1)} + b^{(l)})\).
- Loss (classification): cross-entropy with softmax.
- Backprop: reverse-mode autodiff computing gradients layer-by-layer using chain rule.
- PCA objective: maximize variance of projected data or minimize reconstruction error; top-k eigenvectors of covariance.

## Equations

- Softmax: \(\text{softmax}(z_i) = e^{z_i}/\sum_j e^{z_j}\)
- Cross-entropy: \(\mathcal{L} = -\sum_i y_i \log \hat{y}_i\)
- PCA covariance: \(\Sigma = \frac{1}{n} \sum_i (x_i - \mu)(x_i - \mu)^T\)

## Quick Lab Checklist

1. Train MLP on sklearn digits (64→128→64→10), ReLU, Adam, 20 epochs
2. Plot train loss and test accuracy
3. PCA: plot explained variance ratio; reconstruct images for k=8,16,32

## Summary

MLPs learn nonlinear decision boundaries by composing linear layers with activations. Backprop efficiently computes gradients. PCA compresses data by preserving maximum variance along principal axes; useful for visualization or as a preprocessing step.
