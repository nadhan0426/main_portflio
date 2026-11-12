export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  type: 'Client' | 'Personal' | 'Research' | 'Open Source';
  shortDesc: string;
  fullDesc: string;
  features: string[];
  architecture: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  images: {
    col1Top: string;
    col1Bottom: string;
    col2Tall: string;
  };
}

export interface ServiceItem {
  number: string;
  name: string;
  description: string;
  skills: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; highlight?: boolean; desc: string }[];
}

export const PERSONAL_INFO = {
  name: 'Raghunaatha Sethupathi',
  nickname: 'Raghu',
  title: 'Python Full-Stack Developer | AI/ML Developer',
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'nathansethu0426@gmail.com',
  github: 'https://github.com/Nathansethu',
  defaultLinkedIn: 'https://linkedin.com/in/raghunaatha-sethupathi',
  defaultFreelancer: 'https://www.freelancer.com/u/raghusethu',
  heroTagline: 'A Python developer driven by crafting striking and unforgettable projects',
  aboutIntro:
    "I'm a Python developer interested in building responsive web applications, robust backend systems, and AI-powered solutions. I work with Python, Django, React.js, and machine learning technologies. I enjoy solving practical problems, writing maintainable code, and continuously improving my development skills.",
};

export const MARQUEE_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

export const ASSETS = {
  heroPortrait:
    'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png',
  aboutMoon:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  aboutP59:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  aboutLego:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  aboutGroup:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Modern, reactive interfaces with component-driven architectures and fluid layouts.',
    skills: [
      { name: 'React.js', highlight: true, desc: 'SPA architecture, custom hooks, reusable modular components' },
      { name: 'JavaScript (ES6+)', highlight: true, desc: 'Asynchronous event loops, DOM manipulation, clean logic' },
      { name: 'HTML5', desc: 'Semantic layouts, accessible markup, forms, SEO foundations' },
      { name: 'CSS3 & Modern Styling', desc: 'Flexbox, CSS Grid, animations, media queries, Tailwind CSS' },
    ],
  },
  {
    title: 'Backend Engineering',
    description: 'Scalable server-side systems, relational database modeling, and secure APIs.',
    skills: [
      { name: 'Python', highlight: true, desc: 'Core OOP, data structures, automation, mathematical scripts' },
      { name: 'Django', highlight: true, desc: 'MVT pattern, ORM modeling, Django REST Framework, authentication' },
      { name: 'REST API Integration', highlight: true, desc: 'Endpoint design, JSON serialization, auth headers, error handling' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    description: 'Predictive modeling, deep learning pipelines, and computer vision workflows.',
    skills: [
      { name: 'ML Fundamentals', highlight: true, desc: 'Classification, regression, cross-validation, feature engineering' },
      { name: 'TensorFlow', highlight: true, desc: 'Neural network training, tensor math, saved model inference' },
      { name: 'Keras', desc: 'Sequential and functional model architectures, loss optimization' },
      { name: 'OpenCV', highlight: true, desc: 'Image preprocessing, contour analysis, masking, color thresholding' },
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'Python Development',
    description:
      'Creation of robust Python backend workflows, data processing utilities, and automation scripts tailored to business logic and clean maintenance.',
    skills: ['Python 3', 'OOP', 'Data Pipelines', 'Automation'],
  },
  {
    number: '02',
    name: 'Django Backend Development',
    description:
      'Development of complete Django web systems including relational database schemas, secure user authentication, admin panels, and backend services.',
    skills: ['Django', 'ORM', 'Authentication', 'Admin Systems'],
  },
  {
    number: '03',
    name: 'React.js Frontend Development',
    description:
      'Designing clean, modern, and conversion-focused user interfaces with attention to responsive layout, state management, and fluid user experience.',
    skills: ['React.js', 'Modular Components', 'Responsive UI', 'State Flow'],
  },
  {
    number: '04',
    name: 'REST API Integration',
    description:
      'Architecting and connecting clean RESTful endpoints, integrating third-party APIs, and establishing smooth data contracts between frontend and backend.',
    skills: ['REST APIs', 'JSON Payloads', 'API Contracts', 'CORS & Auth'],
  },
  {
    number: '05',
    name: 'AI/ML Application Development',
    description:
      'Translating machine learning models and predictive algorithms into usable software products with structured inputs, scoring, and visualizations.',
    skills: ['TensorFlow', 'Keras', 'Scikit-Learn', 'Predictive Logic'],
  },
  {
    number: '06',
    name: 'Computer Vision & OpenCV',
    description:
      'Building image processing and computer vision pipelines for automated object detection, cloth inspection, contours, and visual feature extraction.',
    skills: ['OpenCV', 'Image Filtering', 'Thresholding', 'Detection'],
  },
  {
    number: '07',
    name: 'Bug Fixing & Web Improvements',
    description:
      'Diagnosing backend errors, optimizing slow queries, resolving frontend rendering glitches, and enhancing responsive behavior across all screen sizes.',
    skills: ['Debugging', 'Code Refactoring', 'Performance', 'Cross-browser'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'health-monitoring',
    number: '01',
    title: 'AI Health Monitoring & Disease Prediction',
    subtitle: 'Educational & Predictive Healthcare Software',
    category: 'AI / Machine Learning',
    type: 'Personal',
    shortDesc:
      'Educational software application for diabetes and cardiovascular disease risk prediction using trained machine learning algorithms.',
    fullDesc:
      'A comprehensive predictive system developed to demonstrate how machine learning can analyze multi-factor clinical variables (such as blood pressure, glucose levels, cholesterol, and BMI) to assess statistical health risk factors. Designed strictly as an educational and predictive software project to illustrate supervised learning workflows, metric validation, and risk factor visualization.',
    features: [
      'Multi-parameter risk scoring for diabetes and cardiovascular indicators',
      'Data preprocessing pipeline handling normalization and missing values',
      'Interactive risk breakdown with feature-importance visualization',
      'Clear educational disclaimer boundaries for non-diagnostic usage',
    ],
    architecture:
      'Python data pipeline with Scikit-learn/TensorFlow model inference, connected to a modular web frontend with real-time risk classification.',
    tags: ['Python', 'Machine Learning', 'TensorFlow', 'Health Analytics', 'Predictive Modeling'],
    githubUrl: 'https://github.com/Nathansethu',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      col2Tall:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    },
  },
  {
    id: 'transcript-summarizer',
    number: '02',
    title: 'YouTube Transcript Summarizer',
    subtitle: 'Automated Video Transcript & Content Extractor',
    category: 'Full-Stack NLP Application',
    type: 'Personal',
    shortDesc:
      'A web application designed for extracting, parsing, and summarizing lengthy YouTube video transcripts into concise key takeaways.',
    fullDesc:
      'Solves the friction of reviewing hours of informational video content. Users submit a YouTube video URL, and the application extracts the transcript stream, segments the speech into coherent conceptual blocks, and generates concise, structured bullet summaries with timestamps and topic tags.',
    features: [
      'Automated transcript extraction from YouTube video IDs',
      'Text chunking and structured summary generation',
      'Timestamp preservation for fast video segment reference',
      'Clean export to markdown and clip-ready summaries',
    ],
    architecture:
      'Python backend processing transcripts with natural language processing pipelines, paired with a fast React interface for instant summary inspection.',
    tags: ['Python', 'NLP', 'REST API', 'Text Summarization', 'React.js'],
    githubUrl: 'https://github.com/Nathansethu',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      col2Tall:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    },
  },
  {
    id: 'cloth-detection',
    number: '03',
    title: 'Cloth Detection using OpenCV',
    subtitle: 'Computer Vision & Garment Image Processing',
    category: 'Computer Vision',
    type: 'Research',
    shortDesc:
      'An image-processing and cloth-detection system for automated fabric contouring, color segmentation, and bounding box analysis.',
    fullDesc:
      'An applied computer vision project focused on analyzing apparel and textile surfaces. Utilizes OpenCV for edge detection, thresholding, morphologic operations, and contour mapping to identify garments in diverse lighting conditions and extract boundary coordinates.',
    features: [
      'Color space conversions (RGB, HSV, Grayscale) for robust segmentation',
      'Adaptive Gaussian thresholding and Canny edge detection for fabrics',
      'Contour hierarchy extraction with automated bounding box generation',
      'Noise filtering via morphological erosion and dilation kernels',
    ],
    architecture:
      'Python OpenCV pipeline with NumPy array transformations and image mask overlays for visual verification.',
    tags: ['Python', 'OpenCV', 'Computer Vision', 'NumPy', 'Image Processing'],
    githubUrl: 'https://github.com/Nathansethu',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      col2Tall:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    },
  },
  {
    id: 'django-fullstack',
    number: '04',
    title: 'Django Full-Stack Web Application',
    subtitle: 'Integrated Frontend & Scalable Backend System',
    category: 'Full-Stack Web',
    type: 'Personal',
    shortDesc:
      'A complete full-stack web application demonstrating Django backend logic, secure authentication, database modeling, and interactive frontend integration.',
    fullDesc:
      'Engineered to demonstrate enterprise-level full-stack architecture. Features an idiomatic Django backend with relational schema migrations, custom user authentication, CSRF/CORS security policies, and RESTful serializer layers connected seamlessly with a modern client frontend.',
    features: [
      'Django ORM models with relational constraints and data validation',
      'REST API endpoints with pagination, filtering, and token authentication',
      'Modular client components with reactive state updates',
      'Configurable environment management and production-ready structure',
    ],
    architecture:
      'Django 4+ backend with SQLite/PostgreSQL, Django REST Framework, and React.js single-page application interface.',
    tags: ['Python', 'Django', 'React.js', 'REST API', 'Full-Stack'],
    githubUrl: 'https://github.com/Nathansethu',
    images: {
      col1Top:
        'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
      col1Bottom:
        'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
      col2Tall:
        'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
    },
  },
];
