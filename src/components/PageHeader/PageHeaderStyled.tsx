// @ts-nocheck
import styled from 'styled-components';

// styles
import { colors } from '../../styles/colors';

export const PageHeader = styled.header`
  align-items: center;
  display: flex;
  height: 64px;
  justify-content: flex-end;
  padding: 20px 15%;

  a {
    color: ${colors.neutrals['0']};
    margin: 0 10px;
  }

  span {
    margin-right: 5px;
  }

  img {
    height: 16px;
    width: 16px;
  }
`;
