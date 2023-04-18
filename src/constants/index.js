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
    sonarcloud,
    academic,
    dataanalyst,
    weatherapp,
    data,
    aistock,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Data Analyst",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "SQL",
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
    
  ];
  
  const experiences = [
    {
      title: "Junior Developer",
      company_name: "ERP2",
      icon: sonarcloud,
      iconBg: "#E6DEDD",
      date: "March 2020 - August 2020",
      points: [
        "Developing and maintaining web applications using PHP and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products for Clients.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Impleented Innovative SEO Strategies as well marketing campaigns to drive customer growth"
      ],
    },
    {
      title: "Computer Science Graduate",
      company_name: "NUI Galway",
      icon: academic,
      iconBg: "#E6DEDD",
      date: "Sep 2016 - July 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Data Analyst",
      company_name: "Flutter",
      icon: dataanalyst,
      iconBg: "#E6DEDD",
      date: "July 2021 - Sep 2023",
      points: [
        "Built Looker dashboards identifying worst performing customers producing an almost 60% reduction in non-profitable business in certain markets",
        "Composed an action-based trading plan based off detailed data analysis using Python and SQL which resulted in a 30% increase in unprofitable customer detection",
        "Created new and improved monitors that increased productivity and precision of traders using web dev techbnologies",
        "Evaluated customer patterns and executed procedures to produce the best product for Customers",
      ],
    },
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
      name: "Stock Market AI Strategy",
      description:
        "Web-based platform that allows users to search for stocks and apply cutting-edge AI models to predict future stock prices. Built using Python and FastAPI",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "FastAPI",
          color: "green-text-gradient",
        },
        {
          name: "Postgres",
          color: "pink-text-gradient",
        },
      ],
      image: aistock,
      source_code_link: "https://github.com/paulc160/QuantSynergy",
    },
    {
      name: "Weather App",
      description:
        "Web application that enables users to search for weather information for any city in the world, and provides a 3-day forecast for the selected location. Built using React and Weather.com API",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
      ],
      image: weatherapp,
      source_code_link: "https://github.com/paulc160/WeatherApp",
    },
    {
      name: "Analysis of Shopping Patterns",
      description:
        "A comprehensive analysis of customer shopping patterns in a retail store including in-depth analysis and customer segmentation techniques. Built using Python and Pandas",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Jupyter Notebook",                                                                 
          color: "green-text-gradient",
        },
      ],
      image: data,
      source_code_link: "https://github.com/paulc160/UCDPA_PaulConnolly/blob/main/Data%20Course%20-%20Working%20.ipynb",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };