// @ts-nocheck
import styled from 'styled-components';

// styles
import { colors } from '../../../styles/colors';
import { EClassNames } from './classNames';

export const ParamsListForm = styled.div`
  margin-top: 25px;

  h2 {
    border-bottom: 1px solid #e3e8ee;
    border-color: ${colors.neutrals['1']};
    color: ${colors.neutrals[0]};
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    padding-bottom: 12px;
  }

  h5 {
    color: ${colors.neutrals[0]};
    font-size: 14px;
    font-weight: normal;
  }

  .${EClassNames.NEW_PARAM} {
    cursor: pointer;
    color: ${colors.link};
    margin-left: 2.5px;
  }
`;
