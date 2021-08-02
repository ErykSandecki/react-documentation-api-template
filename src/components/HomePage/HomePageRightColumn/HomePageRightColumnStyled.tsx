// @ts-nocheck
import styled from 'styled-components';

// styles
import { colors } from '../../../styles/colors';
import { EClassNames } from './classNames';
import { rightColumn } from '../../../styles/mixins/right-column';

export const HomePageRightColumn = styled.section`
  margin-left: auto;

  ${rightColumn()}

  & > h4 {
    font-size: 14px;
    font-weight: 900;
  }

  & > p {
    color: ${colors.neutrals[2]};
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .${EClassNames.LIBRARY_CONTAINER} {
    border: 1px solid ${colors.neutrals['4']};
    border-radius: 8px;
    margin-top: 25px;
    max-width: 400px;
  }

  .${EClassNames.LIBRARY_HEADER} {
    padding: 8px 10px;
    border-bottom: 1px solid ${colors.neutrals['4']};
  }

  .${EClassNames.LIBRARY_TITLE} {
    color: ${colors.neutrals['3']};
    font-size: 14px;
  }

  .${EClassNames.LIBRARY_ICON} {
    margin-top: 10px;
    height: 28px;
  }

  .${EClassNames.LIBRARY_LANGUAGE} {
    color: ${colors.neutrals['3']};
    font-size: 14px;
    margin-left: 5px;
    margin-top: 5px;
  }

  .${EClassNames.LIBRARY_BODY} {
    background-color: ${colors.neutrals['4']};
    padding: 8px 10px;
  }

  .${EClassNames.LIBRARY_DESCRIPTION} {
    color: ${colors.neutrals['3']};
    font-size: 14px;
  }
`;
