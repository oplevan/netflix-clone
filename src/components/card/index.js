import React, { useState, useContext, createContext } from 'react';

import {
  Container,
  MainView,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Slider,
  Item,
  Image,
} from './styles/card';

export const FeatureContext = createContext();

export default function Main({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container className='card' {...restProps}>
        {children}
      </Container>
    </FeatureContext.Provider>
  );
}

Main.MainView = function MainMainView({ children, ...restProps }) {
  return <MainView {...restProps}>{children}</MainView>;
};

Main.Title = function MainTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Main.SubTitle = function MainSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Main.Text = function MainText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Main.Slider = function MainSlider({ children, ...restProps }) {
  return <Slider {...restProps}>{children}</Slider>;
};

Main.Meta = function MainMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Main.Item = function MainItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      onMouseEnter={() => {
        setItemFeature(item);
        setShowFeature(true);
        // setTimeout(() => {
        //   setShowFeature(true);
        // }, 1000);
      }}
      onMouseLeave={() => {
        setItemFeature({});
        setShowFeature(false);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Main.Image = function MainImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Main.Feature = function MainFeature({ children, category, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(
    FeatureContext
  );

  return showFeature ? (
    <Feature
      {...restProps}
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src='/images/icons/close.png' alt='Close' />
        </FeatureClose>

        <Group margin='30px 0' flexDirection='row' alignItems='center'>
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight='bold'>
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>

        {children}
      </Content>
    </Feature>
  ) : null;
};
