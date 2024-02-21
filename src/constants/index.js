
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
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    mobile1,
    system1,
    backend1,
    devops,
    deeplearning,
    fullstack,
    cleancode,
    frontend,
    capwings,
    exacraft,
    pythonbrains,
    reactnative,
    python,
    
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
  
  const services1 = [
    {
      title: "Frontend Development",
      icon: frontend,
    },
    {
      title: "Backend Development",
      icon: backend1,
    },
    {
      title: "Fullstack Development",
      icon: fullstack,
    },
    {
      title: "Mobile Development",
      icon: mobile1,
    },
  ];
  const services = [
    {
      title: "System Design",
      icon: system1,
    },
    {
      title: "Clean Coding",
      icon: cleancode,
    },
    {
      title: "Devops",
      icon: devops,
    },
    {
      title: "Machine Learning",
      icon: deeplearning,
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
      name: "python",
      icon: python,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "reactnative",
      icon: reactnative,
    },
   
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Partner",
      company_name: "Python Brains LLP",
      icon: pythonbrains,
      iconBg: "#E6DEDD",
      date: "2018 - 2020",
      points: [
        "As a partner in software services industry for development of software as per client requirement. ",
        "I worked in various software projects with varied roles and responsibilities in the company. ",
        "Roles such as full-stack developer, DevOps, technology architect etc are just a few of my responsibilities and successful projects.",
        "Some really successful project under my contribution are on-premise OCR system combined with robotic process automation. ",
        "Some other projects are Chat-bot platform, on-premise cloud email server, cloud storage system, cloud video conferencing system",
        //"Developing and maintaining web applications using React.js and other related technologies.",
        //"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        //"Implementing responsive design and ensuring cross-browser compatibility.",
        //"Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "CTO",
      company_name: "Capwings Solutions Pvt. Ltd.",
      icon: capwings,
      iconBg: "#E6DEDD",
      date: "2018 - 2022",
      points: [
        "Acting as CTO for development of AI enabled fintech software for financial fraud control system.",
        "Designing the platform with highly pluggable and scalable architecture for implementation of more than 1500+ financial fraud triggers patterns from various documents.",
        "An hybrid system with OCR+NLP+Language translation Engine for over 19 languages, including visual RPA platform for financial frauds.",
        "Leading the team of Developers for implementation and maintenance of web and cloud applications.",
      ],
    },
    {
      title: "Director",
      company_name: "Exacraft AI Pvt. Ltd.",
      icon: exacraft,
      iconBg: "#E6DEDD",
      date: "2019 - Present",
      points: [
        "As a managing director of the company, I have responsibility for in-depth evaluation and make strategic investments in cutting edge technology.",
        "The detailed project report of evaluation need to presented in front of our executive board before making the final decision.",
        "The company currently holds its own ML-Ops (CI/CD pipeline for machine learning/deep leaning), knowledge management framework for DRY coding, Digital Twin Platform with AI capabilities etc.",
        "Established Deep Learning Research and Development, an organization to cater our talent/human resource need in latest technology.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, services1, technologies, experiences, testimonials, projects };