// @ts-nocheck
import styled from 'styled-components';

// styles
import { colors } from '../../../styles/colors';
import { EClassNames } from './classNames';

export const SideBarHeader = styled.div`
  border-bottom: 1px solid ${colors.mainBorder};
  height: 90px;
  padding: 10px 15px;
  text-align: center;

  .${EClassNames.LOGO_WRAPPER} {
    align-items: center;
    display: flex;
    justify-content: center;

    & > span {
      margin-left: 10px;
    }

    & > img {
      height: 12px;
    }
  }

  .${EClassNames.INPUT_FILTER} {
    margin: 10px auto 0;
    width: 160px;
  }
`;
