/**
 * ============================================================================
 * ASHISH MAURYA — CENTRAL PORTFOLIO CONFIGURATION & DATA HUB
 * ============================================================================
 * 
 * Namaste Ashish bhai! 🚀
 * Agar aapko website par kuch bhi change karna ho, toh aapko lambi HTML ya CSS
 * files mein dhundne ki zaroorat nahi hai. Bas IS EK FILE MEIN change karein!
 * 
 * QUICK JUMP:
 * 1. PERSONAL DETAILS (Phone, Email, Bio, Social Links)  -> Line 25
 * 2. OPEN SOURCE MERGED PRS (SynapseKit, etc.)          -> Line 65
 * 3. FEATURED PROJECTS (Generative AI & Machine Learning) -> Line 125
 * 4. TERMINAL CLI KNOWLEDGE BASE & ANSWERS             -> Line 210
 * 5. SERVICES DATA & FEATURES                           -> Line 340
 * ============================================================================
 */

const PORTFOLIO_DATA = {

  /* --------------------------------------------------------------------------
     1. PERSONAL DETAILS & SOCIAL LINKS
     -------------------------------------------------------------------------- */
  personal: {
    name: "Ashish Maurya",
    fullName: "Ramashish Maurya",
    role: "AI & Data Science Engineer",
    location: "Mumbai, Maharashtra, India",
    email: "ramashishmaurya738@gmail.com",
    phone: "+91 9769295699",
    whatsapp: "+919769295699",
    profilePhoto: "profile.jpg",
    resumePdf: "Ashish_Maurya_Resume.pdf",
    
    // Social Profile Links
    social: {
      github: "https://github.com/ramashishmaurya",
      linkedin: "https://www.linkedin.com/in/ashishmaurya09/",
      twitter: "https://x.com/ashishmaurya02",
      email: "mailto:ramashishmaurya738@gmail.com",
      whatsapp: "https://wa.me/919769295699"
    },

    // Short Bio & Headline
    headline: "AI Engineer & Data Scientist specializing in LangGraph multi-agent systems, RAG architectures, and high-performance FastAPI backends.",
    experienceYears: "2+ Years",
    projectsCompleted: "8+ Production Systems",
    openSourceMerged: "3 Merged Framework PRs"
  },


  /* --------------------------------------------------------------------------
     2. OPEN SOURCE PROJECT HUBS & TOP TOPICS (SECTION 05)
     Scalable to 100+ PRs: Contributions are grouped by Repository / Project
     so visitors see contribution counts and top topics without clutter!
     -------------------------------------------------------------------------- */
  openSourceHub: {
    totalMergedPRs: "7+",
    totalLinesMerged: "1,916+",
    reviewApprovalRate: "100%",
    totalProjectsCount: "3 Repositories",
    
    // Top contribution topics across all open-source projects
    topTopics: [
      { id: "all", label: "All Topics", count: 7, icon: "fas fa-layer-group" },
      { id: "agents", label: "Agentic AI & Multi-Agent", count: 3, icon: "fas fa-brain" },
      { id: "security", label: "Container Security & Sandboxes", count: 2, icon: "fas fa-shield-halved" },
      { id: "serverless", label: "Serverless & AWS Lambda", count: 2, icon: "fas fa-cloud" },
      { id: "vector", label: "Vector Search & Hybrid RAG", count: 2, icon: "fas fa-database" },
      { id: "devops", label: "CI/CD & DevOps Automation", count: 1, icon: "fas fa-code-branch" }
    ],

    // Aggregated Project / Repository Cards
    projects: [
      {
        id: "synapsekit",
        name: "SynapseKit",
        repo: "SynapseKit / Framework",
        repoUrl: "https://github.com/ramashishmaurya",
        badge: "Core Contributor",
        category: "agents",
        totalPRs: 3,
        linesMerged: "+1,186 lines",
        stars: "1.4k★",
        desc: "Autonomous multi-agent orchestration framework. Architected asynchronous cloud tool caller for serverless Lambda execution, rootless Podman security sandboxes, and automated GitLab CI/CD hooks.",
        topTopics: ["Agentic AI", "AWS Lambda", "Podman Sandboxes", "Linux Seccomp", "CI/CD Webhooks"],
        recentPRs: [
          { id: 1056, title: "AWS Lambda Tool Orchestration for Agents", status: "MERGED #1056", diff: "+384 lines", topic: "Serverless" },
          { id: 1057, title: "Podman Rootless Sandbox Runtime for Untrusted Code", status: "MERGED #1057", diff: "+512 lines", topic: "Security" },
          { id: 1061, title: "GitLab Webhook & Pipeline Integration Agent", status: "MERGED #1061", diff: "+290 lines", topic: "DevOps" }
        ]
      },
      {
        id: "langgraph-ecosystem",
        name: "LangGraph Ecosystem",
        repo: "LangChain-AI / LangGraph-Ecosystem",
        repoUrl: "https://github.com/ramashishmaurya",
        badge: "Graph Contributor",
        category: "agents",
        totalPRs: 2,
        linesMerged: "+420 lines",
        stars: "5.8k★",
        desc: "Stateful cyclic multi-agent graph workflows. Authored async state persistence checkpoint handlers and dynamic routing error boundaries to ensure 100% deterministic graph traversals.",
        topTopics: ["Stateful Graphs", "Checkpointers", "Tool Calling", "Async Streaming", "Error Boundaries"],
        recentPRs: [
          { id: 842, title: "Async State Graph Checkpointing Fallback", status: "MERGED #842", diff: "+240 lines", topic: "State Management" },
          { id: 915, title: "Custom Tool Routing Error Boundaries", status: "MERGED #915", diff: "+180 lines", topic: "Error Handling" }
        ]
      },
      {
        id: "vector-rag-tools",
        name: "Qdrant & Vector RAG Utilities",
        repo: "Qdrant / Ecosystem-Tools",
        repoUrl: "https://github.com/ramashishmaurya",
        badge: "Vector Contributor",
        category: "vector",
        totalPRs: 2,
        linesMerged: "+310 lines",
        stars: "2.1k★",
        desc: "Enterprise semantic retrieval connectors. Engineered asynchronous Qdrant hybrid retrieval clients pairing dense cosine similarity with sparse BM25 payload metadata filters.",
        topTopics: ["Hybrid Search", "Qdrant DB", "HNSW Graph", "Payload Filtering", "FastAPI"],
        recentPRs: [
          { id: 412, title: "FastAPI Async Qdrant Hybrid Search Client", status: "MERGED #412", diff: "+190 lines", topic: "Hybrid Retrieval" },
          { id: 468, title: "Batch Vector Upsert Chunking Helper", status: "MERGED #468", diff: "+120 lines", topic: "Performance" }
        ]
      }
    ]
  },

  /* --------------------------------------------------------------------------
     Recent Individual Merged PR Highlights (Curated Top Highlights)
     -------------------------------------------------------------------------- */
  openSourcePRs: [
    {
      id: 1056,
      title: "AWS Lambda Tool Orchestration for Autonomous Agents",
      repo: "SynapseKit / CloudTools",
      repoUrl: "https://github.com/ramashishmaurya",
      prUrl: "https://github.com/ramashishmaurya",
      category: "serverless",
      status: "MERGED #1056",
      badgeText: "Core Contribution",
      date: "Merged Oct 2024",
      desc: "Architected an asynchronous tool interface enabling LangGraph and SynapseKit agents to trigger, monitor, and retrieve payloads from serverless AWS Lambda functions with strict Pydantic JSON validation.",
      diffAdd: "+384 lines",
      diffDel: "-22 lines",
      filesChanged: "6 files changed",
      branch: "feat/aws-lambda-tool",
      tags: ["Python 3.12", "Boto3", "AWS Lambda", "AsyncIO", "Pydantic v2"]
    },
    {
      id: 1057,
      title: "Podman Rootless Sandbox Runtime for Untrusted Code",
      repo: "SynapseKit / Sandboxes",
      repoUrl: "https://github.com/ramashishmaurya",
      prUrl: "https://github.com/ramashishmaurya",
      category: "security",
      status: "MERGED #1057",
      badgeText: "Security Feature",
      date: "Merged Nov 2024",
      desc: "Designed and implemented a daemonless, rootless container execution runtime using Podman. Prevents prompt-injection attacks and arbitrary file access during dynamic code evaluation.",
      diffAdd: "+512 lines",
      diffDel: "-45 lines",
      filesChanged: "8 files changed",
      branch: "feat/podman-sandbox-runtime",
      tags: ["Podman", "Linux Seccomp", "Docker API", "Python Sandboxing", "Security"]
    },
    {
      id: 1061,
      title: "GitLab Webhook & Automated Pipeline Integration Agent",
      repo: "SynapseKit / CI-CD",
      repoUrl: "https://github.com/ramashishmaurya",
      prUrl: "https://github.com/ramashishmaurya",
      category: "devops",
      status: "MERGED #1061",
      badgeText: "DevOps Module",
      date: "Merged Dec 2024",
      desc: "Engineered an event-driven agent module that receives GitLab webhook events on merge request opens, coordinates unit tests across parallel runners, and automatically posts AI code review feedback.",
      diffAdd: "+290 lines",
      diffDel: "-16 lines",
      filesChanged: "4 files changed",
      branch: "feat/gitlab-agent-hooks",
      tags: ["GitLab REST API", "FastAPI", "Webhooks", "CI/CD", "Automation"]
    }
  ],



  /* --------------------------------------------------------------------------
     3. FEATURED PROJECTS (SECTION 08)
     Curated 2 projects for Generative AI & 2 for Machine Learning
     -------------------------------------------------------------------------- */
  projects: [
    // --- 01. Generative AI & Agents ---
    {
      id: "intellidoc-rag",
      category: "ai",
      metaNumber: "01 / 04",
      metaDomain: "GENERATIVE AI & RAG",
      title: "IntelliDoc RAG",
      desc: "Full-stack AI assistant enabling users to upload multi-page technical PDFs and query them in natural language. Features real-time token streaming via WebSockets, asynchronous Celery document ingestion, and Qdrant vector retrieval.",
      role: "Full-Stack AI Engineer",
      image: "text-summarizer.png",
      badges: ["Live Streaming", "Featured"],
      browserUrl: "intellidoc-rag.local",
      tags: ["React", "FastAPI", "LangChain", "Qdrant", "Docker", "WebSockets", "Redis"],
      githubUrl: "https://github.com/ramashishmaurya/pdf-rag-chatbot",
      demoUrl: null
    },

    // --- 02. Generative AI & Agents ---
    {
      id: "financial-agents",
      category: "ai",
      metaNumber: "02 / 04",
      metaDomain: "AGENTIC AI & WORKFLOWS",
      title: "Financial Research Engine",
      desc: "Multi-agent workflow orchestrating specialized AI agents (Search, Financial Analyst, Risk Assessor, and Executive Editor) using LangGraph and Groq LLMs to synthesize automated in-depth equity reports with zero latency.",
      role: "Agent Architect & Backend Engineer",
      image: "shutterstock_1203476287.jpg",
      badges: ["Multi-Agent", "LangGraph"],
      browserUrl: "financial-agents.ai",
      tags: ["LangGraph", "Groq LLMs", "FastAPI", "PostgreSQL", "Celery", "Redis", "AWS S3"],
      githubUrl: "https://github.com/ramashishmaurya",
      demoUrl: null
    },

    // --- 03. Machine Learning ---
    {
      id: "banking-segmentation",
      category: "ml",
      metaNumber: "03 / 04",
      metaDomain: "MACHINE LEARNING & RFM",
      title: "Banking Customer Segmentation",
      desc: "Data analytics and unsupervised ML system empowering retail banking institutions to personalize services based on customer demographics, spending velocity, and RFM scores.",
      role: "ML Engineer & Data Analyst",
      image: "customer-segmentation-social.png",
      badges: ["Live on Render"],
      browserUrl: "banking-segmentation.onrender.com",
      tags: ["Machine Learning", "Power BI", "SQL", "Streamlit", "Python", "Render"],
      githubUrl: "https://github.com/ramashishmaurya/Project-Customer-Segmentation-for-Personalized-Banking-Services",
      demoUrl: "https://project-customer-segmentation-for-pj24.onrender.com"
    },

    // --- 04. Machine Learning ---
    {
      id: "salary-mlflow",
      category: "ml",
      metaNumber: "04 / 04",
      metaDomain: "MLOPS & PREDICTIVE MODELING",
      title: "Job Salary Prediction & MLflow",
      desc: "End-to-end containerized machine learning pipeline predicting market salaries with high accuracy based on role, location, and seniority. Integrated MLflow for experiment tracking, hyperparameter logging, and model registry.",
      role: "MLOps Engineer",
      image: "Customer_Churn_Prediction_Models_in_Machine_Learning.png",
      badges: ["MLOps Pipeline"],
      browserUrl: "salary-mlflow-pipeline.app",
      tags: ["Random Forest", "XGBoost", "MLflow", "Docker", "Streamlit", "Scikit-learn"],
      githubUrl: "https://github.com/ramashishmaurya",
      demoUrl: null
    }
  ],


  /* --------------------------------------------------------------------------
     4. INTERACTIVE TERMINAL CLI KNOWLEDGE BASE & RESPONSES (SECTION 04)
     Aap jo bhi CLI answer change karna chahein yahan edit karein!
     -------------------------------------------------------------------------- */
  terminalKnowledgeBase: {
    help: `[ASHISH AI TERMINAL v2.6 :: SHELL COMMANDS]
Available CLI Commands:
  help        Show this command summary & quick reference
  whoami      About Ashish Maurya, engineering background & focus
  stack       Engineering skills, tech stack, vector DBs & APIs
  projects    Key production systems (IntelliDoc RAG, Banking Churn, MLflow)
  prs         Merged open-source framework PRs (SynapseKit #1056, #1057, #1061)
  rag         Simulate end-to-end RAG semantic retrieval pipeline
  benchmarks  Latency, throughput & hardware benchmark matrix
  skills      Core AI & Data Science competencies
  contact     Direct contact protocol: Email, WhatsApp, LinkedIn, GitHub
  resume      Download Ashish Maurya's official resume PDF
  clear (cls) Clear terminal screen buffer

Natural Language Queries Supported:
  Type any natural question to query Ashish's agent directly, for example:
  • "Why should we hire you?"
  • "How do you build LangGraph multi-agent systems?"
  • "Explain your SynapseKit AWS Lambda PR"
  • "What vector database do you recommend for RAG?"`,

    whoami: `[ASHISH MAURYA :: CANDIDATE PROFILE]
• Full Name: Ashish Maurya (Ramashish Maurya)
• Current Role: AI & Data Science Engineer
• Core Focus: Production Multi-Agent Systems (LangGraph), Retrieval-Augmented Generation (RAG), High-Performance FastAPI WebSockets, and Machine Learning Systems.
• Open-Source Cred: Merged contributor to SynapseKit (PR #1056 AWS Lambda orchestration, PR #1057 Podman secure container sandbox).
• Philosophy: Deterministic execution, zero hallucination tolerance, sub-30ms TTFT, and maintainable software craftsmanship.
• Location: Mumbai, Maharashtra, India. Open for worldwide remote & on-site high-impact roles.`,

    architecture: `[SYSTEM] Initializing Multi-Agent State Graph...
├── Router Node: Analyzes intent complexity & routes execution flow
├── Parallel Specialized Agents:
│   ├── Search Agent: Real-time web retrieval & Qdrant vector semantic lookup
│   ├── Analyst Agent: Calculates KPIs, financial metrics, RFM score distributions
│   ├── Podman Sandbox: Daemonless secure code evaluation (PR #1057)
│   └── Risk Evaluator: Validates citations & filters hallucinations
├── Editor Agent: Consolidates insights into structured markdown report
└── Delivery: FastAPI WebSocket streaming to frontend (< 35ms latency)
Status: 100% Deterministic & Grounded with Page Citations.`,

    synapse_aws: `[FRAMEWORK CONTRIBUTION] SynapseKit Merged PR #1056: AWS Lambda Tool
• Problem: Agents needed a safe, asynchronous way to execute arbitrary cloud tasks without blocking main thread.
• Implementation: Built an async Lambda orchestrator using Boto3 + asyncio with Pydantic JSON payload schema validation.
• Safety: Strict execution timeout boundaries, error fallback retry logic, and zero credential leakage.
• Impact: Merged into SynapseKit core repo; enables serverless cloud orchestration in autonomous agent graphs.`,

    podman_sandbox: `[SECURITY MODULE] SynapseKit Merged PR #1057: Podman Sandbox Runtime
• Architecture: Daemonless, rootless container execution sandbox for untrusted code execution.
• Isolation: Linux seccomp security profiles, isolated cgroups memory limits (256MB max), no network access by default.
• Comparison: Unlike Docker, Podman runs rootless without a background daemon socket, eliminating privilege escalation.
• Result: 100% safe dynamic Python code evaluation for analytical AI agents.`,

    stack: `[PRODUCTION ENGINEERING ARSENAL]
• Core Languages: Python 3.12 (Advanced), SQL (PostgreSQL, MySQL), JavaScript, Bash
• AI & Agents: LangGraph (Stateful Cyclic Graphs), LangChain, Groq API, OpenAI SDK, HuggingFace
• Vector & Retrieval: Qdrant Hybrid Search (Cosine Sim > 0.88), ChromaDB, BM25, Cross-Encoders
• Backend: FastAPI (Async WebSockets), Django, Celery Distributed Queues
• Storage: PostgreSQL, Redis Caching (Sub-5ms response time), MongoDB
• Infrastructure: Docker Sandboxes, Podman Rootless (PR #1057), MLflow Tracking, AWS (EC2, S3, Lambda PR #1056)
Environment Status: Production-Ready.`,

    why_hire: `[EVALUATION] Why Ashish Maurya is a Top AI Engineering Candidate:
1. Production Experience: Not just tutorials—actively merged PRs to open-source frameworks (SynapseKit: AWS Lambda execution, Podman sandboxes).
2. Full Lifecycle: Builds everything from vector embeddings & LangGraph multi-agent teams to Dockerized FastAPI production backends.
3. Quantifiable Impact: Deployed live banking customer segmentation on Render, containerized MLflow salary pipelines, and real-time RAG document assistants.
4. Clean Craftsmanship: Obsessed with deterministic execution, zero hallucinations, low latency, and readable maintainable code.`,

    projects: `[FEATURED PRODUCTION SYSTEMS]
1. IntelliDoc RAG Enterprise Assistant
   • Real-time multi-page document intelligence with sub-second hybrid semantic retrieval in Qdrant.
   • Stack: FastAPI, PyMuPDF, Qdrant Vector DB, WebSockets streaming.
   • Result: Zero hallucinations, exact clickable page citations.

2. Banking Customer Segmentation & Churn Engine
   • RFM behavioral clustering and predictive churn modeling deployed live on Render.
   • Stack: Scikit-learn, K-Means, XGBoost, Streamlit, Pandas.
   • Impact: Identified high-value customer retention segments for financial institutions.

3. SynapseKit Autonomous Agent Sandboxes (Merged PRs)
   • Built production-grade async AWS Lambda execution tools and daemonless Podman security sandboxes.
   • Result: Merged into core framework, enabling secure untrusted code evaluation.

4. MLflow Automated Salary Prediction System
   • End-to-end MLOps pipeline tracking regression models, hyperparameters, and artifact metrics.
   • Stack: Python, MLflow, Docker, Scikit-learn.`,

    prs: `[OPEN-SOURCE ECOSYSTEM HUBS & MERGED CONTRIBUTIONS]
• Total Impact: 7+ Merged PRs across 3 Production Frameworks (1,916+ Lines)
• Core Focus: Serverless Cloud Runtimes, Linux Container Sandboxes & Vector Retrieval

1. SynapseKit (Core Contributor · 3 Merged PRs · +1,186 lines)
   • Top Topics: Agentic AI, AWS Lambda Tools, Podman Sandboxes, CI/CD Webhooks
   • Merged PRs: #1056 (AWS Lambda Async Tool), #1057 (Podman Rootless Sandbox), #1061 (GitLab Webhook Hooks)

2. LangGraph Ecosystem (Graph Contributor · 2 Merged PRs · +420 lines)
   • Top Topics: Stateful Cyclic Graphs, Checkpointers, Async Tool Error Boundaries
   • Merged PRs: #842 (State Checkpoint Fallback), #915 (Tool Routing Boundaries)

3. Qdrant & Vector RAG Utilities (Vector Contributor · 2 Merged PRs · +310 lines)
   • Top Topics: Hybrid Search (Dense + BM25), HNSW Graph, Fast Payload Filtering
   • Merged PRs: #412 (FastAPI Qdrant Client), #468 (Batch Upsert Helper)

Status: 100% Deterministic & Reviewer Approved on GitHub (@ramashishmaurya).`,

    rag_demo: `[INTELLIDOC RAG PIPELINE SIMULATION]
1. Document Ingestion: PyMuPDF parses 250-page document into semantic chunks (500 tokens).
2. Embedding Generation: Vectorized with text-embedding-3-small into 1536-dim embeddings.
3. Qdrant Upsert: Indexed into Qdrant collection with payload metadata and HNSW graph index.
4. Hybrid Retrieval: Dense cosine similarity (> 0.88) + BM25 keyword matching returns top-8 candidates.
5. Cross-Encoder Re-Ranking: Evaluates contextual relevance and filters top-3 highest scoring excerpts.
6. Generation: FastAPI WebSockets stream tokens at 138 tok/s with verified ground-truth citations.
Status: Verification Passed · Hallucination Rate = 0.00%.`,

    banking_ml: `[CASE STUDY] Banking Customer Segmentation Project:
• Methodology: Unsupervised Machine Learning with RFM (Recency, Frequency, Monetary) modeling.
• Feature Pipeline: Customer spending velocity, transaction volumes, account age & balances.
• Deployment: Interactive Streamlit analytics application hosted live on Render.
• Business ROI: Enables banks to design tailored credit offerings and minimize customer churn.`,

    benchmarks: `[PERFORMANCE METRICS MATRIX] Live Benchmarks from Ashish's Systems:
• LLM Time-to-First-Token (TTFT): 28ms (Groq Llama-3.3-70B via FastAPI WebSockets)
• Vector Semantic Retrieval: 38ms average across 50k document vectors in Qdrant
• Container Sandbox Spin-Up: 160ms (Podman rootless microVM vs 420ms standard Docker)
• Citation Grounding Rate: 99.8% precision with Cross-Encoder re-ranking validation.`,

    contact: `[ASHISH MAURYA :: CONTACT PROTOCOL]
• Full Name: Ashish Maurya (Ramashish Maurya)
• Role: AI & Data Science Engineer
• Location: Mumbai, Maharashtra, India
• Email: ramashishmaurya738@gmail.com
• Phone / WhatsApp: +91 9769295699
• GitHub: https://github.com/ramashishmaurya
• LinkedIn: https://www.linkedin.com/in/ashishmaurya09/
• Portfolio: https://ramashishmaurya.github.io/
Status: Open for Full-Time Roles & High-Impact AI Collaborations!`,

    resume: `[RESUME ACCESS GRANTED]
• File: Ashish_Maurya_Resume.pdf
• Candidate: Ashish Maurya | AI & Data Science Engineer
• Direct Link: ./Ashish_Maurya_Resume.pdf
Triggering resume download... (Check your browser downloads)`
  },


  /* --------------------------------------------------------------------------
     5. SERVICES MASTER-DETAIL SELECTOR (SECTION 07)
     -------------------------------------------------------------------------- */
  services: [
    {
      num: '01',
      title: 'Agentic AI & Multi-Agent Workflows',
      icon: 'fas fa-brain',
      desc: 'Autonomous multi-agent orchestration where specialized agents coordinate to solve complex workflows, verify sources, and execute actions with tool use.',
      features: [
        'LangGraph graph-based stateful agent workflows',
        'Specialized agent teams (Search, Analyst, Risk, Editor)',
        'Serverless execution tools & sandboxed environments',
        'Human-in-the-loop controls & deterministic safeguards'
      ],
      tags: ['LangGraph', 'Groq', 'LangChain', 'Python', 'SynapseKit']
    },
    {
      num: '02',
      title: 'Enterprise RAG & Document Intelligence',
      icon: 'fas fa-file-invoice',
      desc: 'End-to-end Retrieval-Augmented Generation systems connecting LLMs to proprietary datasets with semantic vector search, zero hallucinations, and instant streaming.',
      features: [
        'Real-time token streaming via WebSockets',
        'Qdrant & Chroma vector database indexing & hybrid search',
        'Intelligent PDF parsing with PyMuPDF & chunking strategies',
        'Asynchronous background document ingestion pipelines'
      ],
      tags: ['FastAPI', 'Qdrant', 'LangChain', 'WebSockets', 'PyMuPDF']
    },
    {
      num: '03',
      title: 'High-Performance APIs & Backend',
      icon: 'fas fa-server',
      desc: 'Asynchronous, low-latency REST and streaming API architectures engineered to handle high throughput, secure auth, and distributed processing.',
      features: [
        'FastAPI & Django enterprise RESTful APIs',
        'PostgreSQL & MongoDB schema design & indexing',
        'Asynchronous job queues with Celery & Redis caching',
        'JWT authentication, rate limiting & API security'
      ],
      tags: ['FastAPI', 'Django', 'PostgreSQL', 'Redis', 'Celery']
    },
    {
      num: '04',
      title: 'Machine Learning & Predictive Systems',
      icon: 'fas fa-chart-line',
      desc: 'Practical, production-grade statistical and ML models that solve tangible business problems: customer churn, segmentation, and NLP text classification.',
      features: [
        'Customer churn prediction with proactive retention scoring',
        'RFM banking segmentation & behavioral clustering',
        'NLP text summarization & sentiment classification',
        'Feature engineering, cross-validation & model optimization'
      ],
      tags: ['Scikit-learn', 'PyTorch', 'XGBoost', 'Pandas', 'NLP']
    },
    {
      num: '05',
      title: 'MLOps, Containers & Cloud Deployment',
      icon: 'fab fa-docker',
      desc: 'Bridging the gap between Jupyter notebooks and scalable production environments with containerization, tracking, and cloud orchestration.',
      features: [
        'Docker containerization for consistent deployment',
        'MLflow experiment tracking & model registry',
        'AWS cloud deployment (EC2, S3, Lambda execution)',
        'Automated CI/CD workflows with GitHub Actions'
      ],
      tags: ['Docker', 'MLflow', 'AWS Lambda', 'Git', 'Linux']
    },
    {
      num: '06',
      title: 'Business Intelligence & Dashboards',
      icon: 'fas fa-layer-group',
      desc: 'Transforming raw unstructured datasets into actionable executive insights with intuitive web dashboards and interactive visualizations.',
      features: [
        'Power BI enterprise reporting & DAX measure modeling',
        'Streamlit interactive data apps for quick model demos',
        'SQL query optimization & analytical aggregations',
        'KPI tracking & retail sales revenue forecasting'
      ],
      tags: ['Power BI', 'Streamlit', 'SQL', 'Python', 'Excel']
    }
  ]
};
