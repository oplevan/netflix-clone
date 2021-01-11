import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;

  ${({ footerSignUpLogin }) =>
    footerSignUpLogin
      ? `
    background: rgba(0,0,0,.75);
    `
      : ``}

  @media (max-width: 739px) {
    padding: 0 4%;
  }
`;

export const Divider = styled.div`
  @media only screen and (max-width: 739px) {
    width: 100%;
    height: 0;
    border-top: 1px solid #737373;
  }
`;

export const Frame = styled.div`
  margin: auto;
  max-width: 980px;
  width: 90%;
  box-sizing: border-box;

  ${({ smallPadding }) =>
    smallPadding ? `padding: 15px 0;` : `padding: 70px 4%;`}

  @media only screen and (max-width: 749px) {
    padding: 15px 0;
  }
`;

export const Top = styled.h3`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  max-width: 1000px;
`;

export const ListItem = styled.li`
  list-style: none;
  margin-left: 0;
  box-sizing: border-box;
  padding: 0;
  margin-bottom: 16px;
  display: inline-block;
  min-width: 100px;
  width: 25%;
  padding-right: 12px;
  vertical-align: top;

  @media (max-width: 740px) {
    width: 33%;
  }

  @media (max-width: 500px) {
    width: 50%;
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Country = styled.p`
  font-size: 13px;
  color: #757575;
  margin-top: 24px;
`;
