/**
 * ============================================================
 *  PORTFOLIO DATA FILE — data.js
 *  Edit this file to update all portfolio content.
 *  No HTML knowledge required!
 * ============================================================
 */

const PORTFOLIO = {

  /* ── PERSONAL INFO ──────────────────────────────────────── */
  personal: {
    initials:     "AH",
    name:         "Abdelilah Hssassa",
    tag:          "Data Analyst - Data Scientist",
    title:        "Turning Raw Data into\nIntelligent Systems",
    bio:          "As a PhD candidate in AI & Cybersecurity, State Engineer in Data & AI, I architect data pipelines, build machine-learning solutions, and make raw data ready for analysis — from extracting data from different sources to interactive Dashboards and intelligent systems.",
    location:     "Morocco",
    email:        "abdelilah0hssassa@gmail.com",
    linkedin:     "https://linkedin.com/in/yourprofile",
    github:       "https://github.com/yourusername",
    // Optional: profile photo path, e.g. "assets/profile.jpg"
    photo:     "assets/cv.jpg",
  },

  /* ── DOMAIN EXPERTISE (skill cards) ─────────────────────── */
  domains: [
    {
      icon:  "bar-chart-2",
      title: "Data Analysis & BI",
      desc:  "Power BI dashboards, SQL Server, SSIS/SSAS, data modelling and KPI visualisation.",
      color: "#00f5d4",
    },
    {
      icon:  "brain",
      title: "AI Engineering",
      desc:  "Machine Learning, Deep Learning, NLP, Transformers, BERT, LSTM — end-to-end model lifecycle.",
      color: "#f72585",
    },
    {
      icon:  "database",
      title: "Data Engineering",
      desc:  "ETL/ELT pipelines, Apache Airflow, Spark, Kafka, Hadoop and Docker orchestration.",
      color: "#7b2fff",
    },
    {
      icon:  "shield",
      title: "AI × Cybersecurity",
      desc:  "Proactive cyber-attack detection using AI — active PhD research topic at FPD Taza.",
      color: "#ff9f1c",
    },
    {
      icon:  "code-2",
      title: "Backend & Automation",
      desc:  "Python, PHP, SQL Server, Spring Boot, REST APIs, and AI-driven task automation.",
      color: "#00b4d8",
    },
    {
      icon:  "file-search",
      title: "OCR & Document AI",
      desc:  "Tesseract, EasyOCR, NLP extraction — digitising and validating insurance cards & IDs.",
      color: "#06d6a0",
    },
  ],

  /* ── SKILLS MARQUEE (pill tags) ─────────────────────────── */
  skills: [
    "Python", "Power BI", "SQL Server (SSIS-SSAS)", "Machine Learning", "Deep Learning",
    "NLP", "ETL · ELT", "Apache Airflow", "Apache Spark", "Apache Kafka",
    "Apache Hadoop", "Docker", "GitHub", "OCR (Tesseract · EasyOCR)",
    "PHP", "Asterisk / FreePBX", "BERT", "Transformers", "Spring Boot",
    "Data Modeling", "MySQL", "Oracle", "SSIS", "SSAS", "UIPATH",
  ],

  /* ── PROFESSIONAL EXPERIENCE ─────────────────────────────── */
  experience: [
    {
      role:    "Data Analyst & Back-end Developer",
      company: "SSNA",
      period:  "Current",
      type:    "Internship - Freelance",
      bullets: [
        "Automation of some repetitive tasks.",
        "Data extraction from multiple heterogeneous sources.",
        "Data cleaning, pre-processing and modelling.",
        "Visualisation of SAP B1 data and other sources.",
        "Creation of interactive Power BI dashboards.",
      ],
      tools:   ["PHP", "Python", "SQL Server", "Power BI"],
      // screenshot: "assets/1.png",  //
    },
    {
      role:    "AI Engineer — Python Developer",
      company: "Freedom Assessoria",
      period:  "3 months",
      type:    "Internship",
      bullets: [
        "Designed an IP-PBX telephony system for call management.",
        "Implemented call recording and real-time monitoring.",
        "Built AI-powered analysis of calls and voice messages.",
      ],
      tools:   ["Python", "Asterisk", "FreePBX", "Homer", "AI/ML"],
      // screenshot: "assets/2.png",
    },
    {
      role:    "Data Science Intern",
      company: "RMA — Assurance",
      period:  "5 months",
      type:    "Internship",
      bullets: [
        "Fraud detection using AI/ML techniques on insurance data.",
        "Text extraction from scanned insurance cards using OCR.",
        "NER to detect names, dates, CIN and registration numbers.",
        "Document classification and subscription data comparison.",
      ],
      tools:   ["Python", "OCR", "NLP", "Machine Learning", "Deep Learning", "Power BI"],
      // screenshot: "assets/3.png",
    },
    {
      role:    "AI Engineering Intern",
      company: "3D Smart Factory",
      period:  "2 months",
      type:    "Internship",
      bullets: [
        "Scientific article analysis and data extraction chatbot.",
        "Web scraping from research sources.",
        "NLP text processing pipeline with Python.",
        "Design, training and evaluation of LSTM/BERT chatbot.",
      ],
      tools:   ["Web Scraping", "LSTM", "BERT", "Transformers", "Python"],
      // screenshot: "assets/4.png",
    },
  ],

  /* ── PROJECTS ────────────────────────────────────────────── */
  projects: [
    {
      title:  "Data Warehouse & BI Suite",
      desc:   "End-to-end DWH built with SQL Server. Data integrated via SSIS, cubes analysed with SSAS, and KPIs visualised on Power BI.",
      tags:   ["SQL Server", "SSIS", "SSAS", "Power BI"],
      icon:   "layers",
      // image:  "assets/project-dw.png",   // ← uncomment to show screenshot
      // link:   "https://github.com/HSSASSA",
    },
    {
      title:  "Sentiment Analyser — Tweets & TikTok Reviews",
      desc:   "NLP pipeline classifying sentiment on social media. Trained on Twitter and TikTok Shop review datasets.",
      tags:   ["NLP", "Python", "Transformers", "Sentiment Analysis"],
      icon:   "message-circle",
      // image:  "assets/project-sentiment.png",
      link:   "https://github.com/HSSASSA/Tiktok-Shop-Reviews-Scrapper.git",
    },
    {
      title:  "AutoML Web App (AI Agent)",
      desc:   "Web application automating the ML project lifecycle with an AI agent: data exploration, feature engineering, model training, evaluation.",
      tags:   ["Python", "AI Agent", "AutoML", "Web App"],
      icon:   "cpu",
      // image:  "assets/project-automl.png",
      link:   "https://github.com/HSSASSA/Automated-Data-Science-Project.git",
    },
    {
      title:  "WhatsApp Conversation Analyser",
      desc:   "NLP tool that dissects WhatsApp chat exports — message frequency, topic modelling, sentiment trends, top contributors.",
      tags:   ["NLP", "Python", "Data Analysis"],
      icon:   "message-square",
      // image:  "assets/project-wa.png",
      link:   "https://github.com/HSSASSA/WhatsApp-Chat-Analyser.git",
    },
    {
      title:  "Quora Question Similarity (Deep Learning)",
      desc:   "Semantic similarity model for Quora question pairs using Siamese networks and BERT embeddings.",
      tags:   ["Deep Learning", "BERT", "NLP", "Python"],
      icon:   "git-merge",
      // image:  "assets/project-quora.png",
      link:   "https://github.com/HSSASSA/Quora-Question-Similarity.git",
    },
    {
      title:  "Spring Boot Web Application",
      desc:   "Full-stack web app built with Spring Boot, Spring Data, Thymeleaf and Bootstrap 5.",
      tags:   ["Java", "Spring Boot", "Thymeleaf", "Bootstrap"],
      icon:   "globe",
      // image:  "assets/project-spring.png",
      link:   "https://github.com/HSSASSA/Spring-Boot-Web-Application.git",
    },
  ],

  /* ── EDUCATION ───────────────────────────────────────────── */
  education: [
    {
      degree:  "PhD in Artificial Intelligence & Cybersecurity",
      school:  "FPD Taza",
      period:  "In Progress",
      detail:  "Research: AI-powered proactive cyber-attack detection.",
      icon:    "graduation-cap",
    },
    {
      degree:  "MS Power BI Training",
      school:  "Jobintech & Inovadex — Tanger",
      period:  "Completed",
      detail:  "Power BI · SQL Server (SSIS & SSAS) · AI Automation (UiPath)",
      icon:    "bar-chart",
    },
    {
      degree:  "State Engineer's Degree — Data & AI",
      school:  "ENSA Al-Hoceima",
      period:  "Graduated",
      detail:  "Data Engineering · Data Analysis · AI Engineering · Web Development",
      icon:    "school",
    },
  ],

  /* ── CERTIFICATIONS ──────────────────────────────────────── */
  certifications: [
    {
      title:  "Data Analyst Associate (PL-300)",
      issuer: "Microsoft",
      link:   "https://learn.microsoft.com/en-us/users/abdelilahhssassa-1999/credentials/9630f558a13f09cf",
      icon:   "award",
    },
    {
      title:  "SQL (Advanced)",
      issuer: "HackerRank",
      link:   "https://www.hackerrank.com/certificates/69ed061ea9f4",
      icon:   "database",
    },
    {
      title:  "Introduction to Data Engineering",
      issuer: "IBM / Coursera",
      link:   "https://www.coursera.org/account/accomplishments/verify/Q3CH4CVYZS2S",
      icon:   "server",
    },
    {
      title:  "Natural Language Processing Specialization",
      issuer: "Coursera",
      link:   "https://www.coursera.org/account/accomplishments/verify/Q6CH4CVYZS2S",
      icon:   "message-square",
    },
    {
      title:  "Deep Learning Specialization",
      issuer: "Coursera",
      link:   "https://www.coursera.org/account/accomplishments/verify/Q6CH4CVYZS2S",
      icon:   "cpu",
    },
  ],

  /* ── EXTRACURRICULAR / LEADERSHIP ───────────────────────── */
  activities: [
    {
      year:   "2022 / 2023",
      items: [
        "President — CCT Club (Cultural & Technology Club)",
        "Advisor — DATAI departmental club (Data Engineering & AI track)",
      ],
    },
    {
      year:   "2021 / 2022",
      items: [
        "Founder & President — DATAI Club",
        "Partners Coordinator — Hult Prize Committee, ENSAH",
        "Media Cell Lead — W.E.C 4.0 event",
        "Member — JLM ENSAH Committee",
      ],
    },
    {
      year:   "2019 / 2020",
      items: [
        "Opening & Closing Cell Leader — W.E.C 3.0 event",
      ],
    },
  ],

  /* ── CONTACT / FOOTER ────────────────────────────────────── */
  contact: {
    intro: "I'm open to new opportunities, research collaborations, and freelance data/AI projects. Drop me a message!",
    links: [
      // Add, remove, or update links freely
      { label: "Email",    icon: "mail",     href: "mailto:abdelilah0hssassa@gmail.com" },
      { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/hssassa-abdelilah-b91a1521b/" },
      { label: "GitHub",   icon: "github",   href: "https://github.com/HSSASSA" },
    ],
  },

  footer: "Built with passion · Data & AI Portfolio",
};
