import styled from "styled-components";

export const HomeStyled = styled.section`
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

  .lines {
    position: absolute;
    width: 100%;
    top: -17rem;
    left: 0;
  }
  .home-top {
    position: relative;
  }
  .btn {
    border-radius: 3px;
    padding: 0.6rem 1rem;
    border: none;
    outline: none;
    background-color: #292524;
    color: #fff;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 0.8rem;
  }
  .home-logo {
    position: absolute;
    bottom: 0;
    right: 0;
    @media (min-width: ${({ theme }) => theme.max}) {
      right: -60px;
    }
    svg {
      width: 30px;
    }
  }
  .icon-text {
    .icons {
      .icon {
        display: flex;
        align-items: center;
        padding: 0.5rem 0;
        p {
          padding-left: 1rem;
          margin-bottom: unset;
          /* margin-top: 1rem; */
        }
      }
    }
  }

  .social {
    margin-top: 1rem;
    position: relative;
    margin-bottom: 1rem;
    &-link {
      display: inline-block;

      a {
        // font-size: 1rem;
      }

      &:not(:last-of-type) {
        margin-right: 2.5rem;
      }
    }
  }
`;
