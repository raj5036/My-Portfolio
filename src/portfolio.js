/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Raj karmakar",
  title: "Hi all, I'm Raj",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / ExpressJS / NextJS and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1PqZmv1zXKO6RP0943gy_3s36znjADbvS/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/raj5036",
  linkedin: "https://www.linkedin.com/in/rajkarmakar97/",
  gmail: "97rajmath@gmail.com",
  gitlab: "https://gitlab.com/97rajmath",
  facebook: "https://www.facebook.com/profile.php?id=100051666783030",
  medium: "https://medium.com/@97rajmath",
  stackoverflow: "https://stackoverflow.com/users/9382132/raj-karmakar",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Hooghly Engineering And Technology College",
      logo: require("./assets/images/hetc_logo.png"),
      subHeader: "Bachelor of Computer Science",
      duration: "August 2017 - June 2021",
      desc: "Participated in the College TechFest and other activities",
      descBullets: [
        "Completed Bachelors Degree with CGPA of 8.25",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend(React/Redux)", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend(NodeJS/ExpressJS)",
      progressPercentage: "90%"
    },
    {
      Stack: "Git",
      progressPercentage: "80%"
    },
    {
      Stack: "SQL-Databases",
      progressPercentage: "100%"
    },
    {
      Stack: "No-SQL Databases (MongoDB)",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "SDE-1",
      company: "Kommunicate",
      companylogo: require("./assets/images/komm_logo_2.png"),
      date: "October 2021 – Present",
     // desc: "Worked on multiple micro-services i.e, Kommunicate-server, Kommunicate-omni-channel, Kommunicate-bot-server etc. and developed multiple features to enhance the product overall",
      descBullets: [
        "Added feature for integrating Zendesk-Sunshine with Kommunicate and developed end-to-end messaging flow",
        "Created OTT Finder bot, that gives links to the shows/movies asked for. Other than Kommunicate’s Chat-SDK, it works on WhatsApp too.",
        "Added and modified UI components using React.JS, redux and CSS/Styled-components.",
        "Debugging existing feature bugs, co-ordinate with Product and QA team in feature lifecycle."
      ],
      // backgroundColor: "red"
    },
    {
      role: "Full-Stack Engineer Intern",
      company: "Awiros",
      companylogo: require("./assets/images/awiros_new_logo.jpg"),
      date: "May 2021 – August 2021",
     // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Identified web-based user interactions, developed highly responsive user interface components via React Concepts.",
        "Translated designs and wireframes into high quality code and wrote application interface code via JavaScript following React.JS workflows.",
        "Implemented server-side logic for users to annotate images and search/store/fetch relative data for the corresponding images, classes etc. using NodeJS/ExpressJS and MongoDB."
      ],
      // backgroundColor: "red",
      companyTitleColor: "black"
    },
    {
      role: "Backend Engineer Intern",
      company: "Webingo Infotech Solutions",
      companylogo: require("./assets/images/webingo.png"),
      date: "Jan 2020 – March 2020",
     // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      // backgroundColor: "red",
      descBullets: [
        "Worked on creating rich and interactive backend supported webapps for the clients, that uses PHP and MySQL as server and DB. The goal was to provide optimal user experiences across all user levels (Admin/Premium users/Normal Users).",
        "Developed a paginated members’ list with support for member management (promote/demote/remove) and server-side search to find and manage people in large groups (For a Fintech Company)."
      ],
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/covid19_tracker.jpg"),
      imageClass: "covid-tracker-image",
      projectName: "Covid19 Tracker App",
      projectDesc: `An application that displays all the Covid19 cases worldwide and track the Infected/Recovered/Death cases
      country-wise, visitors can visualize live Covid cases both with Maps and Graphs.`,
      footerLink: [
        {
          name: "Visit Website",
          url: "https://raj5036.github.io/react-covid-tracker/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/admin-control-panel-flat-illustration.jpg"),
      imageClass: "admin-control-panel-image",
      projectName: "Admin Control Panel",
      projectDesc: `An admin control panel supported blogging application where regular users/subscribers can post (CRUD
        supported) blogs after registering themselves to the service. Admins can review the users, their posts/blogs
        and comments and publish or delete them accordingly.`,
      footerLink: [
        {
          name: "GitHub Link",
          url: "https://github.com/raj5036/admin-control-panel"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://csmadeezy.blogspot.com/2020/04/software-engineering-or-devops-what-to.html",
      title: "SOFTWARE ENGINEERING OR DEVOPS ? WHAT TO CHOOSE IN 2020?",
      description:
        "Today's technology world is shifting so fast and so rapidly that Beginners especially the New-Grads seem to be really confused about what career path to choose?So Let's dive into a deeper analysis and see what works for you?"
    },
    {
      url: "https://csmadeezy.blogspot.com/2020/05/deno-future-of-backend.html",
      title: "DENO: THE FUTURE OF BACKEND?",
      description:
        "In simple words, Deno is a secure runtime environment for JavaScript and TypeScript. Like Node.Js Deno also uses V8. You can consider Deno as a worthy successor of Node.Js"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8250351900",
  email_address: "97rajmath@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "RajKarm42837213", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
