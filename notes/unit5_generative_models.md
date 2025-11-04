# Unit V — Generative Models

## Topics
- Restricted Boltzmann Machines (RBMs) and Deep Belief Networks (DBNs)
- Generative Adversarial Networks (GANs) and variants
- Evaluation metrics for generative models
- Applications: Image synthesis, data augmentation

## Learning Outcomes
- Understand and implement GANs and RBMs at a conceptual level.
- Evaluate generative outputs and common pitfalls (mode collapse, instability).

## Suggested Reading
- Goodfellow et al., GAN original paper, DCGAN paper, WGAN.

---

## Key Concepts
- GAN: min–max game between generator \(G\) and discriminator \(D\)
- WGAN: uses Earth Mover (Wasserstein-1) distance with Lipschitz constraint
- Conditioning (cGAN): class-conditional generation via label embedding

## Equations
- GAN objective: \(\min_G \max_D \; \mathbb{E}_{x\sim p_{data}}[\log D(x)] + \mathbb{E}_{z\sim p(z)}[\log(1-D(G(z)))]\)
- WGAN: \(\min_G \max_{\lVert D \rVert_L \le 1} \mathbb{E}[D(x)] - \mathbb{E}[D(G(z))]\)

## Quick Lab Checklist
1. Train DCGAN on MNIST for 5 epochs; log losses
2. Visualize 16-sample grids every epoch
3. Try label-conditional generation (cGAN)

## Summary
Generative models synthesize data by learning distributions. GANs produce sharp samples but can be unstable; architectural choices and losses (e.g., WGAN-GP) help mitigate issues like mode collapse.
