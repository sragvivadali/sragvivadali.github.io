const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'sragvivadali.github.io',
  title: 'Sragvi Vadali',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sragvi Vadali',
  role: 'USC Masters in Computer Science & UCLA Computer Science & Linguistics Student',
  resume:
    'https://drive.google.com/file/d/1vkUnjNc7VZljxs7bh5lVUJEWznjBXBbf/view?usp=sharing',
  description:
    "Hello! I'm a graduate student pursuing a Masters in Computer Science at USC (Class of 2027) and completing my Bachelors in Computer Science & Linguistics at UCLA (Class of 2025). I'm currently working as an Engineer on the USC Game 'All Good Things' project, developing real-time computer vision pipelines. Previously, I've worked as a Research Assistant at UCLA NESL Lab fine-tuning LLMs, and as a Fullstack Intern at Hyperlink and Backend Developer Intern at Magic8. My interests span AI/ML, NLP, distributed systems, and software engineering. Beyond tech, I enjoy photography and creating impactful projects that push the boundaries of innovation.",
  social: {
    linkedin: 'https://www.linkedin.com/in/sragvi-vadali-453616183/',
    github: 'https://github.com/sragvivadali',
  },
}

const projects = [
  {
    name: 'USC Game "All Good Things" - Engineer',
    description:
      'Built a real-time pipeline integrating TouchDesigner and Unity for player movement tracking using computer vision, supporting interactive story progression for a team-based Master\'s thesis game. Led development of pose tracking algorithms for 20+ unique ballet movements, enabling challenging multilevel gameplay that adapts to user actions in real time. Collaborated with a cross-functional team of 5; currently preparing for commercial Steam release (target: May 2025).',
    stack: ['TouchDesigner', 'Unity', 'Computer Vision', 'Python', 'Real-time Systems'],
    sourceCode: '',
  },
  {
    name: 'UCLA NESL Lab - Research Assistant',
    description:
      'Fine-tuned Llama 2 LLM on 42GB of time series data with A6000 GPU, exploring transfer learning for prediction tasks. Analyzed and documented 75% accuracy for predicting up to 10 numbers and 30% accuracy for longer sequences, contributing to manuscript drafting and team presentations. Collaborated directly with PhD candidates for experiment design, model evaluation, and technical writing.',
    stack: ['PyTorch', 'Llama 2', 'NLP', 'Deep Learning', 'Transfer Learning', 'GPU Computing'],
    sourceCode: '',
  },
 
  {
    name: 'Dynamic VectorDB (Apache Flink + Kafka)',
    description:
      'Developed and load-tested real-time dynamic vectorDB system combining Apache Kafka, Flink, Pinecone, OpenAI GPT-3.5 for financial data processing. Performed comprehensive stress testing with 10,000+ simultaneous data inputs to evaluate system performance under heavy load conditions. Implemented performance monitoring and achieved sub-100ms latency with 3x faster query times compared to static database solutions. Documented system benchmarks, load testing results, and scalability optimization strategies.',
    stack: ['Apache Kafka', 'Apache Flink', 'Pinecone', 'OpenAI GPT-3.5', 'Python'],
    sourceCode: '',
  },
  {
    name: 'Cataract Detection - AI&Eye',
    description:
      'Designed and trained a PyTorch CNN to classify cataract severity (none, mild/moderate, severe). Focused on clinical accuracy and explainability. Deployed in Chennai for 1,000+ patients, providing accessible eye health screening using deep learning techniques.',
    stack: ['PyTorch', 'CNN', 'Deep Learning', 'Medical AI', 'Python'],
    sourceCode: '',
  },
  {
    name: 'Reflect Hub',
    description:
      'ReflectHub is an application designed to enhance mental health by providing personalized information and resources using GPT technology. Users can share their thoughts and emotions through daily journaling, receive appropriate responses, connect with a supportive community, and engage in meaningful conversations with a GPT-powered chatbot.',
    stack: [
      'React.js',
      'Node.js',
      'OpenAI',
      'Langchain',
      'Firebase',
      'Client-Server Network Model',
    ],
    sourceCode: 'https://github.com/Erosas15/reflect-hub',
  },
  {
    name: 'QuakeAlert - Earthquake Relief Application',
    description:
      'Developed a web application focused on earthquake detection and user safety. Utilized an Earthquake Detection API to notify users within a selected radius of an impending earthquake about the incident, enabling them to take swift safety measures while also facilitating emergency service communication. Enhanced user support by providing information about nearby medical centers within a 5-mile radius.',
    stack: [
      'Python',
      'Flask',
      'Earthquake Detection API',
      'Twilio API',
      'GooglePlaces API',
    ],
    sourceCode: 'https://github.com/sragvivadali/HOTHQuakeAlert',
  },
  {
    name: 'IntelliTrip - A Smart Itinerary Generator',
    description:
      "Engineered a dynamic web application that crafts personalized travel itineraries based on user/group preferences. Application began by capturing and storing specific user dimensions. The processed data and a custom dataset was provided to Cohere's NLP training system, enabling the generation of personalized itineraries at the location of their choice. Prompts were provided for either personalized singular itinerary or combined group itinerary for more efficient recommendation. ",
    stack: ['Python', 'Flask', 'Cohere Model Generation', 'Prompt Engineering'],
    sourceCode: 'https://github.com/sragvivadali/IntelliTrip',
  },
]

const images = {
  imageLinks: [
    {
      src: 'https://cdn.myportfolio.com/0f693c63-6bf6-48e9-89a5-ee10e2af0bcf/fb90acaa-10c7-49bf-8570-b9cc970695c5_rw_600.jpg?h=34f054af3c46351bd34b53625f2b417d',
    },
    {
      src: 'https://cdn.myportfolio.com/0f693c63-6bf6-48e9-89a5-ee10e2af0bcf/21fd6e94-4a70-4308-a686-0067c0444fab_rw_600.jpg?h=ba7fbc4b6a6a41eed7218d186c3965a2',
    },
    {
      src: 'https://cdn.myportfolio.com/0f693c63-6bf6-48e9-89a5-ee10e2af0bcf/e1513346-bd79-4403-9ae9-6c0b1e0e73ee_rw_600.jpg?h=0bf912e50f6b3a5eaa04dec3053bca71',
    },
    {
      src: 'https://cdn.myportfolio.com/0f693c63-6bf6-48e9-89a5-ee10e2af0bcf/817f01a2-7eb4-4b55-bd3f-88400c0bd1c4_rw_1920.jpg?h=e32152dca5d44b099efec2f89818b969',
    },
    {
      src: 'https://cdn.myportfolio.com/0f693c63-6bf6-48e9-89a5-ee10e2af0bcf/7f03ba6c-6933-47d3-963b-2784fed99845_rw_1920.jpg?h=8302124015c8d2fbbfe2d5559febf9a8',
    },
    {
      src: 'https://cdn.myportfolio.com/0f693c63-6bf6-48e9-89a5-ee10e2af0bcf/d36755e9-1707-46ca-9269-79a3d4793562_rw_1920.jpg?h=6270b6438e2abb89780e8a53646f0e4f',
    },
  ],
  url: 'https://sragvphotos.myportfolio.com/photos',
}

const skills = [
  'Python',
  'Java',
  'C++',
  'JavaScript',
  'TypeScript',
  'Rust',
  'React.js',
  'Node.js',
  'Flask',
  'PyTorch',
  'Docker',
  'Kubernetes',
  'Apache Kafka',
  'Apache Flink',
  'GraphQL',
  'AWS',
  'Azure',
  'PostgreSQL',
  'Linux',
  'REST APIs',
  'Microservices Architecture',
  'Tensorflow',
  'Git',
  'HTML',
  'CSS',
]

const contact = {
  email: 'reachsragvi@gmail.com',
}

export { header, about, projects, skills, images, contact }
