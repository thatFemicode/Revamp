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
    url: "",
    git: git,
    image: Express,
  },
  {
    id: 2,
    name: "Baradel Designo",
    body:
      "A fictional travel website, design inspiration was gotten from Frontend mentor as a challenge",
    tools: ["HTML", "SASS", "JS", "GSAP"],
    url: "",
    git: git,
    image: Bar,
  },
  {
    id: 3,
    name: "Rest Countries ",
    body:
      "A countries project leveraging an api to fetch information about countries in the world, design inspiration was gotten from frontend mentor",
    tools: ["React", "SASS"],
    url: "",
    git: git,
    image: Res,
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
    url: "",
    git: git,
    image: NBA,
  },
];

export default content;
