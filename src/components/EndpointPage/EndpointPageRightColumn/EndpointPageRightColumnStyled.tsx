// @ts-nocheck
import styled from 'styled-components';

// styles
import { EClassNames } from './classNames';
import { rightColumn } from '../../../styles/mixins/right-column';

export const EndpointPageRightColumn = styled.section`
  margin-left: auto;
  height: 100%;
  position: sticky;
  top: 0;
  ${rightColumn()}

  .${EClassNames.DIVIDER} {
    margin: 10px 0;
    height: 20px;
  }
`;
