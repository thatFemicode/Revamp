import styled from "styled-components";

export const SkillStyled = styled.section`
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
  .home-logo {
    position: absolute;
    bottom: -40px;
    right: -50px;
    @media (min-width: ${({ theme }) => theme.max}) {
      right: -60px;
    }
    svg {
      width: 40%;
    }
  }
  p {
    margin-bottom: 1rem;
    text-align: justify;
    white-space: pre-line;
    line-height: 1.6;
  }
  .skill-con {
    @media (min-width: ${({ theme }) => theme.min}) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }
`;
