import styled from 'styled-components/macro';

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;

  @media only screen and (max-width: 949px) and (min-width: 550px),
    only screen and (max-width: 1449px) and (min-width: 950px),
    only screen and (min-width: 1450px) {
    padding: 70px 45px;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  margin: auto;
  width: 100%;
  max-width: 1100px;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  @media only screen and (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

export const Pane = styled.div`
  width: 50%;
  position: relative;
  box-sizing: border-box;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    max-width: 600px;
    padding: 0 45px;
    text-align: center;
  }

  @media only screen and (max-width: 849px) {
    padding: 0;
  }
`;

export const Title = styled.h1`
  font-size: 45px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media only screen and (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: normal;
  line-height: normal;

  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  position: relative;
  z-index: 2;
`;

export const Animation = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const Video = styled.video`
  max-width: 100%;
  max-height: 100%;
`;
