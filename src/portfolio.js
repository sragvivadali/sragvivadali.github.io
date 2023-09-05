const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'sragvivadali.github.io',
  title: 'Sragvi Vadali',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sragvi Vadali',
  role: 'UCLA Computer Science & Linguistics Student',
  resume:
    'https://drive.google.com/file/d/1vkUnjNc7VZljxs7bh5lVUJEWznjBXBbf/view?usp=sharing',
  description:
    "Hello! I'm a passionate student, and I'm on track to graduate in the class of 2025. My primary interests lie in the captivating worlds of computer science and natural language processing (NLP). In addition to my technical pursuits, I have a creative side that I express through photography. My ultimate goal is to hone my skills in AI development and NLP to undertake projects that make a significant impact, pushing the boundaries of innovation and problem-solving.",
  social: {
    linkedin: 'https://www.linkedin.com/in/sragvi-vadali-453616183/',
    github: 'https://github.com/sragvivadali',
  },
}

const projects = [
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
  {
    name: 'PnetPhlix',
    description:
      'Given a user history, created classes such as User, UserDatabase, Movie, MovieDatabase, Recommender, and TreeMultimap, which form the core structure of the application. Task was to enable the app to analyze user viewing histories, store movie information, and generate personalized movie recommendations based on both user preferences and movie attributes, all in a specific time complexity',
    stack: [
      'C++',
      'Object Oriented Programming',
      'Time Complexity',
      'Space Complexity',
    ],
    sourceCode:
      'https://github.com/sragvivadali/c-project-code/tree/main/Pnetphlix',
  },
  {
    name: 'Open Source Project - Video Downloader',
    description:
      'Part of a team of four to develop a Python application for downloading YouTube videos as .mp3 files based on user searches. Utilized Beautiful Soup and Youtube-dl in the backend, while developing the frontend with next.js and bulma.css. Deployed the project with docker.',
    stack: ['Next.js', 'Docker', 'Python'],
    sourceCode: 'https://github.com/sragvivadali/videoDownload',
  },
  {
    name: 'Peach Party',
    description:
      'Developed a Mario Party-inspired board game where two players navigate through various levels, collecting coins and power-ups while evading enemy CPUs. Leveraged object-oriented programming techniques, including polymorphism and inheritance, to create a diverse set of engaging levels for user enjoyment',
    stack: [
      'C++',
      'Object Oriented Programming',
      'Polymorphism',
      'Inheritence',
    ],
    sourceCode:
      'https://github.com/sragvivadali/c-project-code/tree/main/Project%203',
  },
  {
    name: 'Seven Segment Display Project',
    description:
      'In a collaborative effort with a four-member team, designed a message display system utilizing Two Seven Segment Displays (SSDs), conditional logic, universal gates, and strict LED state control across four distinct phases. The chosen message, "U SIT ON A THRONE OF LIES," derived from the iconic movie, "The Elf," required careful segmentation. This entailed creating precise truth tables, applying Boolean algebra for efficient equations, and validating the results through Multisim simulations. ',
    stack: [
      'Electronics',
      'Seven Segment Displays',
      'Multisim',
      'Boolean Algebra',
    ],
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
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Node.js',
  'Git',
  'Python',
  'C++',
  'Java',
  'Assembly',
  'Tensorflow',
  'Flask',
  'Docker',
]

const contact = {
  email: 'reachsragvi@gmail.com',
}

export { header, about, projects, skills, images, contact }
