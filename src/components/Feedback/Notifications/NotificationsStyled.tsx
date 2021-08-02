// @ts-nocheck
import styled from 'styled-components';

// styles
import { EZIndexes } from '../../../styles/z-indexes';

export const Notifications = styled.div`
  min-height: 0px;
  position: fixed;
  z-index: ${EZIndexes.NOTIFICATIONS};
  right: 25px;
  top: 25px;
  width: 380px;
`;
