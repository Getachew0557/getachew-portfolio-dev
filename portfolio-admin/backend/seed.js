require('dotenv').config();
const mongoose = require('mongoose');
const fs    = require('fs');
const path  = require('path');
const sharp = require('sharp');
const Project       = require('./models/Project');
const Experience    = require('./models/Experience');
const Education     = require('./models/Education');
const Certification = require('./models/Certification');
const Skill         = require('./models/Skill');
const Blog          = require('./models/Blog');

// Resize + compress image to base64 (max 800px wide, jpeg quality 70)
const toBase64 = async (relativePath) => {
  const absPath = path.join(__dirname, '../../src/assets', relativePath);
  if (!fs.existsSync(absPath)) {
    console.warn(`⚠️  Not found: ${relativePath}`);
    return '';
  }
  try {
    const buffer = await sharp(absPath)
      .resize({ width: 800, withoutEnlargement: true })
      .jpeg({ quality: 70 })
      .toBuffer();
    return `data:image/jpeg;base64,${buffer.toString('base64')}`;
  } catch (e) {
    console.warn(`⚠️  Could not process: ${relativePath}`, e.message);
    return '';
  }
};

const projects = [
  {
    title: "Fraud Detection System",
    description: "Fraud detection for E-Commerce and Banking Transactions",
    video: "https://www.youtube.com/embed/d9EqK4NxlhM",
    github: "https://github.com/Getachew0557/fraud-detection-ecommerce-banking.git",
    live: "https://frauddetection.vercel.app/",
    images: [toBase64('fraud1.png'), toBase64('fraud2.png'), toBase64('fraud3.png'), toBase64('fraud4.png')].filter(Boolean),
    tags: ["AI", "Machine Learning", "Python", "Deep Learning"],
    order: 1,
  },
  {
    title: "LLM Legal Document Assistant",
    description: "A Retrieval-Augmented Generation application for querying legal documents",
    video: "",
    github: "https://github.com/Getachew0557/LLM-legal-document-assistant.git",
    live: "",
    images: [toBase64('llm.png'), toBase64('dashboard.png'), toBase64('llm rag flow.png'), toBase64('airflow.png')].filter(Boolean),
    tags: ["LLM", "RAG", "NLP", "Python"],
    order: 2,
  },
  {
    title: "Credit Scoring and Risk Model",
    description: "This project focuses on risk classification, credit scoring analysis, and bank loan insights",
    video: "https://www.youtube.com/embed/PG99-7qm0XY",
    github: "https://github.com/Getachew0557/Credit-Score-Classifications.git",
    live: "https://credit-score-classifications-1.onrender.com/",
    images: [toBase64('credit1.png'), toBase64('credit2.png')].filter(Boolean),
    tags: ["Machine Learning", "Data Science", "Python"],
    order: 3,
  },
  {
    title: "Dev Assistant AI Agent",
    description: "AI-powered developer assistant agent for code assistance and automation",
    video: "",
    github: "https://github.com/example/project4",
    live: "",
    images: [toBase64('image4.png')].filter(Boolean),
    tags: ["AI Agent", "LLM", "Python"],
    order: 4,
  },
  {
    title: "AI Based Book Recommendation System",
    description: "Knowledge Graph Attention Network (KGAT) based book recommendation system",
    video: "",
    github: "https://github.com/Getachew0557/Knowledge-Graph-Attention-Network-Based-Book-Recommendation-System.git",
    live: "https://getachew0557-knowledge-graph-attention-network-based-app-q5zdkw.streamlit.app/",
    images: [toBase64('workflow.png'), toBase64('workflow1.png'), toBase64('workflow2.png'), toBase64('workflow3.png')].filter(Boolean),
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
  { name: "Machine Learning Certified",          institution: "Stamford Online (Coursera)", logo: toBase64('coursera_logo.png'), link: "https://drive.google.com/file/d/1YGIw7KRlEHeDhag50Ict47f_WA2y1UuE/view", order: 1 },
  { name: "Certified AI Career Essential",        institution: "ALX",                        logo: toBase64('alx.png'),           link: "https://drive.google.com/file/d/1x98T7hU1hakSxPw5JuqzSpjAZEny4Kb5/view", order: 2 },
  { name: "Artificial Intelligence Certification",institution: "IBM",                        logo: toBase64('IBM.png'),           link: "https://www.credly.com/badges/3ac35dc1-8fd0-4a2f-9fed-0298982a7c30", order: 3 },
  { name: "Data Analysis Fundamental",            institution: "Udacity",                    logo: toBase64('udacity.png'),       link: "https://www.udacity.com/certificate/e/c799bb20-4a9b-11ef-abb6-fb4251be614c", order: 4 },
  { name: "Android Developer Nanodegree",         institution: "Udacity",                    logo: toBase64('udacity.png'),       link: "https://www.udacity.com/certificate/e/230a58ec-97be-11ef-b7d5-37a75f522899", order: 5 },
  { name: "Author Certification",                 institution: "IJISRT",                     logo: toBase64('author.png'),        link: "https://drive.google.com/file/d/16vnw45yxywnXsJL9etgyI2TA0jsztaTs/view", order: 6 },
  { name: "The Fundamentals of Digital Marketing",institution: "Google Digital Garage",      logo: toBase64('google_logo.png'),   link: "https://drive.google.com/file/d/1ayg8kTdc6SrgVWm0zuYHyIXf4gclFNrE/view", order: 7 },
  { name: "Computer Networking",                  institution: "CISCO",                      logo: toBase64('cisco.jpg'),         link: "https://www.credly.com/badges/70802195-a2dd-42f8-a156-8236609378d3", order: 8 },
];

const blogs = [];

const skills = [
  // Data Science
  { name: 'Python',          category: 'Data Science', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', order: 1 },
  { name: 'TensorFlow',      category: 'Data Science', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', order: 2 },
  { name: 'PyTorch',         category: 'Data Science', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', order: 3 },
  { name: 'Deep Learning',   category: 'Data Science', icon: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png', order: 4 },
  { name: 'NLP',             category: 'Data Science', icon: 'https://cdn-icons-png.flaticon.com/512/1041/1041916.png', order: 5 },
  { name: 'Computer Vision', category: 'Data Science', icon: 'https://cdn-icons-png.flaticon.com/512/1998/1998614.png', order: 6 },
  { name: 'LLM',             category: 'Data Science', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg', order: 7 },
  { name: 'NumPy',           category: 'Data Science', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', order: 8 },
  { name: 'Pandas',          category: 'Data Science', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', order: 9 },
  { name: 'Scikit-learn',    category: 'Data Science', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', order: 10 },
  { name: 'Keras',           category: 'Data Science', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg', order: 11 },
  { name: 'Hugging Face',    category: 'Data Science', icon: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg', order: 12 },
  { name: 'Kafka',           category: 'Data Science', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg', order: 13 },
  { name: 'Airflow',         category: 'Data Science', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg', order: 14 },
  // Frontend
  { name: 'HTML5',           category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', order: 1 },
  { name: 'CSS3',            category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', order: 2 },
  { name: 'JavaScript',      category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', order: 3 },
  { name: 'Bootstrap',       category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', order: 4 },
  { name: 'Tailwind CSS',    category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', order: 5 },
  { name: 'React.js',        category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', order: 6 },
  { name: 'Streamlit',       category: 'Frontend', icon: 'https://streamlit.io/images/brand/streamlit-mark-color.svg', order: 7 },
  { name: 'MERN Stack',      category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', order: 8 },
  // Backend
  { name: 'Node.js',         category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', order: 1 },
  { name: 'PHP',             category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', order: 2 },
  { name: 'PostgreSQL',      category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', order: 3 },
  { name: 'MongoDB',         category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', order: 4 },
  { name: 'Docker',          category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', order: 5 },
  { name: 'Jenkins',         category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', order: 6 },
  { name: 'Git',             category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', order: 7 },
  { name: 'CI/CD',           category: 'Backend', icon: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png', order: 8 },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected');

    // Build projects with compressed base64 images
    console.log('🖼  Processing images...');
    const seededProjects = [
      {
        title: "Fraud Detection System",
        description: "Fraud detection for E-Commerce and Banking Transactions",
        video: "https://www.youtube.com/embed/d9EqK4NxlhM",
        github: "https://github.com/Getachew0557/fraud-detection-ecommerce-banking.git",
        live: "https://frauddetection.vercel.app/",
        images: (await Promise.all(['fraud1.png','fraud2.png','fraud3.png','fraud4.png'].map(toBase64))).filter(Boolean),
        tags: ["AI", "Machine Learning", "Python", "Deep Learning"], order: 1,
      },
      {
        title: "LLM Legal Document Assistant",
        description: "A Retrieval-Augmented Generation application for querying legal documents",
        video: "", github: "https://github.com/Getachew0557/LLM-legal-document-assistant.git", live: "",
        images: (await Promise.all(['llm.png','dashboard.png','llm rag flow.png','airflow.png'].map(toBase64))).filter(Boolean),
        tags: ["LLM", "RAG", "NLP", "Python"], order: 2,
      },
      {
        title: "Credit Scoring and Risk Model",
        description: "This project focuses on risk classification, credit scoring analysis, and bank loan insights",
        video: "https://www.youtube.com/embed/PG99-7qm0XY",
        github: "https://github.com/Getachew0557/Credit-Score-Classifications.git",
        live: "https://credit-score-classifications-1.onrender.com/",
        images: (await Promise.all(['credit1.png','credit2.png'].map(toBase64))).filter(Boolean),
        tags: ["Machine Learning", "Data Science", "Python"], order: 3,
      },
      {
        title: "Dev Assistant AI Agent", description: "AI-powered developer assistant agent",
        video: "", github: "https://github.com/example/project4", live: "",
        images: (await Promise.all(['image4.png'].map(toBase64))).filter(Boolean),
        tags: ["AI Agent", "LLM", "Python"], order: 4,
      },
      {
        title: "AI Based Book Recommendation System",
        description: "Knowledge Graph Attention Network (KGAT) based book recommendation system",
        video: "", github: "https://github.com/Getachew0557/Knowledge-Graph-Attention-Network-Based-Book-Recommendation-System.git",
        live: "https://getachew0557-knowledge-graph-attention-network-based-app-q5zdkw.streamlit.app/",
        images: (await Promise.all(['workflow.png','workflow1.png','workflow2.png','workflow3.png'].map(toBase64))).filter(Boolean),
        tags: ["Knowledge Graph", "Deep Learning", "Recommendation System"], order: 5,
      },
    ];

    const seededCerts = [
      { name: "Machine Learning Certified",           institution: "Stamford Online (Coursera)", logo: await toBase64('coursera_logo.png'), link: "https://drive.google.com/file/d/1YGIw7KRlEHeDhag50Ict47f_WA2y1UuE/view", order: 1 },
      { name: "Certified AI Career Essential",         institution: "ALX",                        logo: await toBase64('alx.png'),           link: "https://drive.google.com/file/d/1x98T7hU1hakSxPw5JuqzSpjAZEny4Kb5/view", order: 2 },
      { name: "Artificial Intelligence Certification", institution: "IBM",                        logo: await toBase64('IBM.png'),           link: "https://www.credly.com/badges/3ac35dc1-8fd0-4a2f-9fed-0298982a7c30", order: 3 },
      { name: "Data Analysis Fundamental",             institution: "Udacity",                    logo: await toBase64('udacity.png'),       link: "https://www.udacity.com/certificate/e/c799bb20-4a9b-11ef-abb6-fb4251be614c", order: 4 },
      { name: "Android Developer Nanodegree",          institution: "Udacity",                    logo: await toBase64('udacity.png'),       link: "https://www.udacity.com/certificate/e/230a58ec-97be-11ef-b7d5-37a75f522899", order: 5 },
      { name: "Author Certification",                  institution: "IJISRT",                     logo: await toBase64('author.png'),        link: "https://drive.google.com/file/d/16vnw45yxywnXsJL9etgyI2TA0jsztaTs/view", order: 6 },
      { name: "The Fundamentals of Digital Marketing", institution: "Google Digital Garage",      logo: await toBase64('google_logo.png'),   link: "https://drive.google.com/file/d/1ayg8kTdc6SrgVWm0zuYHyIXf4gclFNrE/view", order: 7 },
      { name: "Computer Networking",                   institution: "CISCO",                      logo: await toBase64('cisco.jpg'),         link: "https://www.credly.com/badges/70802195-a2dd-42f8-a156-8236609378d3", order: 8 },
    ];

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

    await Project.insertMany(seededProjects);
    console.log(`🚀 Seeded ${seededProjects.length} projects`);

    await Experience.insertMany(experiences);
    console.log(`💼 Seeded ${experiences.length} experiences`);

    await Education.insertMany(educations);
    console.log(`🎓 Seeded ${educations.length} educations`);

    await Certification.insertMany(seededCerts);
    console.log(`📜 Seeded ${seededCerts.length} certifications`);

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
