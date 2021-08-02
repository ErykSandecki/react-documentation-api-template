// @ts-nocheck
import styled from 'styled-components';

// styles
import { colors } from '../../../styles/colors';
import { EClassNames } from './classNames';
import { transform } from '../../../styles/mixins/browser-properties';

export const ParamsListElement = styled.div`
  border-bottom: 1px solid ${colors.neutrals['8']};
  margin-bottom: 20px;
  padding-bottom: 12px;
  position: relative;

  .${EClassNames.PARAM_HEADER} {
    margin: 0;
  }

  .${EClassNames.ARROW} {
    cursor: pointer;
    height: 10px;
    position: absolute;
    left: -15px;
    top: 6px;
    width: 10px;

    ${({ visible }) => !visible && transform('rotate(270deg)')};
  }

  .${EClassNames.TRASH} {
    cursor: pointer;
    position: absolute;
    height: 15px;
    right: 0;
    top: 5px;
    width: 15px;
  }

  .${EClassNames.PARAM_NAME} {
    color: ${colors.neutrals[8]};
    font-size: 13px;
    font-weight: 600;
    margin-right: 5px;
  }

  .${EClassNames.PARAM_TYPE} {
    color: ${colors.neutrals[6]};
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    margin-right: 5px;
  }

  .${EClassNames.PARAM_OPTIONAL}, .${EClassNames.PARAM_REQUIRED} {
    border-bottom: 1px dotted ${colors.scrollbar.slider};
    cursor: pointer;
    font-size: 10px;
  }

  .${EClassNames.PARAM_OPTIONAL} {
    color: ${colors.orange};
  }

  .${EClassNames.PARAM_REQUIRED} {
    color: ${colors.cyan};
  }

  .${EClassNames.PARAM_DESCRIPTION} {
    & > p {
      color: ${colors.neutrals[1]};
      margin-top: 5px;
    }
  }

  .${EClassNames.PARAM_NAME}, .${EClassNames.PARAM_DESCRIPTION} {
    outline: none;
    white-space: pre;

    &:focus {
      border: 1px dashed ${colors.neutrals[0]};
      border-radius: 5px;
    }
  }
`;
