import styled from "styled-components";

export const AboutStyled = styled.section`
  background: linear-gradient(
    117.76deg,
    rgba(255, 255, 255, 0.7) -7.21%,
    rgba(255, 255, 255, 0.5) 118.08%
  );
  backdrop-filter: blur(9px);
  margin-top: 1rem;
  padding: 1rem 1.5rem;
  position: relative;
  overflow: hidden;
  border-radius: 0.4rem;

  P {
    text-align: justify;
    line-height: 1.6;
    &:not(:last-of-type) {
      margin-bottom: 0.5rem;
    }
  }
  /* .line {
    position: absolute;
    width: 40%;
  } */
`;
