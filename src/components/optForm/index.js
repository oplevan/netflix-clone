import React from 'react';
import { GoChevronRight } from 'react-icons/go';
import { Container, Input, Button, Title } from './styles/optForm';

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormInput({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <GoChevronRight />
    </Button>
  );
};

OptForm.Title = function OptFormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
