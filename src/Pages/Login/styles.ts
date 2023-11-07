import styled, { css } from "styled-components";
interface propsInputAuth {
  error: string;
}

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex: row;
`;
export const Img = styled.img`
  width: 30vw;
`;
export const LeftSide = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const RightSide = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-left: 12.5vw;
  box-sizing: border-box;
`;
export const AnimatedRightSide = styled(LeftSide)`
  animation: slideIn 1s ease-in-out forwards;
  @keyframes slideIn {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
export const Title = styled.h1`
  color: #333;
  font-family: Roboto, Arial;
  font-size: 40px;
  margin: 12px;
  margin-left: 0;
`;
export const Subtitle = styled.h2`
  color: #999;
  font-family: Roboto, Arial;
  font-size: 16px;
  font-weight: 300;
  margin: 8px;
  margin-left: 0;
  margin-right: 16px;

  a {
    color: #7f56da;
    font-weight: bold;

    &:hover {
      color: #613db7;
      cursor: pointer;
    }
  }
`;

export const KeepSigned = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 16px;
`;
export const IconsPasswordWrapper = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-150%);
  cursor: pointer;
`;
