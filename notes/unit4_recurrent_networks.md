# Unit IV — Recurrent Networks & Attention

## Topics
- RNNs, vanishing/exploding gradients
- LSTM and GRU architectures
- Attention mechanisms and Transformers (overview)
- Applications: Text generation, machine translation, video analytics

## Learning Outcomes
- Build sequence models using LSTM/GRU.
- Apply attention mechanisms for improved sequence modeling.

## Suggested Reading
- Chopra et al., Bahdanau et al. (attention), Transformer paper (Vaswani et al.)
 
---

## Key Concepts
- LSTM gates: input, forget, output regulate cell state update and exposure
- Teacher forcing speeds training but may cause exposure bias at inference
- Attention computes weighted context: \(\alpha=\operatorname{softmax}(qk^T)\), \(\text{Attn}(q,k,v)=\alpha v\)

## Equations
- LSTM (one step): \(i=\sigma(W_i[x,h_{t-1}]),\; f=\sigma(W_f[x,h_{t-1}]),\; o=\sigma(W_o[x,h_{t-1}]),\; g=\tanh(W_g[x,h_{t-1}])\)
- Update: \(c_t=f\odot c_{t-1}+ i\odot g,\; h_t=o\odot\tanh(c_t)\)

## Quick Lab Checklist
1. Char-level LSTM on a tiny corpus (100k chars)
2. Bidirectional LSTM for sentiment on a small dataset
3. Add Luong attention and visualize alignments

## Summary
RNNs capture temporal dependencies but may struggle with long-range context. LSTMs/GRUs mitigate gradient issues, while attention directly models token interactions and has become the standard via Transformers.
