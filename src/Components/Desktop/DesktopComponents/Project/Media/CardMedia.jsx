import styled from "styled-components";

export const CardImage = styled.div`
  background-image: url(${({ bg }) => bg});
  display: block;
  height: 0;
  padding-top: 40.25%;
  background-color: rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: darken;
  transition: all 10s ease-in-out;

  &:hover {
    background-size: 120%;
    /* transform: scale(1.5); */
    transition: all 3s ease-in;
  }
`;
