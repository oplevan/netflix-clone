import styled from 'styled-components/macro';

export const Fixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  background: #141414;
  z-index: 1;
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Title = styled.div`
  width: 100%;
  color: white;
  font-size: 3.5vw;
  text-align: center;
  font-weight: 500;
`;

export const List = styled.ul`
  list-style: none;
  margin: 2rem 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

export const AvatarWrapper = styled.div`
  border-radius: 4px;
  line-height: 0;
  overflow: hidden;
  position: relative;

  &:after {
    content: '';
    display: block;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    border: 0.3em solid transparent;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const Avatar = styled.img`
  width: 100%;
  max-width: 200px;
  max-height: 200px;
  height: auto;
`;

export const ProfileName = styled.span`
  color: grey;
  display: block;
  text-align: center;
  margin-top: 0.6rem;
  font-size: 1.6rem;
  text-overflow: ellipsis;
`;

export const User = styled.li`
  max-width: 100%;
  height: auto;
  text-align: center;
  margin-right: 30px;
  cursor: pointer;

  &:hover > ${AvatarWrapper}:after, &:hover > ${ProfileName} {
    border-color: white;
    color: white;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
