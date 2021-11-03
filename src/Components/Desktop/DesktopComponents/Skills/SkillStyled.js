import styled from "styled-components";

export const SkillStyled = styled.div`
  p {
    font-size: 1.1rem;
    text-align: justify;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
  .skill-con {
    @media (min-width: ${({ theme }) => theme.balls}) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    @media (min-width: ${({ theme }) => theme.kobe}) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
  }
  .lines {
    position: absolute;
    width: 100%;
    top: -40rem;
    left: 0;
    z-index: -1;
  }
`;
