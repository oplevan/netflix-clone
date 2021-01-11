import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Background,
  Container,
  Frame,
  Wrapper,
  Logo,
  LoginBtn,
  Link,
  Group,
  PrimaryNav,
  OpenMenu,
  NavTab,
  SecondaryNav,
  Profile,
  ProfileImg,
  Dropdown,
  SecondaryNavElement,
  SecondaryNavIcon,
  SearchInput,
  StickyHeader,
} from './styles/header';
import { MdSearch, MdNotifications } from 'react-icons/md';
import { GoGift } from 'react-icons/go';

export default function Header({ bgr = true, children, ...restProps }) {
  return bgr ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return (
    <Wrapper {...restProps}>
      <Frame>{children}</Frame>
    </Wrapper>
  );
};

Header.Sticky = function HeaderSticky({ children, ...restProps }) {
  return (
    <>
      <StickyHeader {...restProps}>
        <Container {...restProps}>{children}</Container>
      </StickyHeader>
    </>
  );
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return (
    <>
      <SecondaryNavElement {...restProps}>
        <Profile {...restProps}>{children}</Profile>
      </SecondaryNavElement>
    </>
  );
};

Header.ProfileImg = function HeaderProfileImg({ src, ...restProps }) {
  return <ProfileImg {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <>
      <SecondaryNavElement {...restProps}>
        <SecondaryNavIcon
          onClick={() => setSearchActive((searchActive) => !searchActive)}
        >
          <MdSearch />
        </SecondaryNavIcon>
        <SearchInput
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
          placeholder='Search films and series'
          active={searchActive}
        />
      </SecondaryNavElement>
    </>
  );
};

Header.Notifications = function HeaderNotifications({
  children,
  ...restProps
}) {
  return (
    <SecondaryNavElement {...restProps}>
      <SecondaryNavIcon>
        <MdNotifications />
      </SecondaryNavIcon>
      {children}
    </SecondaryNavElement>
  );
};

Header.Gifts = function HeaderNotifications({ children, ...restProps }) {
  return (
    <SecondaryNavElement {...restProps}>
      <SecondaryNavIcon>
        <GoGift />
      </SecondaryNavIcon>
    </SecondaryNavElement>
  );
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.PrimaryNav = function HeaderPrimaryNav({ children, ...restProps }) {
  return <PrimaryNav {...restProps}>{children}</PrimaryNav>;
};
Header.OpenMenu = function HeaderOpenMenu({ children, ...restProps }) {
  return <OpenMenu {...restProps}>{children}</OpenMenu>;
};
Header.NavTab = function HeaderNavTab({ children, ...restProps }) {
  return <NavTab {...restProps}>{children}</NavTab>;
};

Header.SecondaryNav = function HeaderSecondaryNav({ children, ...restProps }) {
  return <SecondaryNav {...restProps}>{children}</SecondaryNav>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.LoginBtn = function HeaderLoginBtn({ children, ...restProps }) {
  return <LoginBtn {...restProps}>{children}</LoginBtn>;
};
