export const portfolioData = {
  name: 'Yashwanth Venaganti',
  title: 'Full Stack Software Engineer',
  description: 'Passionate developer with expertise in building scalable web applications using Spring Boot and React',
  location: 'Hyderabad, Telangana, India',
  phone: '+91 8688813480',
  email: 'venagantiyashwanth@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',

  about: {
    intro: `Results-driven Full Stack Software Engineer with 2+ years of experience building scalable, high-performance web applications. 
  Strong expertise in Spring Boot and Node.js backend development combined with modern React frontend engineering. 
  Passionate about writing clean, maintainable code and delivering seamless, user-centric digital experiences. 
  Experienced in designing end-to-end systems from architecture to deployment in cloud environments.`,

    highlights: [
      'Designed and developed scalable RESTful APIs using Spring Boot and Express.js',
      'Built dynamic and responsive UIs using React, Tailwind CSS, and modern JavaScript (ES6+)',
      'Implemented microservices architecture with Spring Cloud and Docker-based deployments',
      'Secured applications using JWT authentication and Spring Security best practices',
      'Integrated MySQL and MongoDB databases with optimized queries and indexing strategies',
      'Deployed production-ready applications on AWS (EC2, RDS, S3) with CI/CD pipelines',
      'Collaborated in Agile/Scrum teams to deliver features with high code quality and performance standards',
      'Designed modular and reusable components to improve maintainability and reduce development time',
      'Implemented role-based access control (RBAC) and authentication workflows for enterprise applications',
      'Optimized application performance through lazy loading, caching strategies, and API response tuning',
      'Wrote clean, testable, and well-documented code following industry best practices',
      'Participated in code reviews and mentored junior developers to maintain coding standards',
      'Integrated third-party APIs and payment gateways to enhance application capabilities',
      'Monitored and debugged production issues ensuring high availability and reliability'
    ]
  },

  experience: [
    {
      id: 1,
      role: 'Software Engineer',
      company: 'ADPCX',
      duration: 'Oct 2025 – Present',
      location: 'Bangalore, India',
      description: 'Currently working on enterprise application development',
      highlights: [
        'Designed and implemented RESTful APIs using Spring Boot and Express.js for scalable backend communication',
        'Built responsive and dynamic user interfaces using React, JavaScript, HTML5, and CSS3',
        'Developed backend services using Node.js and Express.js for lightweight microservices',
        'Integrated React components with backend services using Axios for real-time updates',
        'Implemented JWT-based authentication and role-based authorization in Node.js applications',
        'Optimized API performance using middleware, caching strategies, and efficient request handling',
        'Implemented robust state management reducing API-related UI issues by 30%'
      ]
    },
    {
      id: 2,
      role: 'Software Developer',
      company: 'GVCC Solutions Pvt Ltd',
      duration: 'Dec 2024 – Oct 2025',
      location: 'Bangalore, India',
      description: 'Developed microservices and cloud-based solutions',
      highlights: [
        'Developed microservices architecture using Spring Boot, Node.js, and Express.js',
        'Built scalable REST APIs with Express.js including validation, middleware, and error handling',
        'Implemented MySQL and MongoDB database solutions with complex query optimization',
        'Utilized Hibernate, JPA, and Mongoose ORM for efficient data access',
        'Implemented Spring Security and JWT authentication for secure applications',
        'Containerized Node.js services using Docker and deployed on AWS (EC2, S3, RDS)',
        'Integrated third-party APIs and external services into backend systems',
        'Automated deployments using Jenkins and CI/CD pipelines'
      ]
    },
    {
      id: 3,
      role: 'Software Engineer Intern',
      company: 'Cognizant Technology Solutions',
      duration: 'Dec 2023 – May 2024',
      location: 'Chennai, India',
      description: 'Developed full-stack web applications',
      highlights: [
        'Developed end-to-end web applications using Java, Spring Boot, React, and Node.js',
        'Built RESTful backend services using Express.js with MVC architecture',
        'Implemented CRUD operations and authentication using JWT in Node.js applications',
        'Designed reusable React components with hooks and state management',
        'Connected MongoDB database with Node.js backend using Mongoose',
        'Tested APIs using Postman and documented endpoints using Swagger',
        'Followed Agile/Scrum methodologies and participated in sprint planning'
      ]
    }
  ],

  projects: [
    {
      id: 2,
      title: 'GVCC.IN — Company Website',
      description: 'Responsive company website with integrated backend APIs',
      longDescription: 'Built a modern, responsive company website with integrated backend systems for GVCC Solutions.',
      technologies: ['React', 'JavaScript', 'MUI', 'RESTful APIs', 'Docker', 'AWS'],
      highlights: [
        'Built responsive UI components using React and Material UI',
        'Integrated RESTful APIs with optimized state management',
        'Containerized frontend using Docker for consistent deployments',
        'Deployed on AWS with smooth CI/CD integration'
      ],
      image: '/projects/gvcc.jpg',
      // github: 'https://github.com',
      live: 'https://gvcc.in',
      duration: 'Aug 2025'
    },
    {
      id: 1,
      title: 'TheCockpit.In',
      description: 'Interactive web platform with cloud deployment',
      longDescription: 'Comprehensive web platform built with modern stack and deployed on cloud infrastructure.',
      technologies: ['React', 'MUI', 'Spring Boot', 'Java', 'Docker', 'Kubernetes', 'AWS'],
      highlights: [
        'Developed responsive interfaces using React and Material UI',
        'Designed RESTful backend services with Spring Boot',
        'Implemented CRUD operations with validation and error handling',
        'Secured API endpoints and followed security best practices',
        'Participated in code reviews and version control best practices'
      ],
      image: '/projects/cockpit.jpg',
      // github: 'https://github.com',
       live: 'https://thecockpit.in',
      duration: 'Sept 2024 – Present'
    }
  ],

  skills: {
    programming: [
      'Java',
      'JavaScript (ES6+)',
      'SQL'
    ],

    frontend: [
      'React.js',
      'HTML5',
      'CSS3',
      'Material UI',
      'Tailwind CSS',
      'Framer Motion'
    ],

    backend: [
      'Spring Boot',
      'Spring Cloud',
      'Spring Security',
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'JPA/Hibernate',
      'JWT'
    ],

    databases: [
      'MySQL',
      'MongoDB',
      'Query Optimization',
      'Indexing'
    ],

    devops: [
      'AWS (EC2, RDS, S3)',
      'Docker',
      'Jenkins',
      'Kubernetes',
      'CI/CD Pipelines'
    ],

    tools: [
      'Git',
      'GitHub',
      'Linux',
      'Jira',
      'Postman',
      'Swagger'
    ],

    practices: [
      'Agile/Scrum',
      'Microservices',
      'API Integration',
      'ORM',
      'MVC Architecture'
    ]
  },

  education: [
    {
      id: 1,
      institution: 'Gokaraju Rangaraju Institute of Engineering and Technology',
      degree: 'Bachelor of Engineering',
      field: 'Computer Science',
      duration: 'Aug 2019 – July 2023',
      location: 'Hyderabad, India',
      cgpa: '8.1/10',
      coursework: [
        // Frontend
        'HTML5 & CSS3',
        'JavaScript (ES6+)',
        'React.js & Redux',
        'Material UI / Tailwind CSS',
        'Responsive Web Design',
        'Frontend Testing (Jest, React Testing Library)',

        // Backend
        'Node.js & Express.js',
        'Java & Spring Boot',
        'RESTful APIs & GraphQL',
        'Database Design & SQL (MySQL, PostgreSQL)',
        'NoSQL Databases (MongoDB)',
        'Authentication & Authorization (JWT, OAuth2)',
        'Microservices Architecture',

        // DevOps / Cloud
        'AWS Services (EC2, S3, RDS, Lambda)',
        'Docker & Containerization',
        'CI/CD Pipelines (Jenkins, GitHub Actions)',
        'Kubernetes & Orchestration',
        'Monitoring & Logging (Prometheus, ELK Stack)',
        'Version Control with Git & GitHub'
      ]
    }
  ],

  certifications: [
    {
      id: 1,
      title: 'AWS Certified Cloud Foundations',
      issuer: 'Amazon Web Services',
      date: 'Completed'
    },
    {
      id: 2,
      title: 'Java Full Stack Training',
      issuer: 'Level Up',
      date: 'Completed'
    },
    {
      id: 3,
      title: 'DevOps Training',
      issuer: 'Ongoing',
      date: 'Sept 2025 – Present'
    },
    {
      id: 4,
      title: 'INNOVATE INDIA CODING CHAMPIONSHIP',
      issuer: 'AICTE',
      status: 'Participant'
    },
    {
      id: 5,
      title: 'LeetCode',
      issuer: 'LeetCode',
      achievement: 'Solved 100+ problems'
    }
  ],

  contact: {
    email: 'venagantiyashwanth@gmail.com',
    phone: '+91 8688813480',
    location: 'Hyderabad, Telangana, India',
    social: [
      { name: 'GitHub', url: 'https://github.com/YashwanthVenaganti', icon: 'FaGithub' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yashwanthvenaganti/', icon: 'FaLinkedin' },
      { name: 'Email', url: 'mailto:venagantiyashwanth@gmail.com', icon: 'FaEnvelope' }
    ]
  }
};
