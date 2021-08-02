// @ts-nocheck
import styled from 'styled-components';

// styles
import { colors } from '../../styles/colors';
import { EClassNames } from './classNames';
import { transition } from '../../styles/mixins/browser-properties';

export const CodeContainer = styled.div`
  background-color: ${({ styleCode }) => styleCode};
  border-radius: 8px;
  border: 1px solid ${colors.codeContainer.header};
  margin: 5px 0;
  position: relative;
  max-width: 400px;
  min-width: 400px;

  p {
    padding: 4px 8px 4px 12px;
  }

  .${EClassNames.HEADER} {
    align-items: center;
    background-color: ${colors.codeContainer.header};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    color: ${colors.neutrals[3]};
    display: flex;
    font-size: 12px;
    font-weight: 600;
    justify-content: space-between;
    padding: 4px;
    text-transform: uppercase;
  }

  .${EClassNames.NAV} {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .${EClassNames.NAV_ITEM} {
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    height: 34px;
    justify-content: center;
    padding: 8px;
    width: 34px;

    ${transition(`all 300ms ease-out`)};

    &:hover {
      background-color: ${colors.neutrals[4]};
    }
  }

  .${EClassNames.CODE} {
    color: ${colors.neutrals[1]};
    display: inline-block;
    min-width: 100%;
    padding: 10px 4px;
    max-width: 400px;
    overflow-x: hidden;

    &:hover {
      overflow-x: overlay;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: none;
      background-color: ${colors.scrollbar.slider};
    }

    &::-webkit-scrollbar {
      width: 2px;
      height: 5px;
      background-color: ${colors.scrollbar.slider};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${colors.neutrals['6']};
      border: 2.5px solid ${colors.neutrals['6']};
    }

    p {
      display: inline-block;
      outline: none;
      white-space: pre;

      &:focus {
        border: 1px dashed ${colors.neutrals[0]};
        border-radius: 5px;
      }
    }
  }
`;
