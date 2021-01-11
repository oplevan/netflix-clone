import styled from 'styled-components/macro';

export const Container = styled.div`
  display: block;
  z-index: 1;
  position: relative;
  width: 100%;
  height: auto;
  background: black;

  &:after {
    content: '';
    position: absolute;
    z-index: 8;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    background-image: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0) 0,
      rgba(20, 20, 20, 0.15) 15%,
      rgba(20, 20, 20, 0.35) 29%,
      rgba(20, 20, 20, 0.58) 44%,
      #141414 68%,
      #141414 100%
    );
    -webkit-background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    background-size: 100% 100%;
    background-position: 0 top;
    background-repeat: repeat-x;
    background-color: transparent;
    width: 100%;
    height: 14.7vw;
    top: auto;
    bottom: -1px;
    opacity: 1;
  }
`;

export const Row = styled.div`
  position: relative;
`;

// FEATURE
export const Info = styled.div`
  position: absolute;
  top: 15%;
  bottom: 35%;
  left: 3%;
  width: 36%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const Logo = styled.div`
  min-height: 13.2vw;
  margin-bottom: 1.5rem;
`;

export const LogoImg = styled.img`
  width: 90%;
`;

export const Msg = styled.div`
  font-size: 1.6vw;
  font-weight: 600;
  margin-bottom: 1vw;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Description = styled.div`
  line-height: normal;
  font-weight: 400;
  font-size: 1.4vw;
  margin-right: 1rem;
`;
export const Links = styled.div`
  margin-top: 1.5vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0.75vw;
  line-height: 88%;
`;
export const PlayBtn = styled.button`
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 0.6vw 2.2vw 0.6vw 1.8vw;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.2vw;
  cursor: pointer;
  transition: background-color 0.5s ease;
  display: flex;
  justify-content: center;
  gap: 10px;

  & svg {
    height: 2vw;
    width: 2vw;
  }

  & span {
    line-height: 2.1vw;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }
`;
export const MoreInfoBtn = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background: rgba(109, 109, 110, 0.8);
  color: white;
  border-width: 0;
  padding: 0.6vw 1.6vw;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.4vw;
  cursor: pointer;
  transition: background-color 0.5s ease;
  display: flex;
  justify-content: center;
  gap: 10px;

  &:focus {
    border: none;
    outline: none;
  }

  & svg {
    height: 2vw;
    width: 2vw;
  }

  & span {
    line-height: 2.1vw;
  }

  &:hover {
    background: rgba(109, 109, 110, 0.4);
  }
`;

// MOTION
export const Trailer = styled.div`
  background-image: url(https://assets.nflxext.com/ffe/siteui/akira/fallback/spotlight_gradient.png);
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  z-index: 1;
`;

export const Poster = styled.img`
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  opacity: 1;
`;
