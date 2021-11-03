import styled from "styled-components";

export const LoadingStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .svg {
    @media (max-width: 520px) {
      width: 30%;
    }
  }
  .logo {
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-dasharray: 1500;
    stroke-dashoffset: 1500;
    animation: dash 5s linear alternate infinite;
  }
`;
