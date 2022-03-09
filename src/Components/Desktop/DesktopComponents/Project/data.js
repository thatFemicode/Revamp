import git from "./git.svg";
import Bar from "./Bar.jpg";
import Res from "./Res.jpg";
import Express from "./Express.png";
import NBA from "./NBA.png";
import Tracker from "./Tracker.png";
import Bmi from "./Bmi.png";
import Warriors from "./Warriors.png";
const content = [
  // {
  //   id: 1,
  //   name: "Express Bank",
  //   body:
  //     "A fictional minimalist bank app built using array methods, and pure functions, leverages 3rd party api to get location providing weather update and giving time to app users when in use, Webapp follows principles of an SPA. A mini backend for authentication is done but using array methods. Design inspiration by me",
  //   tools: ["HTML", "SASS", "JS", "GSAP"],
  //   url: "https://express-bank.netlify.app/",
  //   git: git,
  //   image: Express,
  //   gitUrl: "https://github.com/thatFemicode/Express-bank-app",
  // },
  {
    id: 1,
    name: "Expense Tracker",
    body:
      "Expense tracker used to monitor finances, uses context api for state management, Nodejs(Express) for backend and Mongodb as sql database. Design inspiration by me  ",
    tools: [
      "React",
      "Stlyed Components",
      "GSAP",
      "NodeJs",
      "Context Api",
      "Express",
      "MongoDb",
    ],
    url: "https://expense-history-tracker.netlify.app/",
    git: git,
    image: Tracker,
    gitUrl: "https://github.com/thatFemicode/Mini-Expense-Tracker-MERN-",
  },
  {
    id: 2,
    name: "Baradel Designo",
    body:
      "A fictional travel website, design inspiration was gotten from Frontend mentor as a challenge",
    tools: ["HTML", "SASS", "JS"],
    url: "https://baradeldesigno.netlify.app/",
    git: git,
    image: Bar,
    gitUrl: "https://github.com/thatFemicode/Baradel-Designo-Project",
  },
  {
    id: 3,
    name: "Golden State Warriors ",
    body:
      "A Landing page dedicated to the Golden state warriors paying respect to past accomplishment and looking at the future",
    tools: ["React", "Stlyed Components", "GSAP"],
    url: "https://goldenstate.netlify.app/",
    git: git,
    image: Warriors,
    gitUrl: "https://github.com/thatFemicode/Gallery-GSW",
  },
  {
    id: 4,
    name: "NBA BLOG APP",
    body:
      "Blog website built to connect nba lovers together and discuss about their favorite players, uses Redux for state management, Nodejs(Express) for backend and Mongodb as sql database. Design inspiration by me",
    tools: [
      "React",
      "Stlyed Components",
      "GSAP",
      "NodeJs",
      "Redux",
      "Express",
      "MongoDb",
    ],
    url: "https://nbaapp.netlify.app/",
    git: git,
    image: NBA,
    gitUrl: "https://github.com/thatFemicode/NBA-BLOG-WEBSITE",
  },
  {
    id: 4,
    name: "BMI Calculator",
    body:
      "A bmi calculator used to calculate body mass index for individuals, uses the metric system for its measurement and local storage to persists data ",
    tools: ["React", "Stlyed Components", "GSAP"],
    url: "https://expressbmicalculator.netlify.app/",
    git: git,
    image: Bmi,
    gitUrl: "https://github.com/thatFemicode/BMI-calculator",
  },
];

export default content;
