// @ts-nocheck
import styled from 'styled-components';
import { Input as InputAnt } from 'antd';

// styles
import { colors } from '../../../styles/colors';

export const Input = styled(InputAnt)`
  background-color: ${colors.input};
  border-color: ${colors.input};
  color: ${colors.neutrals[0]};

  ${({ styles }) => styles};
`;
