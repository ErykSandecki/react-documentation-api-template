// @ts-nocheck
import styled from 'styled-components';

// others
import { animationLoader } from '../animations';
import { EZIndexes } from '../../../styles/z-indexes';
import { loaderData } from '../constants';

// styles
import { colors } from '../../../styles/colors';
import { EClassNames } from './classNames';
import { transform } from '../../../styles/mixins/browser-properties';

export const assignStylesForSpinnerElements = () => {
  let loader = '';

  loaderData.forEach(
    (data, i) =>
      (loader += `.${EClassNames.ELEMENT}--${i + 1} {
        ${data}
        background-color: ${colors.pageLoader[i]};
      }`)
  );

  return loader;
};

export const LoaderPage = styled.div`
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  z-index: ${EZIndexes.PAGE_LOADER};
  width: 100%;

  .${EClassNames.FILTER} {
    background-color: ${colors.background};
    height: 100%;
    width: 100%;
  }

  .${EClassNames.WRAPPER} {
    left: 50%;
    position: fixed;
    top: 50%;
    text-align: center;

    ${transform('translate(-50%, -50%)')}
  }

  .${EClassNames.LOGO} {
    height: 40px;
  }

  .${EClassNames.SPINNER} {
    animation: ${animationLoader} 1s steps(12, end) infinite;
    height: 100px;
    list-style: none;
    margin: 0 auto 20px auto;
    padding: 0;
    position: relative;
    width: 100px;
  }

  .${EClassNames.ELEMENT} {
    border-radius: 10px;
    height: 20px;
    left: 46px;
    position: absolute;
    top: 40px;
    width: 8px;
  }

  ${assignStylesForSpinnerElements()}
`;
