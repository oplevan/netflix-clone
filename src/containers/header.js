import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../Netflix_logo.svg';

export function HeaderContainer({ children }) {
  const currentUrl = window.location.pathname;
  return (
    <>
      {currentUrl === ROUTES.LOGIN || currentUrl === ROUTES.SIGN_UP ? (
        <Header noBgrOnMobile>
          <Header.Frame>
            <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix' />
          </Header.Frame>
          {children}
        </Header>
      ) : (
        <Header>
          <Header.Frame>
            <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix' />
            <Header.LoginBtn to={ROUTES.LOGIN}>Sign In</Header.LoginBtn>
          </Header.Frame>
          {children}
        </Header>
      )}
    </>
  );
}
