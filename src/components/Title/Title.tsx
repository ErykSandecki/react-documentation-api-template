// @ts-nocheck
import React, { FunctionComponent } from 'react';

// styles
import { Title as TitleStyled } from './TitleStyled';

type TProps = {
  contentEditable?: boolean;
  children: React.ReactNode;
  onBlur?: (e: Event) => void;
};

const Title: FunctionComponent<TProps> = ({
  children,
  contentEditable = false,
  onBlur = null,
}) => (
  <TitleStyled
    contentEditable={contentEditable}
    onBlur={onBlur}
    suppressContentEditableWarning
  >
    {children}
  </TitleStyled>
);

export default Title;
