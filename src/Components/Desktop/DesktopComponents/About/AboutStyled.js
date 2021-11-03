import styled from "styled-components";

export const AboutStyled = styled.div`
  padding: 1.3rem; /* position: relative; */ /* height: 90vh; */
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
    z-index: 400;
  }
  .lines {
    position: absolute;
    width: 20%;
    left: 0;
    top: 0;
    z-index: -400;
  }
`;
