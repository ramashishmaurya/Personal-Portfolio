/**
 * ============================================================================
 * ASHISH MAURYA | PORTFOLIO SCRIPTS
 * Interactive AI Agent Console (Live Input + Streaming Engine)
 * Multi-Agent Graph Architecture & Services Master-Detail Selector
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     01. THEME SWITCHER (Dark & Light Mode with LocalStorage)
     -------------------------------------------------------------------------- */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const root = document.documentElement;

  const savedTheme = localStorage.getItem('ashish-portfolio-theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('ashish-portfolio-theme', newTheme);
    });
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (themeIcon) {
      themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  }

  /* --------------------------------------------------------------------------
     02. MOBILE NAVIGATION MENU
     -------------------------------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.className = mobileNav.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
      }
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }

  /* --------------------------------------------------------------------------
     03. SCROLL NAVIGATION & BACK-TO-TOP BUTTON
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });

    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'auto';
      } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.pointerEvents = 'none';
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --------------------------------------------------------------------------
     04. ENHANCED INTERACTIVE AI AGENT CONSOLE (TERMINAL CLI ENGINE)
     -------------------------------------------------------------------------- */
  const termScreen = document.getElementById('terminal-screen');
  const termHistory = document.getElementById('terminal-history');
  const termInput = document.getElementById('terminal-user-input');
  const termSendBtn = document.getElementById('terminal-send-btn');
  const termCmdBtns = document.querySelectorAll('.term-cmd-btn');
  const termCatTabs = document.querySelectorAll('.term-cat-tab');
  const termStatusTag = document.getElementById('telemetry-status');
  const termClusterTitle = document.getElementById('terminal-cluster-title');
  const telemetryModel = document.getElementById('telemetry-model');
  const telemetryLatency = document.getElementById('telemetry-latency');
  const telemetryToks = document.getElementById('telemetry-toks');
  const telemetryTokenCount = document.getElementById('telemetry-token-count');

  // Toolbar Buttons
  const termCopyBtn = document.getElementById('term-copy-btn');
  const termCotBtn = document.getElementById('term-cot-btn');
  const termClearBtn = document.getElementById('term-clear-btn');
  const termExportBtn = document.getElementById('term-export-btn');
  const cotTracePanel = document.getElementById('cot-trace-panel');
  const modelPills = document.querySelectorAll('.model-pill');

  // Model Engine Profiles
  const modelProfiles = {
    llama: {
      name: 'groq/llama-3.3-70b',
      title: 'ashish-ai-agent-v2.6 :: groq-llama-3.3-70b',
      latency: '28ms',
      speed: '138 tok/s',
      note: '[ENGINE SWITCH] Activated Groq Llama-3.3-70B: High throughput, sub-30ms TTFT, optimized for real-time agent tool routing.'
    },
    deepseek: {
      name: 'deepseek-r1-distill',
      title: 'ashish-ai-agent-v2.6 :: deepseek-r1-reasoner',
      latency: '64ms',
      speed: '82 tok/s',
      note: '[ENGINE SWITCH] Activated DeepSeek-R1: Long-context Chain-of-Thought (CoT) activated. Mathematical validation and deep multi-hop inference enabled.'
    },
    claude: {
      name: 'claude-3.5-sonnet',
      title: 'ashish-ai-agent-v2.6 :: claude-3.5-architect',
      latency: '48ms',
      speed: '95 tok/s',
      note: '[ENGINE SWITCH] Activated Claude-3.5-Sonnet: Production system architecture, strict contract adherence, and clean software craftsmanship mode.'
    },
    qdrant: {
      name: 'qdrant-hybrid-hnsw',
      title: 'ashish-ai-agent-v2.6 :: qdrant-vector-engine',
      latency: '18ms',
      speed: '210 tok/s',
      note: '[ENGINE SWITCH] Activated Qdrant Hybrid Retriever: Dense cosine vector search + Sparse BM25 with metadata payload filtering.'
    }
  };

  // Centralized knowledge base loaded from portfolio-data.js (Single Source of Truth)
  const knowledgeBase = (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.terminalKnowledgeBase)
    ? PORTFOLIO_DATA.terminalKnowledgeBase
    : {
        help: `[ASHISH AI TERMINAL v2.6 :: SHELL COMMANDS]\nType: help, whoami, stack, projects, prs, rag, benchmarks, contact, resume, clear`,
        whoami: `[ASHISH MAURYA]\nAI & Data Science Engineer specializing in Multi-Agent Systems & RAG.`,
        stack: `Python 3.12, LangGraph, FastAPI, Qdrant, Docker, PostgreSQL, MLflow.`,
        contact: `ramashishmaurya738@gmail.com | +91 9769295699 | github.com/ramashishmaurya`,
        resume: `[RESUME ACCESS GRANTED] Download started for Ashish_Maurya_Resume.pdf`
      };


  // State Management for CLI
  let isStreaming = false;
  const commandHistory = [];
  let historyIndex = -1;

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Focus terminal input when clicking anywhere inside the terminal screen
  if (termScreen && termInput) {
    termScreen.addEventListener('click', (e) => {
      if (window.getSelection().toString().length > 0) return;
      if (e.target.closest('button') || e.target.closest('a')) return;
      termInput.focus();
    });
  }

  // Token-by-token streaming typewriter into a specific entry pre element
  function streamToEntry(preElement, text, onComplete) {
    if (!preElement) return;
    isStreaming = true;
    preElement.textContent = '';

    if (termStatusTag) {
      termStatusTag.textContent = '● Generating...';
      termStatusTag.style.color = '#38bdf8';
    }

    let index = 0;
    const speed = 6;
    const stepSize = text.length > 350 ? 3 : 1;

    function typeStep() {
      if (index < text.length) {
        const nextSlice = text.slice(index, index + stepSize);
        preElement.textContent += nextSlice;
        index += stepSize;

        if (telemetryTokenCount) {
          telemetryTokenCount.textContent = Math.round(index / 3.8);
        }

        if (termScreen) {
          termScreen.scrollTop = termScreen.scrollHeight;
        }

        setTimeout(typeStep, speed);
      } else {
        preElement.textContent = text;
        isStreaming = false;
        if (termStatusTag) {
          termStatusTag.textContent = '● Active (Ready)';
          termStatusTag.style.color = '#34d399';
        }
        if (termScreen) {
          termScreen.scrollTop = termScreen.scrollHeight;
        }
        if (termInput) {
          termInput.focus();
        }
        if (onComplete) onComplete();
      }
    }

    typeStep();
  }

  // General stream fallback for lab simulation
  function streamOutput(text, onComplete) {
    const preOutput = document.getElementById('terminal-output');
    if (preOutput) {
      streamToEntry(preOutput, text, onComplete);
    } else {
      executeCommand(text);
    }
  }

  // Query / Command Router
  function getResponseForQuery(inputStr) {
    const q = inputStr.trim().toLowerCase();

    // Direct CLI commands
    if (q === 'help' || q === '?' || q === '--help' || q === 'commands') {
      return knowledgeBase.help;
    }
    if (q === 'whoami' || q === 'bio' || q === 'ashish') {
      return knowledgeBase.whoami;
    }
    if (q === 'stack' || q === 'skills' || q === 'technologies' || q === 'tech') {
      return knowledgeBase.stack;
    }
    if (q === 'projects' || q === 'work' || q === 'portfolio') {
      return knowledgeBase.projects;
    }
    if (q === 'pr' || q === 'prs' || q === 'opensource' || q === 'synapsekit') {
      return knowledgeBase.prs;
    }
    if (q === 'rag' || q === 'intellidoc') {
      return knowledgeBase.rag_demo;
    }
    if (q === 'benchmarks' || q === 'speed' || q === 'latency') {
      return knowledgeBase.benchmarks;
    }
    if (q === 'contact' || q === 'email' || q === 'phone' || q === 'reach') {
      return knowledgeBase.contact;
    }
    if (q === 'resume' || q === 'cv') {
      return knowledgeBase.resume;
    }

    // Natural Language Queries
    if (q.includes('hire') || q.includes('why') || q.includes('who are you') || q.includes('about')) {
      return knowledgeBase.why_hire;
    }
    if (q.includes('stack') || q.includes('tool') || q.includes('language') || q.includes('framework')) {
      return knowledgeBase.stack;
    }
    if (q.includes('synapse') || q.includes('aws') || q.includes('lambda')) {
      return knowledgeBase.synapse_aws;
    }
    if (q.includes('podman') || q.includes('sandbox') || q.includes('container') || q.includes('security') || q.includes('docker')) {
      return knowledgeBase.podman_sandbox;
    }
    if (q.includes('rag') || q.includes('pdf') || q.includes('retriev') || q.includes('qdrant') || q.includes('document')) {
      return knowledgeBase.rag_demo;
    }
    if (q.includes('bank') || q.includes('segment') || q.includes('churn') || q.includes('rfm')) {
      return knowledgeBase.banking_ml;
    }
    if (q.includes('bench') || q.includes('speed') || q.includes('tok') || q.includes('latency')) {
      return knowledgeBase.benchmarks;
    }
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('whatsapp') || q.includes('linkedin')) {
      return knowledgeBase.contact;
    }
    if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
      return knowledgeBase.resume;
    }
    if (q.includes('agent') || q.includes('langgraph') || q.includes('multi-agent') || q.includes('supervisor')) {
      return knowledgeBase.architecture;
    }

    // Dynamic Generic Inference
    return `[QUERY PROCESSED] "${inputStr}"
[AGENT REASONING]
Intent classified: Technical inquiry regarding Ashish Maurya's engineering background.
• Specialized Profile: Production AI & Data Science Engineer (Mumbai, India).
• Core Competencies: LangGraph Multi-Agent Systems, High-Performance RAG (Qdrant), FastAPI WebSockets, Daemonless Podman Sandboxes, and Predictive ML.
• Open-Source Cred: Merged PR #1056 (AWS Lambda Tool) & PR #1057 (Podman Sandbox) into SynapseKit.
• Direct Inquiries: ramashishmaurya738@gmail.com | +91 9769295699 | https://github.com/ramashishmaurya
Tip: Try typing 'help', 'whoami', 'stack', 'rag', 'projects', or 'contact'.`;
  }

  // Execute Command entered by user or triggered by chip
  function executeCommand(rawInput) {
    if (!termHistory) return;
    const inputStr = (rawInput || '').trim();
    if (!inputStr) return;

    // Save to command history
    commandHistory.push(inputStr);
    historyIndex = -1;

    // Clear input
    if (termInput) {
      termInput.value = '';
    }

    const lower = inputStr.toLowerCase();

    // Clear Screen command
    if (lower === 'clear' || lower === 'cls') {
      termHistory.innerHTML = '';
      if (telemetryTokenCount) telemetryTokenCount.textContent = '0';
      if (termInput) termInput.focus();
      return;
    }

    // Create a new Terminal Entry in history
    const entry = document.createElement('div');
    entry.className = 'terminal-entry';
    entry.innerHTML = `
      <div class="entry-user-prompt">
        <span class="terminal-prompt-sym" style="color: #22d3ee; font-weight: 700;">visitor@ashish-ai:~$</span>
        <span class="terminal-cmd-text" style="color: #f8fafc; font-weight: 600;">${escapeHtml(inputStr)}</span>
      </div>
      <pre class="terminal-output"></pre>
    `;
    termHistory.appendChild(entry);

    if (termScreen) {
      termScreen.scrollTop = termScreen.scrollHeight;
    }

    const preEl = entry.querySelector('.terminal-output');
    const responseText = getResponseForQuery(inputStr);

    // Trigger download if resume command
    if (lower === 'resume' || lower === 'cv' || lower.includes('download resume')) {
      setTimeout(() => {
        const resumeFile = (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.personal && PORTFOLIO_DATA.personal.resumePdf)
          ? PORTFOLIO_DATA.personal.resumePdf
          : 'Ashish_Maurya_Resume.pdf';
        const link = document.createElement('a');
        link.href = resumeFile;
        link.download = resumeFile;
        link.click();
      }, 1000);
    }

    // Stream response
    streamToEntry(preEl, responseText);
  }

  // Input Event Listeners for Terminal CLI
  if (termSendBtn) {
    termSendBtn.addEventListener('click', () => {
      if (termInput) executeCommand(termInput.value);
    });
  }

  if (termInput) {
    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        executeCommand(termInput.value);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (commandHistory.length > 0) {
          if (historyIndex === -1) {
            historyIndex = commandHistory.length - 1;
          } else if (historyIndex > 0) {
            historyIndex--;
          }
          termInput.value = commandHistory[historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (commandHistory.length > 0 && historyIndex !== -1) {
          if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            termInput.value = commandHistory[historyIndex];
          } else {
            historyIndex = -1;
            termInput.value = '';
          }
        }
      } else if (e.key === 'Escape') {
        termInput.value = '';
      }
    });
  }

  // Quick Prompt Chips Event Handlers
  termCmdBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      const label = btn.textContent.trim();
      executeCommand(cmd || label);
    });
  });

  // Category Filter Tabs for Quick Prompts
  termCatTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      termCatTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const cat = tab.getAttribute('data-cat');
      termCmdBtns.forEach(btn => {
        const btnCat = btn.getAttribute('data-cat');
        if (cat === 'all' || btnCat === cat) {
          btn.style.display = 'inline-flex';
        } else {
          btn.style.display = 'none';
        }
      });
    });
  });

  // Model Switcher Event Handlers
  modelPills.forEach(pill => {
    pill.addEventListener('click', () => {
      modelPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const modelKey = pill.getAttribute('data-model');
      const profile = modelProfiles[modelKey] || modelProfiles.llama;

      if (termClusterTitle) termClusterTitle.textContent = profile.title;
      if (telemetryModel) telemetryModel.textContent = `model: ${profile.name}`;
      if (telemetryLatency) telemetryLatency.textContent = `latency: ${profile.latency}`;
      if (telemetryToks) telemetryToks.textContent = `speed: ${profile.speed}`;

      // If DeepSeek selected, automatically open CoT trace
      if (modelKey === 'deepseek' && cotTracePanel) {
        cotTracePanel.style.display = 'block';
      }

      executeCommand(`switch-engine --model ${profile.name}`);
    });
  });

  // Toolbar Actions: Copy, CoT Toggle, Clear, Export JSON
  if (termCopyBtn) {
    termCopyBtn.addEventListener('click', () => {
      if (!termHistory) return;
      const allText = termHistory.innerText;
      navigator.clipboard.writeText(allText).then(() => {
        const btnText = document.getElementById('copy-btn-text');
        if (btnText) {
          btnText.textContent = 'Copied!';
          setTimeout(() => { btnText.textContent = 'Copy'; }, 2000);
        }
      });
    });
  }

  if (termCotBtn) {
    termCotBtn.addEventListener('click', () => {
      if (!cotTracePanel) return;
      cotTracePanel.style.display = cotTracePanel.style.display === 'none' ? 'block' : 'none';
    });
  }

  if (termClearBtn) {
    termClearBtn.addEventListener('click', () => {
      if (termHistory) {
        termHistory.innerHTML = `
          <div class="terminal-entry">
            <pre class="terminal-output">[SYSTEM READY] Screen buffer cleared. Type any command (e.g. 'help', 'whoami', 'stack', 'rag', 'projects', 'contact') or ask any question!</pre>
          </div>
        `;
      }
      if (telemetryTokenCount) telemetryTokenCount.textContent = '0';
      if (termInput) termInput.focus();
    });
  }

  if (termExportBtn) {
    termExportBtn.addEventListener('click', () => {
      const payload = {
        author: 'Ashish Maurya',
        role: 'AI & Data Science Engineer',
        cluster: 'ashish-ai-agent-v2.6',
        timestamp: new Date().toISOString(),
        history: termHistory ? termHistory.innerText : ''
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ashish_agent_session_${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  /* --------------------------------------------------------------------------
     05. OPEN SOURCE & MERGED CONTRIBUTIONS HUB (PROJECT HUBS & TOP TOPICS)
     Scalable to 100+ PRs: Grouped by Project/Repo with Top Topics Matrix
     -------------------------------------------------------------------------- */
  const openSourceHub = (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.openSourceHub)
    ? PORTFOLIO_DATA.openSourceHub
    : null;

  let openSourcePRs = (typeof PORTFOLIO_DATA !== 'undefined' && Array.isArray(PORTFOLIO_DATA.openSourcePRs))
    ? [...PORTFOLIO_DATA.openSourcePRs]
    : [];

  const osProjectsContainer = document.getElementById('os-projects-container');
  const osPrsContainer = document.getElementById('os-pr-cards-container');
  const toggleViewProjectsBtn = document.getElementById('toggle-view-projects');
  const toggleViewPrsBtn = document.getElementById('toggle-view-prs');
  const osTopicPills = document.querySelectorAll('.os-topic-pill');
  const osPrCountEl = document.getElementById('os-pr-count');
  const osLinesCountEl = document.getElementById('os-lines-count');
  const osReposCountEl = document.getElementById('os-repos-count');
  const osToggleProjectsCountEl = document.getElementById('os-toggle-projects-count');
  const osTogglePrsCountEl = document.getElementById('os-toggle-prs-count');

  // View Mode Switcher: "By Project" vs "Recent PR Highlights"
  if (toggleViewProjectsBtn && toggleViewPrsBtn) {
    toggleViewProjectsBtn.addEventListener('click', () => {
      toggleViewProjectsBtn.classList.add('active');
      toggleViewPrsBtn.classList.remove('active');
      if (osProjectsContainer) osProjectsContainer.style.display = 'grid';
      if (osPrsContainer) osPrsContainer.style.display = 'none';
    });

    toggleViewPrsBtn.addEventListener('click', () => {
      toggleViewPrsBtn.classList.add('active');
      toggleViewProjectsBtn.classList.remove('active');
      if (osProjectsContainer) osProjectsContainer.style.display = 'none';
      if (osPrsContainer) osPrsContainer.style.display = 'grid';
    });
  }

  // Top Topics Filter: Filters Project Cards and PR Cards by topic
  osTopicPills.forEach(pill => {
    pill.addEventListener('click', () => {
      osTopicPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const topic = pill.getAttribute('data-topic');

      // Filter Project Cards
      const projectCards = document.querySelectorAll('.os-project-card');
      projectCards.forEach(card => {
        const cardTopics = (card.getAttribute('data-topics') || '').toLowerCase();
        const cardCategory = (card.getAttribute('data-category') || '').toLowerCase();
        if (topic === 'all' || cardTopics.includes(topic) || cardCategory === topic) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(8px)';
          setTimeout(() => { card.style.display = 'none'; }, 150);
        }
      });

      // Filter PR Cards
      const prCards = document.querySelectorAll('.pr-full-card');
      prCards.forEach(card => {
        const prTopics = (card.getAttribute('data-topics') || '').toLowerCase();
        const prCat = (card.getAttribute('data-category') || '').toLowerCase();
        if (topic === 'all' || prTopics.includes(topic) || prCat === topic) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(8px)';
          setTimeout(() => { card.style.display = 'none'; }, 150);
        }
      });
    });
  });

  // Background GitHub Sync: Aggregates live merged PRs by repository
  async function syncGitHubPRs() {
    try {
      const res = await fetch('https://api.github.com/search/issues?q=author:ramashishmaurya+type:pr+is:merged', {
        headers: { 'Accept': 'application/vnd.github.v3+json' }
      });
      if (!res.ok) return;
      const data = await res.json();
      if (data.items && data.items.length > 0) {
        // Update live metrics
        const totalMerged = data.total_count || data.items.length;
        if (osPrCountEl) osPrCountEl.textContent = `${totalMerged}+`;

        // Group by repository
        const repoMap = new Map();
        data.items.forEach(item => {
          const repoSlug = item.repository_url
            ? item.repository_url.replace('https://api.github.com/repos/', '')
            : 'Other / Open Source';
          repoMap.set(repoSlug, (repoMap.get(repoSlug) || 0) + 1);
        });

        const repoCount = repoMap.size;
        if (osReposCountEl && repoCount > 0) {
          osReposCountEl.textContent = `${repoCount} Repositories`;
        }
        if (osToggleProjectsCountEl && repoCount > 0) {
          osToggleProjectsCountEl.textContent = repoCount;
        }
      }
    } catch (e) {
      // Graceful fallback to portfolio-data.js
    }
  }

  // Initial Sync Trigger
  syncGitHubPRs();

  /* --------------------------------------------------------------------------
     06. SERVICES MASTER-DETAIL SELECTOR
     -------------------------------------------------------------------------- */
  // Load Services Data from centralized portfolio-data.js (Single Source of Truth)
  const servicesData = (typeof PORTFOLIO_DATA !== 'undefined' && Array.isArray(PORTFOLIO_DATA.services))
    ? PORTFOLIO_DATA.services
    : [];


  const serviceButtons = document.querySelectorAll('.service-item-btn');
  const previewNum = document.getElementById('preview-num');
  const previewIcon = document.getElementById('preview-icon');
  const previewTitle = document.getElementById('preview-title');
  const previewDesc = document.getElementById('preview-desc');
  const previewFeatures = document.getElementById('preview-features');
  const previewTags = document.getElementById('preview-tags');
  const previewCard = document.getElementById('service-preview-card');

  serviceButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      serviceButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const data = servicesData[index];
      if (data && previewTitle) {
        if (previewCard) {
          previewCard.style.opacity = '0.4';
          previewCard.style.transform = 'translateY(6px)';
        }

        setTimeout(() => {
          if (previewNum) previewNum.textContent = data.num;
          if (previewIcon) previewIcon.className = data.icon;
          if (previewTitle) previewTitle.textContent = data.title;
          if (previewDesc) previewDesc.textContent = data.desc;

          if (previewFeatures) {
            previewFeatures.innerHTML = data.features
              .map(f => `<li><i class="fas fa-check-circle"></i> <span>${f}</span></li>`)
              .join('');
          }

          if (previewTags) {
            previewTags.innerHTML = data.tags
              .map(t => `<span>${t}</span>`)
              .join('');
          }

          if (previewCard) {
            previewCard.style.opacity = '1';
            previewCard.style.transform = 'translateY(0)';
          }
        }, 120);
      }
    });
  });

  /* --------------------------------------------------------------------------
     07. PROJECTS FILTERING
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 40);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 180);
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     08. CONTACT FORM SUBMISSION
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', () => {
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending message...';
      }
    });
  }

});
