import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  ${({ border }) =>
    border ? `border-bottom: 8px solid #222;` : `border: none;`}
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url(${({ src }) =>
    src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'})
      center center / cover no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
  }

  @media (max-width: 739px) {
    ${({ noBgrOnMobile }) => noBgrOnMobile && `background: none;`}
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 100%;
  margin: 0 2.5%;

  @media only screen and (max-width: 549px) {
    width: 90%;
    margin: 1rem 5% 0 5%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 2;
  padding-top: 20px;
  height: 5rem;

  @media only screen and (max-width: 549px) {
    height: 3rem;
    padding: 0;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  margin: 0 56px;
  height: 100px;
  align-items: center;

  ${({ justify }) =>
    justify === 'flex-start'
      ? 'justify-content: flex-start;'
      : 'justify-content: space-between;'}

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 4%;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  min-width: 150px;
  border-bottom: 1px solid #999;
`;

export const PrimaryNav = styled.ul`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 884px) {
    flex-direction: column;
    box-sizing: border-box;
    top: 45px;
    left: 5%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.9);
    color: #fff;
    font-size: 13px;
    line-height: 21px;
    border: solid 1px rgba(255, 255, 255, 0.15);
    cursor: default;
    padding: 1.5rem 2rem;
    transition: visibility 0s, opacity 0.2s linear;

    &:before {
      content: '';
      position: absolute;
      top: -1px;
      right: -1px;
      left: -1px;
      height: 2px;
      background: #e5e5e5;
    }

    &:after {
      content: '';
      position: absolute;
      top: -14px;
      left: 50%;
      transform: translateX(-3.5px);
      border-width: 7px;
      margin-left: -7px;
      border-color: transparent transparent #e5e5e5;
      border-style: solid;
      height: 0;
      width: 0;
    }
    ${({ showMenu }) =>
      showMenu === true
        ? 'visibility: visible;opacity: 1;'
        : 'visibility: hidden;opacity: 0;'}
  }
`;
export const NavTab = styled.li`
  list-style: none;

  @media only screen and (max-width: 884px) {
    line-height: 34px;
  }
`;
export const Link = styled.a`
  font-size: 13px;
  text-decoration: none;
  margin-right: 30px;
  cursor: pointer;
  transition: color 0.4s;

  &:hover {
    color: #b3b3b3;
  }

  ${({ active }) =>
    active === 'true'
      ? 'color: #ffffff; font-weight: 600; cursor: default; &:hover {color: #ffffff}'
      : 'color: #e5e5e5; font-weight: normal'};
`;
export const OpenMenu = styled.button`
  margin-left: 30px;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;

  & > ${Link} {
    margin: 0;
    color: #fff;
  }

  & > ${Link}::after {
    content: '';
    width: 0;
    height: 0;
    margin-top: 6px;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #fff transparent transparent transparent;
    margin-left: 5px;
  }

  @media only screen and (min-width: 885px) {
    ${({ openMenu }) => (openMenu ? 'display: none' : 'display: block')}
  }
`;
export const SecondaryNav = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
`;

export const SecondaryNavElement = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  svg {
    color: white;
    cursor: pointer;
  }
`;

export const SecondaryNavIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 32px;
  width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    font-size: 1.6rem;
  }
`;

export const SearchInput = styled.input`
  background-color: rgba(64, 64, 64, 0.5);
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  border-radius: 4px;
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '200px' : '0px')};
  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const LoginBtn = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #f40612;
  }

  @media only screen and (max-width: 549px) and (min-width: 400px),
    only screen and (max-width: 399px) and (min-width: 350px),
    only screen and (max-width: 349px) {
    font-size: 0.9rem;
    margin-top: 0.35rem;
    padding: 0.25rem 0.5rem;
  }
`;

export const ProfileImg = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border-radius: 3px;
  position: relative;
  outline: none;
  margin-right: 20px;

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    top: 50%;
    transform: translateY(-50%);
    right: -20px;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #fff transparent transparent transparent;
  }
`;

export const Dropdown = styled.div`
  flex-direction: column;
  box-sizing: border-box;
  top: 50px;
  right: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  font-size: 13px;
  line-height: 21px;
  border: solid 1px rgba(255, 255, 255, 0.15);
  cursor: default;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.135s, opacity 0.2s linear;

  &:before {
    content: '';
    position: absolute;
    top: -1px;
    right: -1px;
    left: -1px;
    height: 2px;
    background: #e5e5e5;
  }

  &:after {
    content: '';
    position: absolute;
    top: -14px;
    right: 30px;
    border-width: 7px;
    margin-left: -7px;
    border-color: transparent transparent #e5e5e5;
    border-style: solid;
    height: 0;
    width: 0;
  }

  ${Group} {
    padding: 1rem;

    &:last-of-type {
      border: 0;
      ${Link} {
        font-weight: 600;
      }
    }
    ${Link} {
      line-height: 1.8rem;
      cursor: pointer;
    }
    ${ProfileImg} {
      width: 22px;
      height: 22px;

      &:after {
        display: none;
      }
    }
  }
  button {
    margin-right: 10px;
  }
  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &:hover > ${Dropdown} {
    opacity: 1;
    visibility: visible;
    display: flex;
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  height: 36px;
  width: 134px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }

  @media only screen and (max-width: 549px) and (min-width: 400px),
    only screen and (max-width: 399px) and (min-width: 350px),
    only screen and (max-width: 349px) {
    width: auto;
    height: 24px;
  }
`;

export const StickyHeader = styled.div`
  left: 0;
  right: 0;
  height: 70px;
  font-size: 0.75vw;
  position: fixed;
  width: 100%;
  z-index: 10;
  // background: rgb(20, 20, 20, 0.8);
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );

  ${Logo} {
    width: 92px;
  }

  & > ${Container} {
    height: 70px;
    margin: 0 3%;
  }

  @media only screen and (max-width: 945px) {
    height: 50px;

    & ${Logo} {
      height: 3vw;
      width: auto;
    }

    & > ${Container} {
      height: 50px;
    }
  }
`;
