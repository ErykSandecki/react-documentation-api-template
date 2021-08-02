// @ts-nocheck
import styled from 'styled-components';

// others
import { timeFinishedAnimation } from '../../constants';

// styles
import {
  boxShadow,
  transition,
} from '../../../../styles/mixins/browser-properties';
import { colors } from '../../../../styles/colors';
import { EClassNames } from './classNames';

const margin = 15;
const sizeIcon = 24;
const sizeClose = 12;

export const Message = styled.section`
  background-color: ${colors.neutrals[4]};
  border-radius: 2px;
  margin-bottom: 15px;
  overflow: hidden;
  padding: 15px 25px;

  ${boxShadow('0 0 20px 1px rgba(0, 0, 0, 0.25)')}
  ${() => transition(`all ${timeFinishedAnimation}ms ease-out`)};
  ${({ visible }) => !visible && 'opacity: 0; max-height: 0; padding: 0 25px'};

  .${EClassNames.TOP} {
    align-items: center;
    display: flex;
    margin-bottom: 15px;
  }

  .${EClassNames.ICON} {
    height: ${sizeIcon}px;
    margin-right: ${margin}px;
    width: ${sizeIcon}px;
  }

  .${EClassNames.TITLE} {
    color: ${colors.neutrals[0]};
  }

  .${EClassNames.CLOSE} {
    cursor: pointer;
    height: ${sizeClose}px;
    margin-left: auto;
    width: ${sizeClose}px;
  }

  .${EClassNames.MESSAGE} {
    font-size: 12px;
    line-height: 18px;
    margin-left: ${sizeIcon + margin}px;
    margin-right: ${sizeClose}px;
  }
`;
