import { createGlobalStyle } from "styled-components";
import bg from "../src/img/bg.svg";
const GlobalStyle = createGlobalStyle`
:root{
    
}
*{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    text-decoration: none;
}
body{
  min-height: 100vh;
  background: url(${bg});
  background-position: center;
  background-repeat:no-repeat;
  background-size: cover;
  overflow-x: hidden;
    /* background-color: #000; */
    /* color: #222260; */
    color:#292524;    
    -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
}
img{
    max-width: 100%;
}
a{
text-decoration: none;
color:inherit;
}
li{
    list-style: none
}
.no-scroll{
  height:100vh;
  overflow:hidden;
}
.load-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 10;
  pointer-events: none;
}
.active-btn{
   transform: scale(1.1);
}
.load-screen {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    117.76deg,
    rgba(255, 255, 255, 0.7) -7.21%,
    rgba(255, 255, 255, 0.5) 118.08%
  );
  backdrop-filter: blur(9px);
  /* background-color: #fff; */
  width: 0%;
  height: 100vh;
  svg 
  {
opacity:0;
position: absolute;
width:400px;
height:400px;
left:50%;
transform:translateX(-50%);

@media screen and (max-width:450px){
  width:200px;
  height:200px;
  /* transform:translateX(-60%); */
}
@media screen and (max-width:376px){
  width:150px;
  height:150px;
  /* transform:translateX(-40%); */
}

  path{
    fill-opacity:0;
    stroke-width:10;
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-dasharray: 1500;
    transform-origin:50% 50%;
  }
}
}
.load-screen1 {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #fff;
  width: 100%;
  height: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.load-screen2 {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #ce1141;
  width: 100%;
  height: 0%;
}
.load-screen3 {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #552583;
  width: 0%;
  height: 100%;
}
.svg{
  @media (max-width: 520px) {
     width:50%;
    }
}
.logo{
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke-dasharray: 1500;
  stroke-dashoffset: 1500;
  animation: dash 5s linear alternate infinite;
}


.Headd {
  opacity: 0;
  pointer-events: none;
}

`;
export default GlobalStyle;
