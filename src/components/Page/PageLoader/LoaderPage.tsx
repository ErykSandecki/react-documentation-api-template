// @ts-nocheck
// eslint-disable-next-line
import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import map from 'lodash/map';
import { useSpring, animated } from 'react-spring';

// others
import Logo from '../../../assets/images/logo/logo.svg';
import { loaderData } from '../constants';
import { timeAfterLoadData } from '../../../constants';

// styles
import { EClassNames } from './classNames';
import { LoaderPage as LoaderPageStyled } from './LoaderPageStyled';

type TProps = {
  loadedData: boolean;
};

const PageLoader: FunctionComponent<TProps> = ({ loadedData }) => {
  const propsAnimation = useSpring({
    dspl: loadedData ? 0 : 1,
    opacity: loadedData ? 0 : 1,
    config: { duration: timeAfterLoadData },
  });

  return ReactDOM.createPortal(
    <animated.div
      style={{
        ...propsAnimation,
        display: propsAnimation.dspl.interpolate((displ) =>
          displ === 0 ? 'none' : 'initial'
        ),
      }}
    >
      <LoaderPageStyled loadedData={loadedData}>
        <div className={EClassNames.FILTER} />
        <div className={EClassNames.WRAPPER}>
          <img alt="logo" className={EClassNames.LOGO} src={Logo} />
          <ul className={EClassNames.SPINNER}>
            {map(loaderData, (_, i) => (
              <li
                key={i}
                className={`${EClassNames.ELEMENT} ${EClassNames.ELEMENT}--${
                  i + 1
                }`}
              />
            ))}
          </ul>
        </div>
      </LoaderPageStyled>
    </animated.div>,
    document.getElementById('pageLoader')
  );
};

export default PageLoader;
