import styled from "styled-components";

export const TabsStyled = styled.div`
  border-radius: 5px;
  padding: 2.5rem 2rem;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 3rem;
  height: 100%;
  width: 100%;
  overflow: auto;

  .btn-con {
    grid-column: 1 / 2;
    display: flex;
    height: 350px;
    position: relative;
    /* top: 50%; */
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(
      117.76deg,
      rgba(255, 255, 255, 0.7) -7.21%,
      rgba(255, 255, 255, 0.5) 118.08%
    );
    backdrop-filter: blur(9px);
    border-radius: 5px;
    .tabs-btn {
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      /* align-self: flex-start; */
      text-align: left;
      transition: all 1s ease-in-out;
    }
  }
  .details-con {
    background: linear-gradient(
      117.76deg,
      rgba(255, 255, 255, 0.7) -7.21%,
      rgba(255, 255, 255, 0.5) 118.08%
    );
    backdrop-filter: blur(9px);
    overflow: hidden;
    grid-column: 2 / 8;
    /* background: linear-gradient(
      117.76deg,
      rgba(255, 255, 255, 0.7) -7.21%,
      rgba(255, 255, 255, 0.5) 118.08%
    ); */
    /* backdrop-filter: blur(9px); */
    padding: 2rem;
    border-radius: 5px;
    max-height: 70vh;
    overflow: auto;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .home-logo {
    position: absolute;
    bottom: -2rem;
    right: 70px;
    @media (min-width: ${({ theme }) => theme.max}) {
      right: 50px;
    }
    @media (max-width: ${({ theme }) => theme.dont}) {
      right: 0;
    }
    svg {
      width: 40%;
    }
  }
`;
