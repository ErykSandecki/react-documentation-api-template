// @ts-nocheck
import styled from 'styled-components';

// others
import ArrowSideBar from '../../../assets/icons/arrow-sidebar.svg';

// styles
import { colors } from '../../../styles/colors';
import { EClassNames } from './classNames';
import {
  transform,
  transition,
} from '../../../styles/mixins/browser-properties';

export const SideBarGroup = styled.section`
  border-right: 1px solid ${colors.mainBorder};
  position: relative;

  .${EClassNames.GROUP_NAME} {
    color: ${colors.neutrals[0]};
    cursor: pointer;
    font-size: 14px;
    font-weight: 900;
    margin: 0;
    padding: 16px 0 8px 16px;
    position: relative;
    text-transform: uppercase;

    &::after {
      content: url(${ArrowSideBar});
      position: absolute;
      right: 10px;
      top: 55%;

      ${transition(`all 300ms ease-out`)};
      ${({ visibleLinks }) =>
        visibleLinks
          ? `${transform('translateY(-50%) rotate(180deg)')}`
          : `${transform('translateY(-50%) rotate(0deg)')}`}
    }
  }

  a {
    color: ${colors.neutrals['6']};
    display: block;
    padding: 4px 16px;
    width: 80%;

    &:hover {
      color: ${colors.neutrals[0]};
    }
  }

  .${EClassNames.LINK_SELECTED} {
    background-color: ${colors.neutrals['6']};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: ${colors.neutrals[0]};
  }
`;
