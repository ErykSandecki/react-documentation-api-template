// @ts-nocheck
import styled from 'styled-components';
import { Input } from 'antd';

const { TextArea: TextAreaAnt } = Input;

// styles
import { colors } from '../../../styles/colors';

export const TextArea = styled(TextAreaAnt)`
  background-color: ${colors.input};
  border-color: ${colors.input};
  color: ${colors.neutrals[0]};

  ${({ styles }) => styles};
`;
