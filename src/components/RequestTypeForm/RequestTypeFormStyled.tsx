// @ts-nocheck
import styled from 'styled-components';

// styles
import { colors } from '../../styles/colors';

export const RequestTypeForm = styled.code`
  border: 1px solid ${colors.neutrals['4']};
  border-radius: 2px;
  cursor: pointer;
  font-size: 11px;
  margin-left: 15px;
  padding: 1px 8px;

  ${({ color }) => `color: ${color};`}
`;
