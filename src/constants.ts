import { Project, Experience, Education, SkillGroup, Language, Certificate } from './types';

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
  { name: "German", level: "CONVERSATIONAL", sublevel: "B1 - Able to convey ideas effectively" },
  { name: "English", level: "FLUENT", sublevel: "C1 - Advanced Proficiency" },
  { name: "Hindi", level: "CONVERSATIONAL", sublevel: "B2 - Upper Intermediate" },
  { name: "Telugu", level: "NATIVE", sublevel: "Primary Language" },
  { name: "Kannada", level: "FLUENT", sublevel: "C1 - Advanced Proficiency" },
];

export const PROJECTS: Project[] = [
  {
    title: "Flight Delay Prediction & Optimization",
    description: "Predicts flight delays using XGBoost and LSTM models with 140K+ records.",
    longDescription: "This project leverages a massive dataset of 140,000+ flight records to predict departure delays with high precision. By combining traditional gradient boosting (XGBoost) with deep learning time-series architectures (LSTM), the system identifies patterns in weather, scheduling, and historical performance. The implementation includes a robust data preprocessing pipeline, feature engineering for temporal data, and a real-time inference engine that helps airlines optimize resource allocation and reduce operational costs by an estimated $140K annually.",
    tags: ["Python", "XGBoost", "LSTM", "Time-Series", "Pandas", "NumPy"],
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Gunateja020/Flight_delay_prediction"
  },
  {
    title: "Formula 1 Race Prediction",
    description: "Deep learning system predicting F1 podium finishes with an F1-score of 0.8+.",
    longDescription: "A specialized sports analytics platform that predicts Formula 1 race outcomes using a multi-model approach. It integrates Random Forest for feature importance, XGBoost for tabular data, and CNNs for analyzing track layouts and historical performance trends. The model accounts for dynamic variables such as weather forecasts, tire degradation, and driver-specific track history. Achieved an F1-score of 0.8+ and an RMSE of less than 10, providing highly accurate podium and winner predictions. Includes a custom Python scraper for real-time data ingestion from official F1 APIs.",
    tags: ["Deep Learning", "Random Forest", "XGBoost", "CNN", "Sports Analytics"],
    image: "f1_prediction_img.jpg",
    github: "https://github.com/Gunateja020/F1-Racing"
  },
  {
    title: "Deutsch Learnen",
    description: "AI-powered German learning platform with interactive chat and progress tracking.",
    longDescription: "An immersive language learning application designed to take users from A1 to B1 proficiency. The core feature is an AI-powered Chat Bot that provides real-time conversation practice, correcting grammar and suggesting vocabulary in context. The system uses a MERN stack architecture with integrated LLM APIs for natural language processing. It features a spaced-repetition vocabulary builder, interactive grammar modules, and a personalized dashboard that tracks learning milestones. The UI is built with React and Tailwind CSS, focusing on a clean, distraction-free learning environment.",
    tags: ["React", "AI Chat Bot", "AI", "Tailwind CSS", "German Language", "Web Development"],
    image: "deutsch_learnen_img.jpg",
    github: "https://github.com/Gunateja020/Deutsch_Lernen"
  },
  {
    title: "Hospital Management System",
    description: "Full-stack MERN application for healthcare scheduling and patient record management.",
    longDescription: "A comprehensive healthcare administration platform built on the MERN stack (MongoDB, Express.js, React, Node.js). It streamlines hospital operations by providing secure portals for patients, doctors, and administrators. Patients can book and manage appointments in real-time, while doctors have access to digital health records and automated scheduling. The system implements JWT-based authentication, role-based access control, and a robust MongoDB schema for handling sensitive patient data. The frontend features a responsive dashboard that provides quick access to medical history, prescriptions, and billing information.",
    tags: ["Full-stack", "MongoDB", "Express.js", "React", "Node.js", "Healthcare"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Gunateja020/Hospital-Website"
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

export const CERTIFICATES: Certificate[] = [
  {
    title: "AWS Certified Data Engineering",
    issuer: "Amazon Web Services (AWS)",
    date: "Sept 2025",
    description: "AWS Academy Graduate - Data Engineering training badge. Covers core data engineering concepts on AWS including storage, processing, and security.",
    image: "aws_data_engineering_cert.jpg",
    logo: "https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=128"
  },
  {
    title: "Cloud Foundations",
    issuer: "Great Learning",
    date: "Jan 2024",
    description: "Comprehensive course on cloud computing fundamentals, service models, and deployment strategies.",
    image: "cloud_foundations_cert.jpg",
    logo: "https://www.google.com/s2/favicons?domain=mygreatlearning.com&sz=128"
  },
  {
    title: "Software Engineering",
    issuer: "Saylor University",
    date: "Dec 2023",
    description: "Software Engineering Certificate covering the software development lifecycle, methodologies, and best practices.",
    image: "software_engineering_cert.jpg",
    logo: "https://www.google.com/s2/favicons?domain=saylor.org&sz=128"
  },
  {
    title: "Computing and IT",
    issuer: "OpenLearn",
    date: "Dec 2023",
    description: "Computing and IT Certificate focusing on fundamental concepts of information technology and computer systems.",
    image: "computing_it_cert.jpg",
    logo: "https://www.google.com/s2/favicons?domain=open.edu&sz=128"
  },
  {
    title: "TalentNext course on Java J2EE",
    issuer: "Wipro",
    date: "Oct 2022",
    description: "Wipro TalentNext certificate for completing the Java J2EE course, focusing on enterprise application development.",
    image: "wipro_java_cert.jpg",
    logo: "https://www.google.com/s2/favicons?domain=wipro.com&sz=128"
  }
];
