import Iti from "../assets/iti.png";
import Upwork from "../assets/upwork.svg";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import reactjs from "../assets/reactjs.png";
import redux from "../assets/redux.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";
import python from "../assets/python.png";
import django from "../assets/django.webp";
import sass from "../assets/sass.png";
// import django from "../assets/django.png";
import docker from "../assets/docker.png";
import figma from "../assets/figma.png";
import flutter from "../assets/flutter.png";
import dart from "../assets/dart.png";
import firebase from "../assets/firebase.png";
import threejs from "../assets/threejs.svg";
import artigen from "../assets/projects/artigen.jpeg";
import customCalendar from "../assets/projects/customCalendar.PNG";
import amsFullCalendar from "../assets/projects/amsFullCalendar.PNG";
import restaurant from "../assets/projects/restaurant.PNG";
import todoList from "../assets/projects/todoList.PNG";
import noteBook from "../assets/projects/noteBook.PNG";
import whetherWebApp from "../assets/projects/whetherWebApp.PNG";
import chatty from "../assets/projects/chatty.jpeg";
import ipark from "../assets/projects/ipark.jpeg";
import nanny from "../assets/projects/nanny.jpg";
import whosapp from "../assets/projects/whosapp.jpg";
import football from "../assets/projects/football.png";
export const MainColor = "#6969cd";
export const Grey = "#d4d0d9";
export const Skillss = [
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
    name: "Sass",
    icon: sass,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "django",
    icon: django,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
];

export const WorkingExperience = [
  {
    img: Iti,
    title: "Frontend Developer",
    place: "Evolve -  National Aerospace Science and Technology Park (NASTP) ",
    date: "July 2023 - Present",
    description: [
      "• Worked on real-world projects, collaborating with a team of developers",
      "• Enhanced technical skills in front-end web development (HTML, CSS, JavaScript, React JS & redux)",
      "• Integrated third party libraries with react",
      "• Proficient in React Js, MUI, Bootstrap and ant-design",
      "• Enhanced  team management and communications  skills ",
      "• Implement complex API integration with complex logic",
      "• Developed captivating, responsive user interfaces using React.js and Next.js for web projects.",
    ],
  },
  {
    img: Upwork,
    title: "Frontend developer intern",
    place: "Evolve -  Near Time Medico National Stadium",
    date: "June 2023 - July 2023",
    description: [
      "• Implement react skills in real world problems ",
      "• Develop a prototype of Schedular (without any library /third party ) ",
      "• Deep  dive into uses of react hooks and Context API",
      "• Customize Calendar layout using pure react, Tailwind CSS, CSS3 ",
      "• Implement off days and holidays setup. ",
    ],
  },
];
export const Education = [
  {
    img: Iti,
    title: "Bachelor's Degree",
    major:"Electrical Engieering",
    place: "Institute of Business Management Karachi",
    date: "2020 - 2023",
   
  },
  {
    img: Upwork,
    title: "Intermediate",
    major:"Pre-Engieering",
    place: "GHSS DanoDandhal (District Tharparkar)",
    date: "2018 - 2019",

  },
  {
    img: Upwork,
    title: "Matriculation",
    major:"General Science",
    place: "GHSS DanoDandhal (District Tharparkar)",
    date: "2017",

  },
];

export const Projectss = [
  {
    img: amsFullCalendar,
    title: "Integrated Calendar Module in System",
    subTitle:
      `-Integrated Prototype into their main project
      -Prominently controlled single, multiple, and overlay calendar functionality via a custom header,
      -Created a versatile Scheduler wrapper used throughout the system, functioning like a library,
      -Enabled CRUD for events & Implemented API integration ,
      -CRUD operations for events
      -Implement event drag-and-drop functionality 
      -Added diverse calendar views,`,
    tech: [
      {
        name: "react",
        color: "#a1e9ff",
      },
    
      {
        name: "redux-toolkit",
        color: "#ffcc80",
      },
     
      
      {
        name: "mui",
        color: "#a5d6a7",
      },
      {
        name: "bootstrap",
        color: "#ffe082",
      },
      {
        name: "ant-design",
        color: "#a1e9ff",
      },
    ],
    demo: "https://docs.google.com/document/d/1YMptRU_hHH4beerWW3TUlyOvhxCdCjqTy9Sc7w8vNl0/edit",
    // github: "https://github.com/Nader-CS/parking-system",
  },
  {
    img: customCalendar,
    title: "Custom Calendar Prototype (Only desktop view)",
    subTitle:
      `-Working on the prototype of the Scheduler functionality,
      -View Multiple Calendar of every user simultaneously.
      -Overlay of Selected Multiple user's calendar .
      -Change Scheduler by respective user login (admin,user,team lead etc)
      -Off days setup`,
    tech: [
      {
        name: "react",
        color: "#a1e9ff",
      },
      {
        name: "material ui",
        color: "#ffc8ae",
      },
      {
        name: "Tailwind CSS",
        color: "#ffcc80",
      },
      {
        name: "Context API",
        color: "#a5d6a7",
      },
    ],
    demo: "https://custom-calendar-by-kishore.netlify.app/",
    github: "https://github.com/kishore1477/custom_react_calendar",
  },
  {
    img: restaurant,
    title: "Restaurant",
    subTitle:
      "Chatty is a dynamic chat web application that allows users to connect and communicate in real-time. It offers a range of features such as secure login/register system, real-time chatting, emojis, profile information editing, and a customizable dark mode and light mode.",
    tech: [
      {
        name: "react",
        color: "#a1e9ff",
      },
      {
        name: "mui",
        color: "#ffc8ae",
      },
      {
        name: "nodejs",
        color: "#ffcc80",
      },
      {
        name: "mongodb",
        color: "#a5d6a7",
      },
      {
        name: "Tailwind CSS",
        color: "#ffe082",
      },
    ],
    demo: "https://kishore-restaurant.netlify.app/",
    github: "https://github.com/kishore1477/restaurant_web",
  },



 

  {
    img: todoList,
    title: "To Do List",
    subTitle:
      "Apply CURD operation, where we can list down of tasks. ",
      tech: [
        {
          name: "react",
          color: "#a1e9ff",
        },
        {
          name: "Express",
          color: "#ffc8ae",
        },
        {
          name: "nodejs",
          color: "#ffcc80",
        },
        {
          name: "mongodb",
          color: "#a5d6a7",
        },
        {
          name: "Tailwind CSS",
          color: "#ffe082",
        },
      ],
    demo: "https://to-do-list-kishore.netlify.app/",
    github: "https://github.com/kishore1477/to-do-list",
  },
 
  {
    img: noteBook,
    title: "Note Book",
    subTitle:
      "This manage your notes, no one can see others one's note, it is completely secure by the JWT authentication, after login you can add, update and delete your note, your notes are also separated by the categories whatever you have provided while adding your notes, for example machine learning category contain only machine learning notes, web development category contain only web development notes etc.",
    tech: [
      {
        name: "react",
        color: "#a1e9ff",
      },
      {
        name: "Express",
        color: "#ffc8ae",
      },
      {
        name: "nodejs",
        color: "#ffcc80",
      },
      {
        name: "mongodb",
        color: "#a5d6a7",
      },
      {
        name: "Tailwind CSS",
        color: "#ffe082",
      },
    ],
    demo: "https://note-taking-app-frontend.vercel.app/",
    github: "https://github.com/kishore1477/Note-taking",
  },
  {
    img: whetherWebApp,
    title: "Whether Web App",
    subTitle:
      "In this project you can find out the current whether condition of the city , in which you get the temperature , pressure, humidity and wind speed. which is used the whether api of https://openweathermap.org/current",
    tech: [
      {
        name: "react",
        color: "#a1e9ff",
      },
      {
        name: "Tailwind CSS",
        color: "#ffcc80",
      },
     
    ],
    demo: "https://kishore1477.github.io/whetherapp/",
    github: "https://github.com/kishore1477/whetherapp",
  },
  
];
export const otherProjects = [
{
  name:"Chat Application",
  url:"https://chat-gray-mu.vercel.app/",
  gitUrl:"https://github.com/kishore1477/chat-app"
},
{
  name:"Text Case Converter",
  url:"https://kishore1477.github.io/text-case-contverter-react/",
  gitUrl:"https://github.com/kishore1477/text-case-contverter-react"
},
{
  name:"Form Validation",
  url:"https://kishore1477.github.io/form-validation-using-js-regx/",
  gitUrl:"https://github.com/kishore1477/form-validation-using-js-regx"
},
{
  name:"Resume Generator",
  url:"https://kishore1477.github.io/resume-generator/",
  gitUrl:"https://github.com/kishore1477/resume-generator"
},
{
  name:"Digital Clock",
  url:"https://kishore1477.github.io/digital-clock/",
  gitUrl:"https://github.com/kishore1477/digital-clock"
},
{
  name:"Analog Clock",
  url:"https://kishore1477.github.io/analog-clock/",
  gitUrl:"https://github.com/kishore1477/analog-clock"
},
{
  name:"Scientific Calculator",
  url:"https://kishore1477.github.io/scientific-caculator-javascript/",
  gitUrl:"https://github.com/kishore1477/scientific-caculator-javascript"
},
{
  name:"Currency Contverter",
  url:"https://kishore1477.github.io/currency-converter/",
  gitUrl:"https://github.com/kishore1477/currency-converter"
},

]
