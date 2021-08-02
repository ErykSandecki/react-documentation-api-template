// @ts-nocheck
import styled from 'styled-components';

// styles
import { colors } from '../../styles/colors';
import { EClassNames } from './classNames';
import { transform } from '../../styles/mixins/browser-properties';

export const ModalEndpointFinder = styled.div`
  background-color: rgba(0, 0, 0, 0.45);
  cursor: pointer;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  .${EClassNames.MODAL_CONTAINER} {
    background-color: ${colors.background};
    border: 0.5px solid ${colors.neutrals['4']};
    border-radius: 8px;
    cursor: auto;
    left: 50%;
    position: absolute;
    top: 50px;
    width: 500px;

    ${transform('translateX(-50%)')};
  }

  .${EClassNames.INPUT_WRAPPER} {
    border-bottom: 0.5px solid ${colors.neutrals['4']};
    padding: 16px 0 16px 12px;
    text-align: left;
  }

  .${EClassNames.INPUT_WRAPPER_ICON} {
    height: 14px;
    margin-right: 12px;
    width: 14px;
  }

  .${EClassNames.INPUT} {
    background-color: unset;
    border: none;
    color: ${colors.neutrals['2']};
    outline: none;
    width: calc(100% - 26px);
  }

  .${EClassNames.LIST_WRAPPER} {
    max-height: 400px;
    overflow-y: auto;
  }

  .${EClassNames.LINK} {
    align-items: center;
    color: ${colors.neutrals['2']};
    display: flex;
    font-size: 13px;
    padding: 8px 16px;
    text-align: left;

    span {
      color: ${colors.neutrals['11']};
      font-weight: lighter;
      margin-left: 2px;
    }

    img {
      display: block;
      margin-left: auto;
      ${transform('scaleY(-1)')};
    }
  }

  .${EClassNames.LINK_SELECTED} {
    background-color: ${colors.link};
    border-radius: 8px;
    color: ${colors.neutrals['0']};
    margin: 5px;

    span {
      color: ${colors.neutrals['1']};
    }
  }

  .${EClassNames.FOOTER} {
    align-items: center;
    background-color: ${colors.neutrals['10']};
    color: ${colors.neutrals['6']};
    display: flex;
    height: 32px;
    padding: 0 8px 0 16px;
  }

  .${EClassNames.PROMPT} {
    margin-right: 25px;

    &:last-child {
      margin-left: auto;
      margin-right: 0;

      span {
        font-size: 12px;
        margin-left: 0;
        margin-right: 5px;
      }
    }

    span {
      margin-left: 5px;
    }

    kbd {
      border: 0.25px solid ${colors.neutrals['0']};
      border-radius: 4px;
      color: ${colors.neutrals['0']};
      display: inline-block;
      font-size: 12px;
      padding: 3px 5px;
    }
  }
`;
