import styled from "styled-components";

export const PersonalStyled = styled.section`
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
  display: grid;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 1rem;
  }
  h2 {
    text-align: center;
  }
  p {
    text-align: justify;
    line-height: 1.6;
    margin-bottom: 1rem;

    &:nth-child(1) {
      margin-top: 0;
    }
  }
  .icon {
    display: flex;
    align-items: center;
    /* padding: 0.5rem 0; */
    p {
      padding-left: 1rem;
      margin-top: 1rem;
    }
  }

  /* .svgs {
    position: relative;
    display: flex;
    align-items: center;
    right: -50%;
    height: 100px;
  } */
  .socials {
    /* display: flex; */
    /* flex-direction: row; */

    li {
      display: inline-block;
      margin-top: 1rem;
      &:not(:last-of-type) {
        margin-right: 1rem;
      }
    }
  }
  /* .skill-con {
    h4 {
      padding-bottom: 2rem;
    }
    background: linear-gradient(
      117.76deg,
      rgba(255, 255, 255, 0.7) -7.21%,
      rgba(255, 255, 255, 0.5) 118.08%
    );
    backdrop-filter: blur(8px);
    padding: 2.5rem 2rem;
    border-radius: 15px;
    .skill {
      padding: 0.8rem 1rem;
      color: white;
      border-radius: 15px;
      margin: 1.4rem 0;
      .skills-btn {
        display: grid;
        grid-template-columns: 20px 200px;
        span:first-child {
          width: 10%;
        }
      }
    }
  } */
`;
