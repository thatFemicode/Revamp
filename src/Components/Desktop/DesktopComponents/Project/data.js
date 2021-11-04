import git from "./git.svg";
import Bar from "./Bar.jpg";
import Res from "./Res.jpg";
import Express from "./Express.png";
import NBA from "./NBA.png";
const content = [
  {
    id: 1,
    name: "Express Bank",
    body:
      "A fictional minimalist bank app built using array methods, and pure functions, leverages 3rd party api to get location providing weather update and giving time to app users when in use, Webapp follows principles of an SPA. A mini backend for authentication is done but using array methods. Design inspiration by me",
    tools: ["HTML", "SASS", "JS", "GSAP"],
    url: "https://express-bank.netlify.app/",
    git: git,
    image: Express,
    gitUrl: "https://github.com/thatFemicode/Express-bank-app",
  },
  {
    id: 2,
    name: "Baradel Designo",
    body:
      "A fictional travel website, design inspiration was gotten from Frontend mentor as a challenge",
    tools: ["HTML", "SASS", "JS", "GSAP"],
    url: "https://baradeldesigno.netlify.app/",
    git: git,
    image: Bar,
    gitUrl: "https://github.com/thatFemicode/Baradel-Designo-Project",
  },
  {
    id: 3,
    name: "Rest Countries ",
    body:
      "A countries project leveraging an api to fetch information about countries in the world, design inspiration was gotten from frontend mentor",
    tools: ["React", "SASS"],
    url: "https://restcountryapiproject.netlify.app",
    git: git,
    image: Res,
    gitUrl: "https://github.com/thatFemicode/Rest-Country-API",
  },
  {
    id: 4,
    name: "NBA BLOG APP",
    body:
      "Blog website built to connect nba lovers together and discuss about their favorite players, uses Redux for state management, Nodejs(Express Fw) for backend and Mongodb as sql database. Design inspiration by me",
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
];

export default content;
