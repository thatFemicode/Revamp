import styled from "styled-components";

export const HomeStyled = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  /* height: 100%; */
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.balls}) {
    flex-direction: column-reverse;
  }
  .avatar {
    @media (min-width: ${({ theme }) => theme.mins}) {
      width: 40%;
      margin-top: -6rem;
    }
    @media (max-width: ${({ theme }) => theme.mins}) {
      width: 40%;
      margin-top: -14rem;
      align-self: center;
    }
    @media (max-width: ${({ theme }) => theme.balls}) {
      margin-top: unset;
      /* width: 100%; */
    }
  }
  .home-text {
    @media (max-width: ${({ theme }) => theme.mins}) {
      flex: 2 0 70%;
    }
  }
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    @media (max-width: ${({ theme }) => theme.mins}) {
      font-size: 2rem;
    }
    @media (min-width: ${({ theme }) => theme.big}) {
      font-size: 5rem;
    }
    @media (max-width: ${({ theme }) => theme.avatar}) {
      font-size: 1.9rem;
    }
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    @media (max-width: ${({ theme }) => theme.mins}) {
      font-size: 1.5rem;
    }
    @media (min-width: ${({ theme }) => theme.big}) {
      font-size: 4rem;
    }
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
  p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    @media (min-width: ${({ theme }) => theme.big}) {
      font-size: 1.5rem;
    }
  }
  .icon-text {
    .icons {
      .icon {
        display: flex;
        align-items: center;
        padding: 0.1rem 0;
        p {
          padding-left: 1rem;
          margin-top: 0.8rem;
        }
      }
    }
  }
  .social {
    margin-top: 1rem;
    position: relative;

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
  .lines {
    position: absolute;
    width: 100%;
    top: -40rem;
    left: 0;
    z-index: -1;

    @media (max-width: ${({ theme }) => theme.avatar}) {
      top: -20rem;
    }
    @media (max-width: ${({ theme }) => theme.balls}) {
      top: 0rem;
    }
  }
`;
