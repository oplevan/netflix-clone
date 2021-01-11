import styled from 'styled-components/macro';

export const Container = styled.form`
  max-width: 950px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 0.85rem;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
  outline: none;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  border-radius: 3px 0 0 3px;

  @media only screen and (max-width: 1449px) {
    height: 60px;
  }

  @media only screen and (max-width: 1000px) {
    border-radius: 3px;
    height: 50px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 19px 32px;
  font-size: 1.8rem;
  border: 0;
  cursor: pointer;
  border-radius: 0 3px 3px 0;

  & svg {
    margin-left: 15px;
  }

  &:hover {
    background: #f40612;
    -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
  }

  @media only screen and (max-width: 1449px) {
    padding: 16px 32px;
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 1000px) {
    border-radius: 3px;
    padding: 16px 32px;
    font-size: 1rem;
  }
`;

export const Title = styled.h3`
  max-width: none;
  font-size: 1.2rem;
  text-align: center;
  color: white;
  font-weight: 400;
`;
