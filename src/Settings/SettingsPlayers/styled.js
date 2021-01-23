import styled from "styled-components";
import trashBin from "./delete.png";
export const Players = styled.ul`
  margin: 20px;
  padding: 0 0 20px;
`;
export const PlayerBox = styled.li`
  display: grid;
  grid-template-columns: 1fr auto;
  border-bottom: 2px solid hsla(239, 94%, 9%, 0.8);
  margin: 0 auto;
`;
export const PlayerName = styled.span`
  margin: auto 0;
`;
export const RemovePlayerButton = styled.button`
  background-color: hsl(0, 100%, 40%);
  background-image: url(${trashBin});
  background-position: cover;
  width: 40px;
  height: 40px;
  margin: 10px;
  background-size: cover;
  border: none;
  transition: 0.25s;

  &:hover {
    background-color: hsl(0, 100%, 45%);
  }
`;
