// @ts-nocheck
import React, { FunctionComponent } from 'react';

// components
import HomePageLeftColumn from '../../components/HomePage/HomePageLeftColumn/HomePageLeftColumn';
import HomePageRightColumn from '../../components/HomePage/HomePageRightColumn/HomePageRightColumn';

// others
import { TRoutingProps } from '../types';

// styles
import { HomePage as HomePageStyled } from './HomePageStyled';

const HomePage: FunctionComponent<TRoutingProps> = () => {
  return (
    <HomePageStyled>
      <HomePageLeftColumn />
      <HomePageRightColumn />
    </HomePageStyled>
  );
};

export default HomePage;
