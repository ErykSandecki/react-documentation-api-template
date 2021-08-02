import { createGlobalStyle } from 'styled-components';

// others
import { EFontNames } from './constants';

// styles
import { colors } from './styles/colors';

export default createGlobalStyle`
  * {
   margin:0;
   padding:0;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%; 
  }

  body {
    background-color: ${colors.background};
    color: ${colors.neutrals[0]};
    font-family: ${EFontNames.RUBIK}, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #root {
    min-height: 100vh;
  }

  input, 
  textarea, 
  a, 
  p, 
  span, 
  kbd {
    font-family: ${EFontNames.RUBIK}, sans-serif;
  }

  a {
    color: ${colors.link};
  }

  p {
    margin: 0;
  }

  h1, 
  h2, 
  h3, 
  h4, 
  h5, 
  h6 {
    color: ${colors.neutrals[0]};
    font-family: ${EFontNames.NUNITO}, sans-serif;
  }

  .ant-message-notice-content {
    background-color: ${colors.mainBorder};
    color: ${colors.neutrals[0]};
  }

  .ant-input.ant-input-sm {
    background-color: ${colors.input};
    color: ${colors.neutrals[0]};
  }
  
  .ant-input-affix-wrapper-disabled,
  .ant-input-affix-wrapper-disabled .ant-input[disabled] {
  cursor: pointer;
  }

  .ant-spin-dot-item {
    background-color: ${colors.neutrals[0]};
  }
  
  .ant-modal-header, 
  .ant-modal-content {
    background-color: ${colors.background};
    border-color: ${colors.neutrals['4']};
    color: ${colors.neutrals[0]};
  }
  
  .ant-modal-title {
    border-color: ${colors.neutrals['4']};
    color: ${colors.neutrals[0]};
  }
  
  .ant-modal-footer {
    border-color: ${colors.neutrals['4']};
  }
  
  .anticon.anticon-close.ant-modal-close-icon  {
    color: ${colors.neutrals[0]};
  }
  
  .ant-select-selector {
    background-color: ${colors.input} !important;
    border-color: ${colors.input} !important;
  }
  
  .ant-select-selection-item {
    color: ${colors.neutrals[0]} !important;
  }
  
  .ant-select-arrow {
    color: ${colors.neutrals[0]} !important;
  }
  
  .ant-select-dropdown.ant-select-dropdown-placement-bottomLeft {
    background-color: ${colors.input} !important;
  }
  
  .ant-select-item-option-selected {
    background-color: ${colors.input} !important;
    color: ${colors.neutrals[0]} !important;
  }
  .ant-select-item-option-content {
    color: ${colors.neutrals[1]} !important;
    
    &:hover {
      color: ${colors.neutrals[0]} !important;
    }
  }
  
  .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
    background-color: ${colors.input} !important;
  }
  
  .ant-checkbox-wrapper {
    color: ${colors.neutrals[0]};
  }
  
  .ant-checkbox-inner {
    background-color: ${colors.input};
    border-color: ${colors.input};
  }
  
  .ant-popover-inner-content {
    background-color: ${colors.neutrals['4']};
    color: ${colors.neutrals[0]};
  }
  
  .ant-popover-message {
     color: ${colors.neutrals[0]};
  }
  
  .ant-popover-arrow {
    border-top-color: ${colors.neutrals['4']} !important;
    border-right-color: ${colors.neutrals['4']} !important;
    border-bottom-color: ${colors.neutrals['4']} !important;
  }
`;
