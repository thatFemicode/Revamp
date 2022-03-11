import "./App.css";
import MainMobile from "./Components/Mobile/MainMobile";
import Desktop from "./Components/Desktop/Desktop";
import { ThemeProvider } from "styled-components";
import { MainStyled } from "./MainStyled";
import { useRef, useEffect } from "react";
import itemAnim from "./itemAnimation";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  adapt: "399px",
  se: "330px",
  teams: "350px",
  foot: "375px",
  max: "400px",
  blogNav: "610px",
  min: "540px",
  make: "548px",
  mobile: "500px",
  desktop: "768px",
  player: "751px",
  dont: "1024px",
  main: "850px",
  balls: "930px",
  post: "940px",
  avatar: "1050px",
  kobe: "1200px",
  mind: "1100px",
  mins: "1300px",
  minsx: "1280px",
  minss: "1500px",
  team: "1700px",
  big: "1900px",
  img: "1201px",
};

function App() {
  // Refs for loader animation
  let screen = useRef(null);
  let body = useRef(null);
  let svg = useRef(null);
  let path = useRef(null);
  // let logo = useRef(null);
  useEffect(() => {
    itemAnim(screen, svg, path, body);
  }, []);
  return (
    <>
      <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="svg"
            viewBox="0 0 250 250"
            // width="55"
            // height="55.573"
            ref={(el) => (svg = el)}
          >
            <path
              ref={(el) => (path = el)}
              className="logo"
              fill="none"
              stroke="#000000"
              d="m 15.625507,46.199537 55.767886,-32.030352 55.623047,32.281229 -0.14485,64.311586 0.14485,-64.311586 55.76788,-32.030352 55.62305,32.281229 -0.14485,64.311579 -55.76788,32.03036 -55.62305,-32.28123 55.62305,32.28123 -0.14485,64.31158 -55.76788,32.03035 L 70.958866,207.10393 71.103708,142.79235 126.87159,110.762 71.103708,142.79235 15.480664,110.51112 Z"
            />
          </svg>
        </div>
      </div>
      <ThemeProvider theme={theme}>
        <div data-barba="container" ref={(el) => (body = el)} className="Headd">
          <MainStyled>
            <div className="wrapper">
              <div className="box">
                <div className="div"></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="desktop">
              <Desktop />
            </div>
            <div className="mobile">
              <MainMobile />
            </div>
          </MainStyled>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
