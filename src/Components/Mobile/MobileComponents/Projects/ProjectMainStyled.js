import styled from "styled-components";

export const ProjectMainStyled = styled.div`
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  /* transition: all 1.5s ease-in-out; */
  color: #292524;
  background: linear-gradient(
    117.76deg,
    rgba(255, 255, 255, 0.7) -7.21%,
    rgba(255, 255, 255, 0.5) 118.08%
  );
  backdrop-filter: blur(9px);
  /* background-color: ${({
    bgColor,
    bgColor2,
    bgColor3,
    bgColor4,
    bgColor5,
  }) => bgColor || bgColor3 || bgColor2 || bgColor4 || bgColor5}; */
  backdrop-filter: blur(9px);
  a {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    margin-bottom: 0.4rem;

    img {
      margin-right: 1rem;
    }
  }
  .live {
    width: 5rem;
  }
  h1 {
    margin-bottom: 0.4rem;
  }
  p {
    text-align: justify;
    line-height: 1.5;
    margin-bottom: 0.4rem;
  }
  /* &:hover {
    transform: scale(1.1);
  } */
`;
