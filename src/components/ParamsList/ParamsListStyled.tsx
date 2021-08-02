// @ts-nocheck
import styled from 'styled-components';

// styles
import { colors } from '../../styles/colors';

export const ParamsList = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
  max-width: 400px;

  h2 {
    align-items: center;
    border-bottom: 1px solid ${colors.neutrals['8']};
    border-color: ${colors.neutrals['1']};
    color: ${colors.neutrals[0]};
    display: flex;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
    padding-bottom: 12px;

    p {
      color: ${colors.neutrals[6]};
      cursor: pointer;
      font-size: 12px;
      margin-left: auto;
    }
  }
`;
