// @ts-nocheck
import React, { FunctionComponent } from 'react';
import { Select as SelectAnt } from 'antd';

// styles
import { Select as SelectStyled } from './SelectStyled';

type TOption = {
  text: string;
  value: number | string;
};

type TProps = {
  defaultValue?: string;
  onChange?: (e: Event) => void;
  options: Array<TOption>;
  size?: 'large' | 'middle' | 'small';
  style?: any;
};

const { Option } = SelectAnt;

const Select: FunctionComponent<TProps> = ({
  defaultValue = '',
  onChange,
  options,
  size = 'small',
  style = {},
}) => {
  return (
    <SelectStyled
      onChange={onChange}
      size={size}
      defaultValue={defaultValue}
      style={style}
    >
      {options.map(({ text, value }) => (
        <Option key={value} value={value}>
          {text}
        </Option>
      ))}
    </SelectStyled>
  );
};

export default Select;
