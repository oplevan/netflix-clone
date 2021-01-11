import React from 'react';
import { MdInfoOutline, MdPlayArrow } from 'react-icons/md';
import {
  Container,
  Row,
  Info,
  Logo,
  LogoImg,
  Msg,
  Description,
  Links,
  PlayBtn,
  MoreInfoBtn,
  Trailer,
  Poster,
} from './styles/billboard';

export default function Billboard({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Billboard.Row = function BillboardRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

// INFO
Billboard.Info = function BillboardInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};
Billboard.Logo = function BillboardLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};
Billboard.LogoImg = function BillboardLogoImg({ children, ...restProps }) {
  return <LogoImg {...restProps} />;
};
Billboard.Msg = function BillboardMsg({ children, ...restProps }) {
  return <Msg {...restProps}>{children}</Msg>;
};
Billboard.Description = function BillboardDescription({
  children,
  ...restProps
}) {
  return <Description {...restProps}>{children}</Description>;
};
Billboard.Links = function BillboardLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};
Billboard.PlayBtn = function BillboardPlayBtn({ children, ...restProps }) {
  return (
    <PlayBtn {...restProps}>
      <MdPlayArrow />
      <span>{children}</span>
    </PlayBtn>
  );
};
Billboard.MoreInfoBtn = function BillboardMoreInfoBtn({
  children,
  ...restProps
}) {
  return (
    <MoreInfoBtn {...restProps}>
      <MdInfoOutline />
      <span>{children}</span>
    </MoreInfoBtn>
  );
};

// TRAILER
Billboard.Trailer = function BillboardTrailer({ children, ...restProps }) {
  return <Trailer {...restProps}>{children}</Trailer>;
};

Billboard.Poster = function BillboardPoster({ children, ...restProps }) {
  return <Poster {...restProps} />;
};
