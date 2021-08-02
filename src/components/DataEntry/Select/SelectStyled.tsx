// @ts-nocheck
import styled from 'styled-components';
import { Select as SelectAnt } from 'antd';

// styles
import { colors } from '../../../styles/colors';

export const Select = styled(SelectAnt)`
  .ant-select-selector {
    background-color: ${colors.input};
    border-color: ${colors.input};
    color: ${colors.neutrals[0]};
  }
`;
