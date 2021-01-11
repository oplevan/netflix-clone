import styled from 'styled-components/macro';

export const Container = styled.div`
  color: white;
  text-align: center;
  padding: 140px 45px;
  max-width: 900px;
  position: relative;
  z-index: 2;
`;
export const Title = styled.h2`
  font-size: 4rem;
  margin: auto;
  font-weight: 600;

  @media only screen and (max-width: 1449px) and (min-width: 950px) {
    font-size: 3.125rem;
    max-width: 640px;
  }

  @media only screen and (max-width: 949px) and (min-width: 550px) {
    font-size: 3.125rem;
  }

  @media only screen and (max-width: 549px) {
    font-size: 1.75rem;
  }
`;
export const SubTitle = styled.h3`
  font-size: 1.625rem;
  font-weight: 400;
  margin-bottom: 0;
`;
