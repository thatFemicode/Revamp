import styled from "styled-components";

export const ProjectStyled = styled.section`
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

  .projects {
    margin-top: 1rem;
    /* background: linear-gradient(
      117.76deg,
      rgba(255, 255, 255, 0.7) -7.21%,
      rgba(255, 255, 255, 0.5) 118.08%
    );
    backdrop-filter: blur(9px); */
    display: grid;
    grid-template-columns: 1fr;
    /* padding: 1rem; */
    border-radius: 5px;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }
`;
