/**
 * ASHISH MAURYA — PERSONAL PORTFOLIO SCRIPTS
 * Minimalist & high-performance logic inspired by sakshii.tech
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Live Local Clock
  initLiveClock();

  // 2. Theme Toggle (Dark / Light)
  initThemeToggle();

  // 3. Email Copy with Floating Toast
  initEmailCopy();

  // 4. Interactive Terminal CLI
  initTerminal();
});

/* ==========================================================================
   1. LIVE LOCAL CLOCK (Updating every second)
   ========================================================================== */
function initLiveClock() {
  const clockEl = document.getElementById('live-time');
  if (!clockEl) return;

  function updateClock() {
    const now = new Date();
    // Format options: 12-hour format with AM/PM
    const timeString = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
    clockEl.textContent = timeString;
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/* ==========================================================================
   2. THEME TOGGLE (Persistent Dark / Light)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const root = document.documentElement;

  // Retrieve saved preference or default to dark
  const savedTheme = localStorage.getItem('ashish-portfolio-theme') || 'dark';
  setTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('ashish-portfolio-theme', theme);
    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.className = 'fas fa-sun';
      } else {
        themeIcon.className = 'fas fa-moon';
      }
    }
  }
}

/* ==========================================================================
   3. EMAIL COPY WITH TOAST NOTIFICATION
   ========================================================================== */
function initEmailCopy() {
  const copyBtns = [
    document.getElementById('copy-email-hero'),
    document.getElementById('copy-email-contact')
  ].filter(Boolean);

  const toast = document.getElementById('toast-notice');
  const toastText = document.getElementById('toast-text');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    if (toastText) toastText.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'ramashishmaurya738@gmail.com';

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = email;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }
        showToast('Email copied to clipboard: ' + email);
      } catch (err) {
        // Fallback: open mail client
        window.location.href = 'mailto:' + email;
      }
    });
  });
}

/* ==========================================================================
   4. INTERACTIVE TERMINAL CLI ENGINE
   ========================================================================== */
function initTerminal() {
  const output = document.getElementById('terminal-output');
  const form = document.getElementById('terminal-form');
  const input = document.getElementById('terminal-input');
  const chips = document.querySelectorAll('.terminal-chip');

  if (!output || !form || !input) return;

  const history = [];
  let historyIndex = -1;

  const kb = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.terminalKnowledgeBase) || {
    help: `[ASHISH AI TERMINAL :: COMMANDS]
  whoami      About Ashish, engineering background & focus
  stack       Production engineering tech stack & vector DBs
  prs         Merged open-source framework PRs (SynapseKit, LangGraph)
  projects    Key production systems (IntelliDoc RAG, Banking ML, MLflow)
  rag         Simulate end-to-end RAG semantic retrieval pipeline
  benchmarks  Latency, throughput & precision metrics
  contact     Direct contact protocol: Email, Phone, LinkedIn, GitHub
  resume      Download Ashish Maurya's official resume PDF
  clear       Clear terminal buffer`,

    whoami: `[ASHISH MAURYA :: CANDIDATE PROFILE]
• Role: AI & Data Science Engineer
• Core Focus: Production Multi-Agent Systems (LangGraph), Enterprise RAG, and High-Performance FastAPI WebSockets.
• Open Source: Core contributor to SynapseKit (PR #1056 AWS Lambda orchestration, PR #1057 Podman rootless sandbox).
• Philosophy: Deterministic execution, zero hallucination tolerance, sub-30ms TTFT, and maintainable software craftsmanship.
• Location: Mumbai, Maharashtra, India. Open for worldwide remote & on-site high-impact roles.`,

    stack: `[PRODUCTION ENGINEERING ARSENAL]
• Languages: Python 3.12 (Advanced), SQL (PostgreSQL, MySQL), JavaScript, Bash
• AI & Multi-Agent: LangGraph (Stateful Graphs), LangChain, Groq API, OpenAI SDK
• Vector & Retrieval: Qdrant Hybrid Search, ChromaDB, BM25, Cross-Encoder Re-ranking
• Backend: FastAPI (Async WebSockets), Django, Celery Distributed Queues, Redis
• MLOps & Infra: Docker, Podman Rootless, MLflow, AWS Lambda, Linux Seccomp, Git CI/CD`,

    prs: `[OPEN-SOURCE ECOSYSTEM HUBS & MERGED CONTRIBUTIONS]
1. SynapseKit (Core Contributor · 3 Merged PRs · +1,186 lines)
   • PR #1056: AWS Lambda Tool Orchestration for Autonomous Agents
   • PR #1057: Podman Rootless Sandbox Runtime for Untrusted Code
   • PR #1061: GitLab Webhook & CI/CD Pipeline Agent
2. LangGraph Ecosystem (Graph Contributor · 2 Merged PRs · +420 lines)
   • PR #842: Async state graph checkpointing fallback
   • PR #915: Custom tool routing error boundaries
3. DynaVec (Creator & Maintainer · +750 lines)
   • Async vector embedding engine with Bedrock connectors`,

    projects: `[FEATURED PRODUCTION SYSTEMS]
1. IntelliDoc RAG Enterprise Assistant
   • FastAPI, PyMuPDF, Qdrant Vector DB, WebSockets streaming (138 tok/s).
2. Financial Multi-Agent Research Engine
   • LangGraph multi-agent team with Podman rootless sandbox & Groq LLMs.
3. Banking Customer Segmentation & Churn Engine
   • Unsupervised RFM clustering & XGBoost deployed live on Render.
4. Salary Prediction & MLflow Pipeline
   • End-to-end MLOps containerized regression pipeline with experiment tracking.`,

    rag: `[INTELLIDOC RAG PIPELINE SIMULATION]
1. Ingestion: PyMuPDF parses 250-page technical PDF into semantic chunks (500 tokens).
2. Embeddings: Vectorized with text-embedding-3-small into 1536-dim vectors.
3. Qdrant Upsert: Indexed into Qdrant collection with payload metadata & HNSW graph.
4. Hybrid Retrieval: Dense cosine similarity (> 0.88) + BM25 keyword matching returns top-8 candidates.
5. Re-Ranking: Cross-Encoder filters top-3 highest scoring excerpts.
6. Generation: FastAPI WebSockets stream tokens at 138 tok/s with exact citations.
Status: Verification Passed · Hallucination Rate = 0.00%.`,

    benchmarks: `[PERFORMANCE METRICS MATRIX]
• LLM Time-to-First-Token (TTFT): 28ms (Groq Llama-3.3-70B via FastAPI)
• Vector Semantic Retrieval: 38ms average across 50k document vectors in Qdrant
• Container Sandbox Spin-Up: 160ms (Podman rootless microVM vs 420ms standard Docker)
• Citation Grounding Rate: 99.8% precision with Cross-Encoder verification.`,

    contact: `[ASHISH MAURYA :: CONTACT PROTOCOL]
• Email: ramashishmaurya738@gmail.com
• Phone / WhatsApp: +91 9769295699
• Location: Mumbai, Maharashtra, India
• GitHub: https://github.com/ramashishmaurya
• LinkedIn: https://www.linkedin.com/in/ashishmaurya09/
• Twitter: https://x.com/ashishmaurya02`,

    resume: `[RESUME ACCESS GRANTED]
• File: Ashish_Maurya_Resume.pdf
• Candidate: Ashish Maurya | AI & Data Science Engineer
Opening official resume...`
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    history.push(cmd);
    historyIndex = history.length;

    // Echo input
    output.textContent += `\n\nvisitor@ashish:~$ ${cmd}\n`;

    const lower = cmd.toLowerCase();

    if (lower === 'clear' || lower === 'cls') {
      output.textContent = `[ASHISH AI TERMINAL v2.6 :: READY]\nType 'help' or click any command chip above to inspect details.`;
      output.scrollTop = output.scrollHeight;
      return;
    }

    if (lower === 'resume') {
      window.open('Ashish_Maurya_Resume.pdf', '_blank');
      output.textContent += kb.resume;
      output.scrollTop = output.scrollHeight;
      return;
    }

    // Direct command match
    if (kb[lower]) {
      output.textContent += kb[lower];
      output.scrollTop = output.scrollHeight;
      return;
    }

    // Natural query / keyword fuzzy matching
    if (lower.includes('hire') || lower.includes('why')) {
      output.textContent += `[WHY HIRE ASHISH MAURYA]
1. Production Experience: Not just tutorials—actively merged PRs to open-source frameworks (SynapseKit, LangGraph).
2. Full Lifecycle: Builds vector search, multi-agent teams, and Dockerized FastAPI backends.
3. Quantifiable Impact: Live banking segmentation on Render, containerized MLflow salary pipelines, sub-30ms TTFT RAG systems.
4. Clean Craftsmanship: Obsessed with deterministic execution, zero hallucinations, and maintainable software.`;
    } else if (lower.includes('synapse') || lower.includes('lambda') || lower.includes('podman')) {
      output.textContent += kb.prs;
    } else if (lower.includes('vector') || lower.includes('qdrant') || lower.includes('chroma')) {
      output.textContent += `[VECTOR & RETRIEVAL ARSENAL]
• Primary: Qdrant Hybrid Search (Cosine Sim > 0.88 with dense + BM25 keyword matching)
• Secondary: ChromaDB, HNSW graph indexing, Cross-Encoder re-rankers
• Result: 38ms average retrieval latency across 50k document chunks.`;
    } else if (lower.includes('agent') || lower.includes('langgraph')) {
      output.textContent += `[AGENTIC AI ARCHITECTURE]
Ashish builds stateful multi-agent systems using LangGraph:
• Router Node analyzes intent complexity
• Parallel specialized agents (Search, Analyst, Risk, Editor)
• Sandboxed execution via rootless Podman (SynapseKit PR #1057)
• Deterministic state graph checkpointing with sub-35ms WebSocket streaming.`;
    } else {
      output.textContent += `Command not recognized: '${cmd}'.\nType 'help' for a list of valid commands or click any chip above.`;
    }

    output.scrollTop = output.scrollHeight;
  }

  // Handle Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cmd = input.value;
    input.value = '';
    executeCommand(cmd);
  });

  // Handle Command Chips
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) {
        input.value = '';
        executeCommand(cmd);
      }
    });
  });

  // History Navigation & Tab Completion
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0 && historyIndex > 0) {
        historyIndex--;
        input.value = history[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        historyIndex++;
        input.value = history[historyIndex];
      } else {
        historyIndex = history.length;
        input.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const current = input.value.trim().toLowerCase();
      const commands = Object.keys(kb).concat(['clear', 'cls']);
      const match = commands.find(c => c.startsWith(current));
      if (match) {
        input.value = match;
      }
    }
  });
}
