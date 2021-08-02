// @ts-nocheck
import React, { FunctionComponent } from 'react';

// others
import { EPlacement } from './constants';

// styles
import { colors } from '../../../styles/colors';
import { Tooltip as TooltipStyled } from './TooltipStyled';

type TProps = {
  children: React.ReactNode;
  placement?: EPlacement;
  title?: string;
};

const Tooltip: FunctionComponent<TProps> = ({
  children,
  placement = EPlacement.TOP,
  title = '',
}) => (
  <TooltipStyled color={colors.mainBorder} placement={placement} title={title}>
    {children}
  </TooltipStyled>
);

export default Tooltip;
