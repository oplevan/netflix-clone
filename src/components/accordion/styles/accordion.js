import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 1.65rem;
  }
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 8px;
  width: 100%;

  &:first-of-type {
    margin-top: 3em;
  }

  @media only screen and (max-width: 600px) {
    max-width: 357px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  background-color: #303030;
  color: white;
  text-align: left;
  cursor: pointer;
  user-select: none;
  font-size: 1.625rem;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Body = styled.div`
  max-height: 1200px;
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  color: white;
  padding: 0.8em 2.2em 0.8em 1.2em;
  white-space: pre-wrap;
  user-select: none;
  margin-top: 1px;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
