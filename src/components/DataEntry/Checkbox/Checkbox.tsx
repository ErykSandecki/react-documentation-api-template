// @ts-nocheck
import React, { FunctionComponent } from 'react';

// styles
import { Checkbox as CheckboxStyled } from './CheckboxStyled';

type TProps = {
  className?: string;
  children: React.ReactNode;
  checked: boolean;
  onChange: (e: Event) => void;
  styles?: any;
};

const Checkbox: FunctionComponent<TProps> = ({
  className = '',
  children,
  onChange,
  styles = null,
  checked,
}) => {
  return (
    <CheckboxStyled
      className={className}
      checked={checked}
      onChange={onChange}
      styles={styles}
    >
      {children}
    </CheckboxStyled>
  );
};
export default Checkbox;
