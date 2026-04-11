import { Project, Experience, Education, SkillGroup, Language } from './types';

export const PERSONAL_INFO = {
  name: "Gunateja Pothula",
  role: "Data Scientist / Machine Learning Specialist",
  email: "gunateja070@gmail.com",
  phone: "+49 15510495944",
  location: "Berlin, Germany",
  linkedin: "https://linkedin.com/in/pothula-gunateja",
  github: "https://github.com/Gunateja020",
  summary: "I transform complex datasets into predictive insights and scalable models. As a Data Scientist based in Berlin, I bridge the gap between raw data and strategic decision-making using advanced ML architectures and statistical rigor. Available to relocate and can join immediately.",
};

export const LANGUAGES: Language[] = [
  { name: "Telugu", level: "NATIVE", sublevel: "Primary Language" },
  { name: "English", level: "FLUENT", sublevel: "C1 - Advanced Proficiency" },
  { name: "Kannada", level: "FLUENT", sublevel: "C1 - Advanced Proficiency" },
  { name: "Hindi", level: "CONVERSATIONAL", sublevel: "B2 - Upper Intermediate" },
  { name: "German", level: "CONVERSATIONAL", sublevel: "B1 - Able to convey ideas effectively" },
];

export const PROJECTS: Project[] = [
  {
    title: "Flight Delay Prediction & Optimization",
    description: "Developed and evaluated XGBoost and LSTM time-series models on 140K+ flight records to predict departure delays.",
    longDescription: "Developed and evaluated XGBoost and LSTM time-series models on 140K+ flight records to predict departure delays. Achieved projected cost savings exceeding $140K by optimizing scheduling and resource allocation. The project involved extensive feature engineering, handling class imbalance, and implementing a real-time prediction pipeline.",
    tags: ["Python", "XGBoost", "LSTM", "Time-Series", "Pandas", "NumPy"],
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Gunateja020"
  },
  {
    title: "Real-time Face Recognition System",
    description: "Designed and implemented a real-time face recognition system for secure door access using computer vision techniques.",
    longDescription: "Designed and implemented a real-time face recognition system for secure door access using computer vision techniques, achieving 95%+ accuracy. The system uses MTCNN for face detection and FaceNet for feature extraction, integrated with a local database for identity verification. It supports real-time processing at 30+ FPS on standard hardware.",
    tags: ["Computer Vision", "Python"],
    image: "face-scan.jpg?v=2",
    github: "https://github.com/Gunateja020"
  },
  {
    title: "Formula 1 Race Prediction",
    description: "Engineered deep learning models (Random Forest, XGBoost, CNN) for Formula 1 race prediction achieving F1-score ≥ 0.8.",
    longDescription: "Engineered deep learning models (Random Forest, XGBoost, CNN) for Formula 1 race prediction achieving F1-score ≥ 0.8 and RMSE < 10. The project analyzed historical race data, weather conditions, and driver performance to predict podium finishes and race winners. It includes a custom data scraper for real-time F1 data updates.",
    tags: ["Deep Learning", "Random Forest", "XGBoost", "CNN", "Sports Analytics"],
    image: "f1-prediction.jpg?v=2",
    github: "https://github.com/Gunateja020"
  },
  {
    title: "Full-stack Banking Application",
    description: "Developed a Java-based full-stack banking application managing 100+ customer accounts and transactions.",
    longDescription: "Developed a Java-based full-stack banking application managing 100+ customer accounts and transactions with SQL schema validation. Features include secure user authentication, real-time transaction history, fund transfers, and administrative controls. Built using Spring Boot for the backend and React for the frontend.",
    tags: ["Java", "SQL", "Full-stack", "Banking"],
    image: "banking-app.webp?v=1",
    github: "https://github.com/Gunateja020"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Cognizant Technology Solutions",
    role: "Programmer Analyst Trainee",
    period: "02/2024 – 07/2024",
    location: "India",
    description: [
      "Designed and implemented MongoDB database schemas for healthcare patient management system handling thousands of records.",
      "Developed and optimized database queries for efficient data retrieval, filtering, and aggregation across patient datasets.",
      "Implemented data validation logic and quality checks ensuring 99.9% data integrity across the application.",
      "Collaborated with cross-functional teams to translate business requirements into scalable database solutions."
    ]
  },
  {
    company: "Freelance",
    role: "Machine Learning Engineer",
    period: "05/2023 – 01/2024",
    location: "India",
    description: [
      "Developed and deployed 5+ end-to-end machine learning solutions for sports analytics.",
      "Designed interactive dashboards using Streamlit, Plotly Dash, and Tableau for real-time data visualization.",
      "Implemented automated data pipelines processing 100K+ records daily with 99.5% uptime.",
      "Applied unsupervised learning (K-Means, GMM) for customer segmentation and pattern recognition."
    ]
  },
  {
    company: "Visvesvaraya Technological University",
    role: "Data Science Research Assistant",
    period: "06/2022 – 01/2023",
    location: "India",
    description: [
      "Conducted research on deep learning applications for predictive analytics and time series forecasting.",
      "Developed Python-based data analysis scripts for processing academic research datasets with 10K+ samples.",
      "Created data visualizations and statistical reports.",
      "Collaborated with faculty on machine learning projects involving regression, classification, and clustering algorithms."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    school: "Arden University",
    degree: "Masters in Data Science",
    period: "11/2024 – 11/2025",
    location: "Berlin, Germany",
    details: [
      "Thesis: Flight Delay Prediction & Optimization Using ML and Time-Series Analysis",
      "Developed XGBoost and LSTM models on 140K+ flight records.",
      "Performed extensive feature engineering and hyperparameter tuning.",
      "Built end-to-end data processing and modeling workflows using Python."
    ]
  },
  {
    school: "Visvesvaraya Technological University",
    degree: "Bachelors in Communications",
    period: "06/2019 – 08/2023",
    location: "India",
    details: [
      "Academic Project: Designed and implemented a real-time face recognition system using computer vision techniques.",
      "Achieved 95%+ accuracy and automated secure access for 100+ users."
    ]
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Programming & ML",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "C", "C++", "Java"]
  },
  {
    category: "ML & Data Analysis",
    skills: ["XGBoost", "LSTM", "Time-Series Forecasting", "Feature Engineering", "Regression", "Classification", "Clustering", "PyTorch"]
  },
  {
    category: "Data Visualization",
    skills: ["Tableau", "Matplotlib", "Seaborn", "Plotly"]
  },
  {
    category: "Databases & Tools",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Git", "Docker"]
  },
  {
    category: "Web & APIs",
    skills: ["HTML", "CSS", "JavaScript", "MERN Stack", "REST APIs"]
  },
  {
    category: "AI Tools",
    skills: ["Large Language Models", "Prompt Engineering", "Context Engineering", "LLM APIs", "RAG"]
  }
];
