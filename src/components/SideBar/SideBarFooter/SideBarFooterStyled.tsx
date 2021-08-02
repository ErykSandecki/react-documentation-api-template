// @ts-nocheck
import styled from 'styled-components';

// styles
import { colors } from '../../../styles/colors';

export const SideBarFooter = styled.div`
  border-top: 1px solid ${colors.mainBorder};
  bottom: 0;
  left: 0;
  height: 100px;
  padding: 10px 10px;
  position: absolute;
  text-align: center;
  width: 100%;

  button {
    margin-top: 10px;
    width: 100%;
  }
`;
