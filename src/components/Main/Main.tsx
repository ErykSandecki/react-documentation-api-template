// @ts-nocheck
import React, { FunctionComponent } from 'react';

// components
import Routing from '../../core/Routing/Routing';
import SideBar from '../SideBar/SideBar';

// styles
import { Main as MainStyled } from './MainStyled';

const Main: FunctionComponent<{}> = () => {
  return (
    <MainStyled>
      <SideBar />
      <Routing />
    </MainStyled>
  );
};

export default Main;
