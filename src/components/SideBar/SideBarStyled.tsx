// @ts-nocheck
import styled from 'styled-components';

// styles
import { colors } from '../../styles/colors';
import { EClassNames } from './classNames';

export const SideBar = styled.section`
  border-right: 1px solid ${colors.mainBorder};
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  width: 220px;
  z-index: 10;

  .${EClassNames.CONTAINER} {
    max-height: calc(100vh - 190px);
    overflow-y: hidden;

    &:hover {
      overflow-y: auto;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: none;
      background-color: ${colors.background};
    }

    &::-webkit-scrollbar {
      width: 10px;
      background-color: ${colors.background};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${colors.scrollbar.slider};
      border: 2px solid ${colors.scrollbar.slider};
    }
  }
`;
