import styled, { css } from "styled-components";

export const MatchBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  list-style: none;
  padding: 10px;
  border-bottom: 2px solid hsla(239, 94%, 9%, 0.8);
  margin: 0;
  min-height: 60px;
  cursor: pointer;
  background-color: hsl(239, 94%, 13%);

  &:hover {
    background-color: hsl(239, 94%, 15%);
  }

  ${({ selected }) =>
    selected &&
    css`
      cursor: unset;
      background-color: hsl(239, 94%, 15%);
    `}
`;
const MatchItem = styled.div`
  text-align: center;
  align-self: center;
`;
export const MatchVS = styled(MatchItem)`
  font-weight: 700;
  color: hsl(201, 100%, 36%);
  text-shadow: 0px 0px 1px #fff;
  font-size: 18px;
`;
export const MatchGoal = styled(MatchItem)`
  font-size: 20px;
  font-weight: 700;
  padding: 0;
`;
const MatchPlayer = styled(MatchItem)`
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const MatchFirstPlayer = styled(MatchPlayer)`
  text-align: left;
`;
export const MatchSecondPlayer = styled(MatchPlayer)`
  text-align: right;
`;
