import React from 'react';
import {
  Fixed,
  Container,
  Title,
  List,
  User,
  AvatarWrapper,
  Avatar,
  ProfileName,
} from './styles/profiles';

export default function Profiles({ children, ...restProps }) {
  return (
    <Fixed>
      <Container {...restProps}>{children}</Container>
    </Fixed>
  );
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({ children, ...restProps }) {
  return <User {...restProps}>{children}</User>;
};

Profiles.AvatarWrapper = function ProfilesAvatarWrapper({
  children,
  ...restProps
}) {
  return <AvatarWrapper {...restProps}>{children}</AvatarWrapper>;
};

Profiles.Avatar = function ProfilesAvatar({ src, ...restProps }) {
  return (
    <Avatar
      {...restProps}
      src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}
    />
  );
};

Profiles.Name = function ProfilesName({ children, ...restProps }) {
  return <ProfileName {...restProps}>{children}</ProfileName>;
};
