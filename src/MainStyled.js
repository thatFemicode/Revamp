import { keyframes } from "styled-components";
import styled from "styled-components";

export const MainStyled = styled.main`
  position: relative;

  .wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    overflow: hidden;
    @media (max-width: ${({ theme }) => theme.main}) {
      display: none;
    }
  }
  .box {
    div {
      position: absolute;
      border: 2px solid #292524;
      background-color: transparent;
      width: 60px;
      height: 60px;
      top: 12%;
      left: 42%;
      &:nth-child(1) {
        top: 12%;
        left: 42%;
        animation: animate 10s linear infinite;
      }
      &:nth-child(2) {
        top: 70%;
        right: 10%;
        animation: animate 7s linear infinite;
      }
      &:nth-child(3) {
        top: 17%;
        left: 6%;
        animation: animate 7s linear infinite;
      }
      &:nth-child(4) {
        top: 20%;
        right: 10%;
        animation: animate 10s linear infinite;
      }
      &:nth-child(5) {
        top: 67%;
        left: 10%;
        animation: animate 6s linear infinite;
      }
      &:nth-child(6) {
        top: 80%;
        left: 20%;
        animation: animate 6s linear infinite;
      }
      &:nth-child(7) {
        top: 60%;
        left: 80%;
        animation: animate 15s linear infinite;
      }
      &:nth-child(8) {
        top: 32%;
        left: 25%;
        animation: animate 16s linear infinite;
      }
      &:nth-child(9) {
        top: 90%;
        left: 10%;
        animation: animate 9s linear infinite;
      }
      &:nth-child(10) {
        top: 20%;
        left: 80%;
        animation: animate 12s linear infinite;
      }
    }
  }
  @keyframes animate {
    0% {
      transform: scale(0) translateY(0) rotate() 0;
      opacity: 1;
    }
    100% {
      transform: scale(1.3) translateY(-90px) rotate(360deg);
      opacity: 0;
    }
  }

  .desktop {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    @media (max-width: ${({ theme }) => theme.main}) {
      display: none;
    }
    @media screen and (min-height: 500px) and (max-height: 900px) {
      height: unset;
      overflow: unset;
    }
  }
  .mobile {
    @media (min-width: ${({ theme }) => theme.main}) {
      display: none;
    }
  }
`;
