require('dotenv').config();
const mongoose = require('mongoose');
const Project       = require('./models/Project');
const Experience    = require('./models/Experience');
const Education     = require('./models/Education');
const Certification = require('./models/Certification');
const Skill         = require('./models/Skill');
const Blog          = require('./models/Blog');

const projects = [
  {
    title: "Fraud Detection System",
    description: "Fraud detection for E-Commerce and Banking Transactions",
    video: "https://www.youtube.com/embed/d9EqK4NxlhM",
    github: "https://github.com/Getachew0557/fraud-detection-ecommerce-banking.git",
    live: "https://frauddetection.vercel.app/",
    images: [],
    tags: ["AI", "Machine Learning", "Python", "Deep Learning"],
    order: 1,
  },
  {
    title: "LLM Legal Document Assistant",
    description: "A Retrieval-Augmented Generation application for querying legal documents",
    video: "",
    github: "https://github.com/Getachew0557/LLM-legal-document-assistant.git",
    live: "",
    images: [],
    tags: ["LLM", "RAG", "NLP", "Python"],
    order: 2,
  },
  {
    title: "Credit Scoring and Risk Model",
    description: "This project focuses on risk classification, credit scoring analysis, and bank loan insights",
    video: "https://www.youtube.com/embed/PG99-7qm0XY",
    github: "https://github.com/Getachew0557/Credit-Score-Classifications.git",
    live: "https://credit-score-classifications-1.onrender.com/",
    images: [],
    tags: ["Machine Learning", "Data Science", "Python"],
    order: 3,
  },
  {
    title: "Dev Assistant AI Agent",
    description: "AI-powered developer assistant agent for code assistance and automation",
    video: "",
    github: "https://github.com/example/project4",
    live: "",
    images: [],
    tags: ["AI Agent", "LLM", "Python"],
    order: 4,
  },
  {
    title: "AI Based Book Recommendation System",
    description: "Knowledge Graph Attention Network (KGAT) based book recommendation system",
    video: "",
    github: "https://github.com/Getachew0557/Knowledge-Graph-Attention-Network-Based-Book-Recommendation-System.git",
    live: "https://getachew0557-knowledge-graph-attention-network-based-app-q5zdkw.streamlit.app/",
    images: [],
    tags: ["Knowledge Graph", "Deep Learning", "Recommendation System"],
    order: 5,
  },
];

const experiences = [
  {
    title: "AI Engineer | Software Developer",
    company: "Information Network Security Administration",
    date: "April 2023 – Present",
    location: "Addis Ababa",
    tasks: [
      "Architected AI-powered Antivirus, IDS, and WAF systems for real-time threat detection.",
      "Built a multilingual legal RAG chatbot and scalable microservices for HR automation.",
      "Engineered backend inference APIs, Docker deployments, and CI/CD MLOps pipelines.",
      "Led engineering teams and mentored junior AI developers to maximize delivery efficiency.",
    ],
    order: 1,
  },
  {
    title: "AI Engineer",
    company: "Afri Software Solutions",
    date: "Nov 2024 – Present",
    location: "Addis Ababa",
    tasks: [
      "Developed KcartBot, a Multilingual RAG Assistant for Agri-Commerce recommendations.",
      "Engineered an AI-powered Intelligent Pricing engine using LLMs and vector embeddings.",
    ],
    order: 2,
  },
  {
    title: "Agentic AI Trainer",
    company: "UNDP",
    date: "Sept 2025 – Feb 2026",
    location: "Addis Ababa",
    tasks: [
      "Designed hands-on Agentic AI and LLM training programs bridging theory and practice.",
      "Guided participants to build end-to-end multi-agent AI solutions and RAG architectures.",
      "Mentored teams to improve system design, code quality, and deployment readiness.",
    ],
    order: 3,
  },
  {
    title: "Junior Software Support Engineer",
    company: "Moti Engineering Plc",
    date: "Dec 2022 – April 2023",
    location: "Addis Ababa",
    tasks: [
      "Built a Voice Guidance application with automated Text-to-Speech functionality.",
      "Resolved technical issues in customer systems to enhance overall reliability.",
    ],
    order: 4,
  },
];

const educations = [
  {
    title: "Master of Science in Computer Engineering",
    institution: "Addis Ababa Science and Technology University (AASTU) - Addis Ababa, Ethiopia",
    date: "2021 - 2024",
    description: "Focus on artificial intelligence, machine learning, Image and Video Processing, High-performance Computing, Parallel Computing, Distributed System, and Cyber Security.",
    type: "education",
    order: 1,
  },
  {
    title: "Bachelor of Science in Electrical and Computer Engineering",
    institution: "Addis Ababa Science and Technology University (AASTU) - Addis Ababa, Ethiopia",
    date: "2017 - 2022",
    description: "Specialized in Software Engineering, OOP, Database, programming, data structure and algorithm.",
    type: "education",
    order: 2,
  },
  {
    title: "Artificial Intelligence Mastery",
    institution: "10 Academy - Addis Ababa, Ethiopia",
    date: "August 2024 - November 2024",
    description: "Advanced training in AI techniques and applications includes AI, Machine Learning, Gen AI, Time-series forecasting, LLM and Data Analysis.",
    type: "education",
    order: 3,
  },
];

const certifications = [
  {
    name: "Machine Learning Certified",
    institution: "Stamford Online (Coursera)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png",
    link: "https://drive.google.com/file/d/1YGIw7KRlEHeDhag50Ict47f_WA2y1UuE/view",
    order: 1,
  },
  {
    name: "Certified AI Career Essential",
    institution: "ALX",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/ALX_Logo.png/320px-ALX_Logo.png",
    link: "https://drive.google.com/file/d/1x98T7hU1hakSxPw5JuqzSpjAZEny4Kb5/view",
    order: 2,
  },
  {
    name: "Artificial Intelligence Certification",
    institution: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    link: "https://www.credly.com/badges/3ac35dc1-8fd0-4a2f-9fed-0298982a7c30",
    order: 3,
  },
  {
    name: "Data Analysis Fundamental",
    institution: "Udacity",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Udacity_logo.png/320px-Udacity_logo.png",
    link: "https://www.udacity.com/certificate/e/c799bb20-4a9b-11ef-abb6-fb4251be614c",
    order: 4,
  },
  {
    name: "Android Developer Nanodegree",
    institution: "Udacity",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Udacity_logo.png/320px-Udacity_logo.png",
    link: "https://www.udacity.com/certificate/e/230a58ec-97be-11ef-b7d5-37a75f522899",
    order: 5,
  },
  {
    name: "Author Certification",
    institution: "IJISRT",
    logo: "https://ijisrt.com/assets/images/logo.png",
    link: "https://drive.google.com/file/d/16vnw45yxywnXsJL9etgyI2TA0jsztaTs/view",
    order: 6,
  },
  {
    name: "The Fundamentals of Digital Marketing",
    institution: "Google Digital Garage",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    link: "https://drive.google.com/file/d/1ayg8kTdc6SrgVWm0zuYHyIXf4gclFNrE/view",
    order: 7,
  },
  {
    name: "Computer Networking",
    institution: "CISCO",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
    link: "https://www.credly.com/badges/70802195-a2dd-42f8-a156-8236609378d3",
    order: 8,
  },
];

const blogs = [];

const skills = [
  // Data Science
  { name: 'Python',          category: 'Data Science', order: 1 },
  { name: 'TensorFlow',      category: 'Data Science', order: 2 },
  { name: 'PyTorch',         category: 'Data Science', order: 3 },
  { name: 'Deep Learning',   category: 'Data Science', order: 4 },
  { name: 'NLP',             category: 'Data Science', order: 5 },
  { name: 'Computer Vision', category: 'Data Science', order: 6 },
  { name: 'LLM',             category: 'Data Science', order: 7 },
  { name: 'NumPy',           category: 'Data Science', order: 8 },
  { name: 'Pandas',          category: 'Data Science', order: 9 },
  { name: 'Scikit-learn',    category: 'Data Science', order: 10 },
  { name: 'Keras',           category: 'Data Science', order: 11 },
  { name: 'Hugging Face',    category: 'Data Science', order: 12 },
  { name: 'Kafka',           category: 'Data Science', order: 13 },
  { name: 'Airflow',         category: 'Data Science', order: 14 },
  // Frontend
  { name: 'HTML5',           category: 'Frontend', order: 1 },
  { name: 'CSS3',            category: 'Frontend', order: 2 },
  { name: 'JavaScript',      category: 'Frontend', order: 3 },
  { name: 'Bootstrap',       category: 'Frontend', order: 4 },
  { name: 'Tailwind CSS',    category: 'Frontend', order: 5 },
  { name: 'React.js',        category: 'Frontend', order: 6 },
  { name: 'Streamlit',       category: 'Frontend', order: 7 },
  { name: 'MERN Stack',      category: 'Frontend', order: 8 },
  // Backend
  { name: 'Node.js',         category: 'Backend', order: 1 },
  { name: 'PHP',             category: 'Backend', order: 2 },
  { name: 'PostgreSQL',      category: 'Backend', order: 3 },
  { name: 'MongoDB',         category: 'Backend', order: 4 },
  { name: 'Docker',          category: 'Backend', order: 5 },
  { name: 'Jenkins',         category: 'Backend', order: 6 },
  { name: 'Git',             category: 'Backend', order: 7 },
  { name: 'CI/CD',           category: 'Backend', order: 8 },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected');

    // Clear existing data
    await Promise.all([
      Project.deleteMany({}),
      Experience.deleteMany({}),
      Education.deleteMany({}),
      Certification.deleteMany({}),
      Skill.deleteMany({}),
      Blog.deleteMany({}),
    ]);
    console.log('🗑  Cleared existing data');

    // Insert all
    await Project.insertMany(projects);
    console.log(`🚀 Seeded ${projects.length} projects`);

    await Experience.insertMany(experiences);
    console.log(`💼 Seeded ${experiences.length} experiences`);

    await Education.insertMany(educations);
    console.log(`🎓 Seeded ${educations.length} educations`);

    await Certification.insertMany(certifications);
    console.log(`📜 Seeded ${certifications.length} certifications`);

    await Skill.insertMany(skills);
    console.log(`🛠  Seeded ${skills.length} skills`);

    await Blog.insertMany(blogs);
    console.log(`✍️  Seeded ${blogs.length} blogs`);

    console.log('\n✨ Seed complete! Open MongoDB Compass to verify.');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seed failed:', err);
    process.exit(1);
  }
}

seed();
