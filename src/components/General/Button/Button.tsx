// @ts-nocheck
import React, { FunctionComponent } from 'react';

// others
import { ETypeButton } from './constants';

// styles
import { Button as ButtonStyled } from './ButtonStyled';

type TProps = {
  children: React.ReactNode;
  className?: string;
  icon: React.ReactNode;
  onClick: () => void;
  size?: 'large' | 'middle' | 'small';
  type?: ETypeButton;
};

const Button: FunctionComponent<TProps> = ({
  children = null,
  className = '',
  icon = null,
  onClick = null,
  size = 'small',
  type = ETypeButton.PRIMARY,
}) => {
  return (
    <ButtonStyled
      className={className}
      {...(icon ? { icon: icon } : {})}
      onClick={onClick}
      size={size}
      type={type}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
