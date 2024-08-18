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
        "Enhanced student engagement and success by instructing 37+ students in front-end engineering, involving JavaScript, Node.js, React, and TypeScript, fostering a 100% pass rate in Spring 2024.",
        "Devised comprehensive course materials, including code reviews, project assignments, and debugging sessions, reinforcing student learning outcomes and engagement throughout the semester.",
        "Elevated learning experiences by utilizing interactive platforms like GitHub Classroom and React environments, yielding a 35% increase in student participation and a 25% rise in assignment completion rates, over the term.",
      ],
    },
    {
      title: "Web Development Intern",
      company_name: "The SPARKS Foundation",
      iconBg: "#E6DEDD",
      date: "October 2021 - March 2022",
      points: [
        "•	Collaborated with project managers and UX designers to augment cross-device user experience using JavaScript and Bootstrap, boosting mobile usability metrics by 25% and saving 20% on development time during the internship",
        "Incorporated Selenium for automated testing, mitigating manual testing efforts by 30% and optimizing the testing process, enhancing software quality throughout the tenure",
        "Orchestrated seamless database integration across 30+ webpages, enabling real-time updates and enriching user interaction and functionality with robust backend scripts in Python and PHP during a 6-month internship.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Gourmet Recipe Book App",
      description:
        "Designed a recipe management app using TypeScript and Angular, enabling seamless recipe creation and storage for users supporting over 5,000 recipes in the five- month time span. Secured user data by applying an MVC-based authentication with Firestore, strengthening data protection measures with a 30% decrease in login- related incidents over a targeted 4-month phase. Streamlined app performance through Angular lazy loading and Firestore indexing, culminating in a 20% reduction in load times and bolstering scalability across the 5-month cycle.",
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
          name: "Git",
          color: "blue-text-gradient",
        }
      ],
      image: grb,
      source_code_link: "https://github.com/",
    },
    {
      name: "Digital Streaming Application",
      description:
        "Devised a Netflix-like streaming app using Kotlin and Android Studio, improving user engagement by 20% with a user-friendly interface and reducing bugs by 30% through efficient debugging within 4 months. Integrated Firebase for seamless storage and retrieval, supporting 30+ streaming contents and handling over 50 HTTPS requests per day in the last two months of the project."
        ,
      tags: [
        {
          name: "Android Studio",
          color: "blue-text-gradient",
        },
        {
          name: "Kotlin",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
        {
          name: "Git",
          color: "blue-text-gradient",
        },
      ],
      image: dsp,
      source_code_link: "https://github.com/",
    },
    {
      name: "Automatic Tunnel Incident Detection",
      description:
        "Deployed a Faster RCNN model for tunnels, attaining 97% accident detection accuracy during the 3-month project. Spearheaded performance optimization initiatives, resulting in a 25% improvement in response times and minimizing frame noise by 40% over a focused 3-month interval. Integrated real-time alert notifications using WebSocket technology, lowering incident response time by 50% and ameliorating overall safety monitoring effectiveness during the execution period."
        ,
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "TKinter",
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
        "Pioneered the development of a smart home security system, integrating advanced Data Storage and Face Recognition to process over 10,000 data entries with real-time recognition speeds during the 2-month build timeline. Engineered a facial recognition system, achieving a high match rate threshold of 95% over an intensive 8-week development cycle."
        ,
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