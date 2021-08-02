// @ts-nocheck
import React, { FunctionComponent } from 'react';

// styles
import { Input as InputStyled } from './InputStyled';

type TProps = {
  className?: string;
  disabled?: boolean;
  onChange?: (e: Event) => void;
  placeholder?: string;
  prefix?: React.ReactNode;
  size?: 'large' | 'middle' | 'small';
  suffix?: React.ReactNode;
  styles?: any;
  value?: string;
};

const Input: FunctionComponent<TProps> = ({
  className = '',
  disabled = false,
  onChange,
  placeholder = '',
  prefix,
  size = 'small',
  suffix = null,
  styles = null,
  value = '',
}) => {
  return (
    <InputStyled
      className={className}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
      size={size}
      styles={styles}
      {...(suffix ? { suffix: suffix } : {})}
      {...(prefix ? { prefix: prefix } : {})}
      value={value}
    />
  );
};
export default Input;
