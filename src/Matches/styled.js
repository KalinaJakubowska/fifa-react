import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  background-color: hsl(239, 94%, 19%);
  border: 2px solid hsl(239, 94%, 9%);
  border-radius: 4px;
  box-shadow: 0 0 5px 2px hsl(239, 94%, 11%);

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }
`;

export const ButtonsContainer = styled(Container)`
  grid-template-columns: unset;
  max-width: 500px;
  padding: 5px;
`;

export const MatchesList = styled.div`
  box-shadow: 0 0 5px 2px hsl(239, 94%, 11%);
  background-color: hsl(239, 94%, 13%);
  max-height: 550px;
  overflow-y: auto;

  @media (max-width: 767px) {
    max-height: 300px;
  }
`;
