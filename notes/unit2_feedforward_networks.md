# Unit II — Optimization & Autoencoders

## Topics
- Gradient descent and variants (SGD, Momentum, RMSProp, Adam)
- Learning rate schedules
- Autoencoders, Denoising Autoencoders
- Variational Autoencoders (VAE)

## Learning Outcomes
- Choose appropriate optimizers and hyperparameters for training.
- Build and train basic autoencoders and VAEs for dimensionality reduction and generative tasks.

## Suggested Reading
- Chollet, _Deep Learning with Python_
- Kingma & Welling (VAE paper)

---

## Key Concepts

- Optimizer updates:
	- Momentum: \(v_t = \beta v_{t-1} + (1-\beta)\nabla \mathcal{L}\), \(\theta_t = \theta_{t-1} - \eta v_t\)
	- RMSProp: adaptive per-parameter step: \(s_t=\rho s_{t-1}+(1-\rho)\nabla^2\), \(\theta\leftarrow \theta-\eta \nabla/\sqrt{s_t+\epsilon}\)
	- Adam: combines Momentum + RMSProp with bias correction.
- Denoising AE: learn to reconstruct clean input from corrupted input, encourages robust features.
- VAE: probabilistic latent space with KL divergence regularization.

## Equations

- VAE loss: \(\mathcal{L} = \mathbb{E}_{q_\phi(z|x)}[\log p_\theta(x|z)] - \mathrm{KL}(q_\phi(z|x)\,||\,p(z))\)
- Reparameterization: \(z = \mu + \sigma \odot \epsilon,\; \epsilon\sim\mathcal{N}(0,I)\)

## Quick Lab Checklist
1. Train denoising AE on MNIST (noise p=0.3), visualize denoised samples
2. Compare Adam vs SGD+Momentum learning curves
3. Implement a tiny VAE and show sample generations

## Summary
Optimizers shape convergence speed and stability. Autoencoders learn compressed representations; VAEs add a probabilistic latent prior enabling sampling and interpolation.
