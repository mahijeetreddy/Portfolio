import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    python,
    git,
    docker,
    dsp,
    grb,
    atid,
    ems,
    cpp,
    aws,
    tra,
    rmc,
    fmp,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Fullstack Developer",
      icon: backend,
    },
    {
      title: "Front-end Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Teaching Associate",
      company_name: "California State University, Fullerton",
      iconBg: "#383E56",
      date: "January 2024 - May 2024",
      points: [
        "Delivered advanced front-end engineering education to 37+ students in JavaScript, Node.js, React, and TypeScript, ensuring a 100% pass rate in Spring 2024 through effective communication, teaching and mentoring.",
        "Devised a structured curriculum with comprehensive materials, including code reviews, open-source projects, and debugging workshops, reinforcing student learning outcomes and core concepts throughout the semester.",
        "Utilized interactive platforms such as GitHub Classroom and React environments yielding a 35% increase in participation and a 25% improvement in assignment completion rates, demonstrating a strong ability to apply modern development tools and techniques.",
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "The SPARKS Foundation",
      iconBg: "#E6DEDD",
      date: "February 2022 - July 2022",
      points: [
        "Collaborated with project managers and UX designers to augment cross-device user experience using JavaScript and Bootstrap, boosting mobile usability metrics by 25% and saving 20% on development time during the internship.",
        "Incorporated Selenium for automated testing, mitigating manual efforts by 30% and optimizing the testing process, enhancing software quality throughout the tenure.",
        "Orchestrated seamless database integration across 30+ webpages, enabling real-time updates and enriching user interaction and functionality with robust backend scripts in Python and PHP during a 6-month internship.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Gourmet Recipe Book App",
      description:
        "Designed a recipe management app using TypeScript and Angular, supporting and considering 5,000+ data points over 5 months, focusing on maintainability and scalability. Strengthened security by implementing MVC-based authentication with Firestore, bolstering data protection measures; cut login-related issues by 30% during a targeted 4-month phase. Streamlined reliability and app execution using Angular lazy loading and Firestore indexing, culminating in a 20% reduction in load times while ensuring smooth deployment.",
      tags: [
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "Angular",
          color: "green-text-gradient",
        },
        {
          name: "Firestore",
          color: "pink-text-gradient",
        },
        {
          name: "Python",
          color: "blue-text-gradient",
        }
      ],
      image: grb,
      source_code_link: "https://github.com/",
    },
    {
      name: "Digital Streaming Dashboard",
      description:
        "Engineered a Digital Streaming Dashboard using React and JavaScript, improving user retention by 20% with a user-friendly interface and reduced bug occurrence by 30% through rigorous debugging practices within 4 months. Leveraged Firebase for robust Backend Integration and GraphQL for efficient data retrieval, efficiently managing 50+ Query Requests daily and supporting 40+ streaming assets. Harnessed Python for backend data processing and API integration, handling complex data operations and enhancing data synchronization between the frontend and backend systems.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
        {
          name: "GraphQL",
          color: "blue-text-gradient",
        },
      ],
      image: dsp,
      source_code_link: "https://github.com/",
    },
    {
      name: "Realtime Multimedia Collaboration",
      description:
        "Developed a collaborative multimedia platform enabling Concurrent users to upload and process images, videos, and text, utilizing Python and React for seamless user experiences. Implemented real-time interconnectivity using WebRTC and React and Javascript, ensuring low-latency communication and enhanced system responsiveness for concurrent user interactions. Designed algorithms to enhance uploaded media, delivered consistent media quality for diverse data types. Streamlined backend operations with scalable architecture, optimized system performance and reliability, reducing downtime by 25% during peak usage with efficient load balancing and resource allocation.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "WebRTC",
          color: "pink-text-gradient",
        },
        {
          name: "Algorithms",
          color: "blue-text-gradient",
        },
      ],
      image: rmc,
      source_code_link: "https://github.com/",
    },
    {
      name: "Public Transit Commute Optimizer",
      description:
        "Designed and implemented a transit optimization app serving multiple users, leveraging PostgreSQL to handle real-time transit data and optimize route planning. Created advanced SQL queries and views for route suggestions, reducing query execution time by 35% and improving route accuracy by 20%. Integrated Google Maps API and crowd density data, enabling users to visualize routes and avoid congested transit options, cutting commute times by 15%. Developed an analytics module using SQL stored procedures, helping transit authorities identify overcrowded routes, increasing service efficiency by 25%, ensured <1s query response times during high usage periods.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
        {
          name: "GraphQL",
          color: "blue-text-gradient",
        },
      ],
      image: tra,
      source_code_link: "https://github.com/",
    },
    {
      name: "FindMyPet: Lost Pet Tracker",
      description:
        "Built an app to help pet owners locate their lost pets using geolocation and user-uploaded sighting reports, integrated with Firebase for real-time updates. Implemented a notification system via Twilio API, resulting in a 35% reduction in time-to-notification for new sightings reported within a 5-mile radius. Designed an intuitive interface featuring interactive maps and photo uploads, improving user engagement by 40% and streamlining the search process for 500+ reported sightings. Optimized app performance with React Lazy Libraries, achieving a 30% faster load time, ensuring functionality even on low-speed networks.",
      tags: [
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Rest APIs",
          color: "blue-text-gradient",
        },
      ],
      image: fmp,
      source_code_link: "https://github.com/",
    },
    {
      name: "Automatic Tunnel Incident Detection",
      description:
        "Launched a Faster RCNN model for tunnels, attaining 97% accident detection accuracy during the 3-month project. Spearheaded performance optimization initiatives, accelerating response times by 25% and minimizing frame noise by 40% over a focused 3-month interval. Embedded real-time alerting via WebSocket, slashing incident response times by 50% and ameliorating overall safety monitoring effectiveness through dependable operation. Optimized deployment with Docker, cutting time by 40%, and enhancing scalability and performance consistency.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Docker",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "HTML/ CSS",
          color: "blue-text-gradient",
        }
      ],
      image: atid,
      source_code_link: "https://github.com/",
    },
    {
      name: "E- Safety Welcoming",
      description:
        "Pioneered the creation of a smart home security system, integrating advanced data storage and facial recognition to securely process 10,000+ entries with reliable real-time processing, emphasizing maintainability. Engineered a facial recognition module, reaching 96% match accuracy over a 16-week development cycle.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "HTML/ CSS",
          color: "pink-text-gradient",
        },
        {
          name: "Pycharm",
          color: "blue-text-gradient",
        }
      ],
      image: ems,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };