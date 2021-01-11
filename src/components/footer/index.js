import React from 'react';
import {
  Container,
  Link,
  Top,
  Break,
  Country,
  List,
  ListItem,
  Frame,
  Divider,
} from './styles/footer';

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Frame = function FooterFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Footer.Divider = function FooterDivider({ ...restProps }) {
  return <Divider {...restProps}></Divider>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Top = function FooterTop({ children, ...restProps }) {
  return <Top {...restProps}>{children}</Top>;
};

Footer.Break = function FooterBreak({ children, ...restProps }) {
  return <Break {...restProps}>{children}</Break>;
};

Footer.Country = function FooterCountry({ children, ...restProps }) {
  return <Country {...restProps}>{children}</Country>;
};

Footer.List = function FooterList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Footer.ListItem = function FooterListItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};
