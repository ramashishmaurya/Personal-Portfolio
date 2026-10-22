# Ashish Maurya Portfolio — Developer Guide 🚀

Namaste Ashish bhai! This guide explains the clean, modular structure of your portfolio codebase. Everything has been organized so that **whenever you want to change any information, text, project, or open-source PR, you can do it from a single central file: [`portfolio-data.js`](file:///e:/abc/Personal-Portfolio/portfolio-data.js)!**

---

## 📁 Modular File Architecture

```text
Personal-Portfolio/
├── portfolio-data.js           <-- ⭐ CENTRAL DATA HUB (Edit personal info, PRs, projects, CLI answers here!)
├── index.html                  <-- Main semantic website skeleton & SEO tags
├── styles.css                  <-- Modern design system, themes, and animations
├── script.js                   <-- Interactive logic (CLI engine, GitHub live auto-sync, filters)
├── profile.jpg                 <-- Profile photo (Ashish with city lights backdrop)
├── githubs.jpeg                <-- Alternate profile/GitHub photo asset
├── Ashish_Maurya_Resume.pdf    <-- Downloadable resume PDF
├── PORTFOLIO_GUIDE.md          <-- This reference guide
└── README.md                   <-- Repository documentation
```

---

## ⚡ Quick Reference: How to Change Anything

You don't need to hunt through thousands of lines of HTML or CSS. Simply open [`portfolio-data.js`](file:///e:/abc/Personal-Portfolio/portfolio-data.js):

| What you want to change | Location in `portfolio-data.js` | How to update |
| :--- | :--- | :--- |
| **Phone, Email, Location** | `PORTFOLIO_DATA.personal` (Line 25) | Edit `phone`, `email`, `location` strings |
| **Social Links** (LinkedIn, GitHub, X) | `PORTFOLIO_DATA.personal.social` (Line 36) | Edit URLs inside the `social` object |
| **Open Source PRs** (Add / Edit PRs) | `PORTFOLIO_DATA.openSourcePRs` (Line 56) | Add or edit PR cards (auto-updates UI & CLI) |
| **Projects Showcase** (2 GenAI + 2 ML) | `PORTFOLIO_DATA.projects` (Line 115) | Edit titles, tech tags, descriptions, links |
| **AI Terminal CLI Answers & Commands** | `PORTFOLIO_DATA.terminalKnowledgeBase` (Line 190) | Add new commands or change answers |
| **Services & Capabilities** | `PORTFOLIO_DATA.services` (Line 335) | Edit service titles, descriptions, and feature lists |

---

## 🔍 In-Depth Details by Section

### 1. Open Source & Merged Contributions Hub (Section 05)
- **Automatic GitHub Live Sync**:
  Whenever you merge a new PR on GitHub under your account (`@ramashishmaurya`), the script automatically calls GitHub's public API on page load and prepends your newest merged PRs to the cards!
- **Manual Addition / Offline Fallback**:
  In [`portfolio-data.js`](file:///e:/abc/Personal-Portfolio/portfolio-data.js), go to `openSourcePRs` and simply copy-paste a new PR block:
  ```javascript
  {
    id: 1062,
    title: 'Your New Feature or Framework PR',
    repo: 'SynapseKit / Core',
    category: 'serverless', // 'serverless' | 'security' | 'devops'
    status: 'MERGED #1062',
    date: 'Merged Jan 2025',
    desc: 'Description of what your PR accomplished...',
    diffAdd: '+150 lines',
    diffDel: '-12 lines',
    filesChanged: '3 files changed',
    branch: 'feat/new-tool',
    tags: ['Python 3.12', 'FastAPI'],
    prUrl: 'https://github.com/ramashishmaurya'
  }
  ```

---

### 2. Flagship Projects Showcase (Section 08)
Curated to showcase **exactly 2 flagship projects per domain**:
- **Generative AI & Agents (2)**:
  1. *IntelliDoc RAG Assistant* (FastAPI, React, LangChain, Qdrant, WebSockets)
  2. *Financial Research Multi-Agent Engine* (LangGraph, Groq LLMs, Celery, Redis)
- **Machine Learning & MLOps (2)**:
  1. *Banking Customer Segmentation & Churn* (Scikit-learn, K-Means, Streamlit, Live on Render)
  2. *Automated Salary Prediction Pipeline* (Random Forest, XGBoost, Docker, MLflow)
- **Filter Pills**:
  Users can click *All Projects (4)*, *Generative AI & Agents (2)*, or *Machine Learning (2)* to filter dynamically.

---

### 3. Interactive AI Agent Terminal Console (Section 04)
The AI console is a real-time CLI terminal:
- **Direct Commands**: `help`, `whoami`, `stack`, `projects`, `prs`, `rag`, `benchmarks`, `contact`, `resume`, `clear`.
- **Natural Language Support**: You can ask questions like *"Why should we hire you?"*, *"How do you build LangGraph multi-agent systems?"*, *"Explain your SynapseKit AWS Lambda PR"*.
- **Command History**: Press the **Up** and **Down** arrow keys to cycle through previous terminal commands.
- **Single Source of Truth**: All responses are defined in `PORTFOLIO_DATA.terminalKnowledgeBase` inside [`portfolio-data.js`](file:///e:/abc/Personal-Portfolio/portfolio-data.js).

---

### 4. Updating Profile Picture or Resume
- **Profile Photo**: Replace [`profile.jpg`](file:///e:/abc/Personal-Portfolio/profile.jpg) with any new photo.
- **Resume PDF**: Replace [`Ashish_Maurya_Resume.pdf`](file:///e:/abc/Personal-Portfolio/Ashish_Maurya_Resume.pdf) with your updated resume. The download buttons and CLI `'resume'` command will automatically deliver the new file.

---

### 5. Accent Colors & Theme Customization
To adjust the primary cyber accent colors, open [`styles.css`](file:///e:/abc/Personal-Portfolio/styles.css) lines 10-30:
- `--accent-cyan`: `#06b6d4`
- `--accent-blue`: `#2563eb`
- `--accent-violet`: `#8b5cf6`

---

## 🚀 How to Deploy / Push to GitHub

Once you are satisfied with your changes and ready to push to your GitHub repo:
```bash
cd e:\abc\Personal-Portfolio
git add .
git commit -m "feat: restructure codebase with modular portfolio-data.js and streamlined open-source PR hub"
git push origin main
```
Your live GitHub Pages website will automatically update within 1-2 minutes at:
👉 **https://ramashishmaurya.github.io/Personal-Portfolio/**
