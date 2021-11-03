import styled from "styled-components";

export const DesktopStyled = styled.main`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  padding: 4rem 5rem;

  @media screen and (min-height: 500px) and (max-height: 900px) {
    height: unset;
    overflow: unset;
  }
`;
