/*
 * SRUJANA G — Portfolio Data
 * ─────────────────────────────────────────────────────────────
 * This is the single source of truth for the entire portfolio.
 * Edit this file to update any section of the site.
 * ─────────────────────────────────────────────────────────────
 */

const SRUJANA = {

  // ── Personal Info ──────────────────────────────────────────

  name: "Srujana G",

  firstName: "Srujana",

  taglines: [
    "AI Engineer",
    "GenAI Engineer",
    "LLM & RAG Builder",
    "Agentic AI Developer",
    "Speech AI Engineer"
  ],

  bio: [
    "I'm an AI Engineer focused on building intelligent systems that move beyond prototypes and work reliably in the real world. My work spans Generative AI, LLM applications, RAG, Agentic AI, NLP, and Speech AI.",

    "At Zynthora.ai, I work on AI and Generative AI solutions across multiple industry domains, contributing to everything from AI experimentation and model development to backend integration, optimization, and deployment.",

    "I particularly enjoy building systems where multiple AI components come together from real-time speech and language applications to retrieval-augmented generation, intelligent automation, and agentic workflows. Outside of work, I build personal projects to explore new AI architectures and deepen my understanding of how intelligent systems can be designed and deployed."
  ],

  stats: [
    { label: "AI Experience", value: "1+ Yr" },
    { label: "Production Systems", value: "5+" },
    { label: "Technologies", value: "30+" },
    { label: "CGPA", value: "8.83" }
  ],


  // ── Contact ─────────────────────────────────────────────────

  contact: {
    email: "srujana.ganesh21@gmail.com",
    phone: "+91 9141363498",
    linkedin: "https://www.linkedin.com/in/srujanag21/",
    github: "https://github.com/srujanasru0521-create",
    resume: "./srujana_g_resume.pdf"
  },


  // ── Skills ──────────────────────────────────────────────────

  skills: {

    "AI & Generative AI": [
      { name: "LLMs", icon: "🧠" },
      { name: "RAG / HyDE / CRAG", icon: "🔍" },
      { name: "AI Agents / ReAct", icon: "🤖" },
      { name: "Prompt Engineering", icon: "💬" },
      { name: "LoRA Fine-tuning", icon: "⚡" },
      { name: "NLP Pipelines", icon: "📝" }
    ],

    "Speech & Multimodal AI": [
      { name: "Whisper ASR", icon: "🎤" },
      { name: "M2M-100", icon: "🌐" },
      { name: "mHuBERT", icon: "🔊" },
      { name: "TTS", icon: "🗣️" },
      { name: "Speaker Recognition", icon: "🎙️" },
      { name: "OpenCV", icon: "👁️" }
    ],

    "Frameworks & Infrastructure": [
      { name: "PyTorch", icon: "🔥" },
      { name: "FastAPI", icon: "🚀" },
      { name: "LangChain", icon: "🔗" },
      { name: "vLLM", icon: "⚙️" },
      { name: "NVIDIA Triton", icon: "🎮" },
      { name: "Docker", icon: "🐳" }
    ],

    "Models & Platforms": [
      { name: "Gemini", icon: "✨" },
      { name: "Claude", icon: "🌟" },
      { name: "Llama 3", icon: "🦙" },
      { name: "Mistral-7B", icon: "🌪️" },
      { name: "Groq", icon: "⚡" },
      { name: "CUDA / GPU", icon: "💻" }
    ],

    "Databases & Systems": [
      { name: "Qdrant", icon: "🗄️" },
      { name: "pgvector", icon: "🐘" },
      { name: "Neo4j", icon: "🕸️" },
      { name: "Redis", icon: "🔴" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" }
    ],

    "Programming": [
      { name: "Python", icon: "🐍" },
      { name: "SQL", icon: "📊" },
      { name: "JavaScript", icon: "📜" },
      { name: "Bash", icon: "🖥️" }
    ]

  },


  // ── Experience ───────────────────────────────────────────────

  experience: [

    {
      company: "Zynthora.ai",

      role: "Associate AI Engineer",

      period: "Sept 2025 – Present",

      location: "Remote",

      type: "Full-time",

      summary: "Working on AI and Generative AI solutions across multiple industry domains, with a focus on language, speech, retrieval, and intelligent automation.",

      highlights: [

        "Developing and integrating AI solutions for real-world business applications across multiple domains",

        "Working on LLM-powered applications involving retrieval-augmented generation, natural language processing, and intelligent automation",

        "Contributing to real-time speech and language solutions involving speech recognition, translation, and voice technologies",

        "Building backend services and AI pipelines to integrate machine learning models into production applications",

        "Working on model experimentation, evaluation, optimization, and deployment as part of the AI development lifecycle",

        "Collaborating on scalable AI systems and continuously improving the reliability and performance of AI-powered applications"

      ],

      logo: "Z"
    },


    {
      company: "AIRAT Systems, NIT Karnataka",

      role: "AI Engineer Intern",

      period: "Jan 2025 – May 2025",

      location: "NIT Karnataka",

      type: "Internship",

      summary: "Developed an AI-powered surgical training system that analyzes laparoscopic surgery videos to evaluate instrument movement and provide feedback.",

      highlights: [

        "Built a computer vision pipeline to detect and track surgical instrument movements from laparoscopic video",

        "Developed a reinforcement learning component to evaluate instrument trajectories and support precision assessment",

        "Designed performance scoring and visual feedback components to help assess and improve surgical technique"

      ],

      logo: "A"
    }

  ],


  // ── Projects ─────────────────────────────────────────────────

  projects: [

    {
      name: "CogniGraph",

      subtitle: "Agentic Hybrid GraphRAG Platform",

      description: "An agentic knowledge retrieval platform that combines knowledge graphs and vector search to answer complex questions using multiple specialized AI agents.",

      tags: [
        "Neo4j",
        "RAG",
        "HyDE",
        "CRAG",
        "ReAct",
        "LangChain",
        "Docker",
        "Python"
      ],

      category: "AI Agents",

      github: "https://github.com/Sanathkumarkunjithaya/Agentic-CogniGraph.git",

      featured: true,

      icon: "🧠",

      detail: "Uses a multi-agent workflow with Planner, Graph, Vector, Critic, and Synthesis agents. Combines Neo4j graph retrieval, vector search, HyDE, and Corrective RAG for more reliable answers."
    },


    {
      name: "OneVoice",

      subtitle: "Real-Time Meeting Translation Platform",

      description: "A real-time multilingual communication platform designed to enable speech recognition, translation, and voice-based communication across different languages.",

      tags: [
        "Speech AI",
        "ASR",
        "Machine Translation",
        "TTS",
        "NLP"
      ],

      category: "Speech AI",

      github: null,

      featured: true,

      icon: "🎙️",

      detail: "Contributed to the development of AI-powered speech and language capabilities for real-time multilingual communication, focusing on the integration and optimization of different AI components."
    },


    {
      name: "ReSolveRCM",

      subtitle: "AI-Driven Healthcare Claims Management",

      description: "An AI-powered healthcare solution designed to assist with analyzing insurance claim denials, identifying potential root causes, and supporting recommended actions.",

      tags: [
        "Generative AI",
        "RAG",
        "LLMs",
        "NLP",
        "Healthcare AI"
      ],

      category: "Healthcare AI",

      github: null,

      featured: true,

      icon: "🏥",

      detail: "Contributed to AI-powered claim denial analysis using language models and retrieval-based techniques to support structured analysis and decision-making."
    },


    {
      name: "PRISM",

      subtitle: "Social Sentiment Intelligence Platform",

      description: "An AI-powered platform for analyzing large volumes of social content to identify sentiment, emerging issues, and meaningful signals.",

      tags: [
        "NLP",
        "Generative AI",
        "Sentiment Analysis",
        "Python"
      ],

      category: "NLP",

      github: null,

      featured: false,

      icon: "📡",

      detail: "Contributed to NLP and AI-based analysis pipelines for processing and interpreting large-scale social content."
    },


    {
      name: "Unified S2S",

      subtitle: "Speech-to-Speech Translation System",

      description: "An end-to-end speech-to-speech translation system exploring multilingual speech representation, discrete speech units, and neural speech generation.",

      tags: [
        "mHuBERT",
        "Speech AI",
        "PyTorch",
        "K-Means",
        "CUDA"
      ],

      category: "Speech AI",

      github: null,

      featured: false,

      icon: "🔊",

      detail: "Uses mHuBERT-based speech representations and discrete speech-unit quantization as part of a unified speech-to-speech translation pipeline."
    },


    {
      name: "Surgical Training AI",

      subtitle: "Laparoscopic Surgery Skill Assessment",

      description: "An AI-powered surgical training system that analyzes laparoscopic videos to detect instrument movements and evaluate surgical technique.",

      tags: [
        "Computer Vision",
        "Reinforcement Learning",
        "OpenCV",
        "PyTorch"
      ],

      category: "Computer Vision",

      github: null,

      featured: false,

      icon: "🔬",

      detail: "Combines surgical instrument detection, movement tracking, trajectory evaluation, and performance feedback to support laparoscopic skill assessment."
    }

  ],


  // ── Education ────────────────────────────────────────────────

  education: [

    {
      institution: "Sahyadri College of Engineering and Management",

      degree: "B.E., Artificial Intelligence and Machine Learning",

      period: "2021 – 2025",

      cgpa: "8.83 / 10",

      highlights: [

        "Specialized in Artificial Intelligence, Machine Learning, Deep Learning, and NLP",

        "Completed AI engineering internship at AIRAT Systems, NIT Karnataka",

        "Developed AI and machine learning projects across Generative AI, Speech AI, NLP, and Computer Vision"

      ]
    }

  ],


  // ── AI Assistant Q&A ─────────────────────────────────────────
  // These power the chat widget.

  qa: [

    {
      keywords: [
        "experience",
        "work",
        "job",
        "background"
      ],

      answer: "Srujana is an Associate AI Engineer at Zynthora.ai, where she works on production AI and GenAI systems across multiple industry domains. Her work includes LLM applications, RAG pipelines, speech AI, NLP systems, and AI-powered backend services. Before this, she worked as an AI Engineer Intern at AIRAT Systems, NIT Karnataka."
    },


    {
      keywords: [
        "skill",
        "technology",
        "tech",
        "stack",
        "know",
        "proficient"
      ],

      answer: "Srujana's core technical stack includes Python, PyTorch, FastAPI, LLMs, RAG, AI agents, and NLP. She has worked with technologies including Gemini, Claude, Llama 3, Mistral-7B, vLLM, Whisper, M2M-100, and NVIDIA Triton. Her data and infrastructure stack includes Qdrant, pgvector, Neo4j, Redis, PostgreSQL, MongoDB, Docker, and CUDA/GPU technologies."
    },


    {
      keywords: [
        "project",
        "build",
        "built",
        "created",
        "work on"
      ],

      answer: "Srujana's main projects include CogniGraph, an agentic GraphRAG platform; OneVoice, a real-time multilingual meeting translation system; ReSolveRCM, an AI-powered healthcare claims analysis system; PRISM, an NLP-based social intelligence platform; Unified S2S, a speech-to-speech translation system; and a surgical training AI system."
    },


    {
      keywords: [
        "cognigraph",
        "graph",
        "graphrag",
        "neo4j"
      ],

      answer: "CogniGraph is Srujana's agentic GraphRAG project. It combines a Neo4j knowledge graph, vector retrieval, and multiple specialized agents. The workflow includes planning, graph retrieval, vector retrieval, critique, and answer synthesis, with HyDE and Corrective RAG used to improve retrieval quality."
    },


    {
      keywords: [
        "rag",
        "retrieval",
        "vector",
        "embedding"
      ],

      answer: "Srujana has hands-on experience building RAG systems using vector search, hybrid retrieval, HyDE, Corrective RAG, and cross-encoder reranking. She has worked with vector and graph databases including Qdrant, pgvector, and Neo4j."
    },


    {
      keywords: [
        "llm",
        "language model",
        "gpt",
        "gemini",
        "claude",
        "mistral",
        "llama"
      ],

      answer: "Srujana has worked with Gemini, Claude, Llama 3, Mistral-7B, and Groq-hosted models. She has experience with LLM application development, prompt engineering, LoRA fine-tuning, vLLM-based inference, and GPU inference optimization."
    },


    {
      keywords: [
        "education",
        "degree",
        "college",
        "university",
        "study",
        "cgpa",
        "gpa"
      ],

      answer: "Srujana holds a B.E. in Artificial Intelligence and Machine Learning from Sahyadri College of Engineering and Management, completed from 2021 to 2025."
    },


    {
      keywords: [
        "role",
        "looking for",
        "open to",
        "interested in",
        "position",
        "job type"
      ],

      answer: "Srujana is interested in AI/ML engineering opportunities focused on Generative AI, LLM applications, RAG, agentic AI, NLP, and Speech AI. She enjoys roles where she can work across the AI lifecycle, from experimentation and model development to backend integration, deployment, and optimization."
    },


    {
      keywords: [
        "contact",
        "reach",
        "email",
        "connect",
        "hire",
        "talk"
      ],

      answer: "You can reach Srujana through email or connect with her on LinkedIn. She is open to opportunities in AI/ML and Generative AI engineering."
    },


    {
      keywords: [
        "healthcare",
        "medical",
        "bfsi",
        "telecom",
        "defence",
        "domain"
      ],

      answer: "Srujana has worked on AI applications across Healthcare, Telecom, BFSI, and Defence. Her experience includes healthcare claims analysis, multilingual communication, NLP-based intelligence systems, and domain-specific AI applications."
    },


    {
      keywords: [
        "speech",
        "voice",
        "audio",
        "asr",
        "translation",
        "language"
      ],

      answer: "Speech AI is one of Srujana's main areas of experience. She has worked on real-time speech translation involving speech recognition, machine translation, TTS, streaming systems, and GPU-based inference. She has also worked on a Unified Speech-to-Speech Translation system using mHuBERT and discrete speech-unit quantization."
    },


    {
      keywords: [
        "agent",
        "agentic",
        "react",
        "autonomous",
        "multi-agent"
      ],

      answer: "Srujana has built agentic AI workflows using ReAct and multi-agent architectures. Her CogniGraph project uses specialized Planner, Graph, Vector, Critic, and Synthesis agents that work together to retrieve, evaluate, and synthesize information."
    },


    {
      keywords: [
        "docker",
        "deployment",
        "production",
        "devops",
        "infra"
      ],

      answer: "Srujana has experience taking AI systems toward production using FastAPI, Docker, Redis, vLLM, NVIDIA Triton, and GPU inference technologies. Her work includes building AI microservices, integrating model inference services, and designing systems for efficient AI processing."
    },


    {
      keywords: [
        "who",
        "about",
        "introduce",
        "tell me",
        "yourself"
      ],

      answer: "Srujana G is an AI Engineer focused on Generative AI, LLM applications, RAG, Agentic AI, NLP, and Speech AI. She currently works as an Associate AI Engineer at Zynthora.ai and has hands-on experience building production AI systems as well as independent AI projects. She holds a B.E. in Artificial Intelligence and Machine Learning and enjoys turning AI concepts into practical, deployable systems."
    }

  ]

};