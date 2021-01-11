import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 450px;
  padding: 0 5%;
  color: white;

  @media only screen and (max-width: 739px) {
    width: 100%;
    max-width: none;
  }
`;
export const Body = styled.div`
  position: relative;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.75);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 660px;
  width: 100%;
  padding: 60px 68px 40px;
  margin-bottom: 90px;

  @media only screen and (max-width: 739px) {
    padding: 0 5%;
    background-color: black;
    margin: 0;
    min-height: 520px;
  }
`;
export const Base = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 3px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
  text-align: left;
`;

export const Link = styled(ReactRouterLink)``;

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  outline: none;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Submit = styled.button`
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  margin: 24px 0 12px;
  background: #e50914;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  @media only screen and (min-width: 500px) {
    padding: 16px;
    font-size: 18px;
  }

  @media only screen and (min-width: 360px) {
    width: 100%;
    max-width: 100%;
    padding: 16px;
  }
`;

export const LinkBtn = styled.a`
  background-color: transparent;
  border: none;
  color: #0071eb;
  cursor: pointer;
  display: inline;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Disclosure = styled(TextSmall)`
  -webkit-transition: height 0.5s ease, opacity 0.5s ease;
  -o-transition: height 0.5s ease, opacity 0.5s ease;
  -moz-transition: height 0.5s ease, opacity 0.5s ease;
  transition: height 0.5s ease, opacity 0.5s ease;
  ${({ show }) =>
    show
      ? `visibility: visible; opacity: 1: height: auto`
      : `visibility: hidden; opacity: 0; height: 0`};
`;
