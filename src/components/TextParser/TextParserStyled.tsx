// @ts-nocheck
import styled from 'styled-components';

import { colors } from '../../styles/colors';
import { EClassNames } from './classNames';

export const TextParser = styled.p`
  & > span {
    white-space: nowrap;
  }

  .${EClassNames.BLOCK_TEXT} {
    background-color: hsla(228, 17%, 28%, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.55);
    border-radius: 3px;
    color: ${colors.neutrals['0']};
    font-size: 12px;
    font-weight: lighter;
    margin: 0 1px;
    padding: 0 3px;

    span {
      color: ${colors.neutrals['0']} !important;
    }
  }

  .${EClassNames.BRACKET} {
    color: ${colors.neutrals['6']};
  }

  .${EClassNames.OBJECTS} {
    color: ${colors.lightGreen};
  }

  .${EClassNames.PRIMITIVE_VARIABLE} {
    color: ${colors.lightOrange};
  }

  .${EClassNames.IGNORE} {
    span {
      background-color: unset !important;
      border: unset !important;
      border-radius: unset !important;
      color: unset !important;
      margin: 0 !important;
      padding: 0 !important;
    }
  }

  ${({ onDoubleClick }) => onDoubleClick && 'cursor: pointer;'}
`;
