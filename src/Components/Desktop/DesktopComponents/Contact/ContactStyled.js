import styled from "styled-components";

export const ContactStyled = styled.div`
  h1 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;

    &:nth-child(1) {
      margin-top: 0;
    }
  }
  .lines {
    position: absolute;
    width: 20%;
    left: 0;
    top: 0;
    z-index: -400;
  }
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
  .icon {
    display: flex;
    align-items: center;
    /* padding: 0.5rem 0; */
    p {
      padding-left: 1rem;
      margin-top: 1rem;
    }
  }
`;
