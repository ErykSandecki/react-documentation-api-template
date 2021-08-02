// @ts-nocheck
import styled from 'styled-components';

// styles
import { colors } from '../../../styles/colors';
import { EClassNames } from './classNames';

export const EndpointPageLeftColumn = styled.section`
  h1,
  h4,
  p {
    outline: none;
    white-space: pre-wrap;

    &:focus {
      border: 1px dashed ${colors.neutrals[0]};
      border-radius: 5px;
    }
  }

  h1 {
    margin: 0;
  }

  h4 {
    margin-bottom: 25px;
  }

  .${EClassNames.HEADER} {
    align-items: center;
    display: flex;
    margin-bottom: 20px;
  }
`;
