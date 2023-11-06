import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex: row;
  justify-content: center;
  background-color: #f5f5f5;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow-x: hidden;
  overflow-y: scroll;
`;
export const MainWrapper = styled.div`
  height: 100vh;
  width: 82vw;
`;
export const Header = styled.h1`
  font-size: 40px;
  font-weight: 400;
  color: #555;
  margin: 16px;
`;

export const TitleAndFilter = styled.div`
  height: 20px;
  width: 70vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 4px;
`;

export const Title = styled.h3`
  font-size: 24px;
  color: #555;
`;

export const FilterField = styled.div`
  height: 20px;
  display: flex;
  justify-content: center;
`;

export const FilterIcon = styled.img`
  height: 20px;
  margin: 0 8px;
`;
