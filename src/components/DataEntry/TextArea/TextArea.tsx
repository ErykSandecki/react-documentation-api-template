// @ts-nocheck
import React, { FunctionComponent } from 'react';

// styles
import { TextArea as TextAreaStyled } from './TextAreaStyled';

type TProps = {
  className?: string;
  onChange?: (e: Event) => void;
  placeholder?: string;
  size?: 'large' | 'middle' | 'small';
  suffix?: React.ReactNode;
  styles?: any;
  value?: string;
};

const TextArea: FunctionComponent<TProps> = ({
  className = '',
  onChange,
  placeholder = '',
  size = 'small',
  suffix = null,
  styles = null,
  value = '',
}) => {
  return (
    <TextAreaStyled
      className={className}
      onChange={onChange}
      placeholder={placeholder}
      size={size}
      styles={styles}
      {...(suffix ? { suffix: suffix } : {})}
      value={value}
    />
  );
};
export default TextArea;
