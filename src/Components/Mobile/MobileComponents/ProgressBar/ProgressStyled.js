import styled from "styled-components";

export const ProgressStyled = styled.div`
  margin-bottom: 1.2rem;
  .skill {
    display: flex;
    align-items: center;
    .image {
      width: 60px;
      img {
        width: 100%;
      }
    }
  }
  .progress-con {
    flex: 1;
    padding-left: 1.5rem;
    p {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .progress-bar {
      width: 100%;
      height: 0.6rem;
      background-color: white;
      border-radius: 15px;
      .progress {
        height: 100%;
        border-radius: 15px;
      }
    }
  }
`;
