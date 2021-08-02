// @ts-nocheck
import React, { FunctionComponent } from 'react';

// components
import CodeContainer from '../../CodeContainer/CodeContainer';
import { enhanceHomePageRightColumn } from './enhanceHomePageRightColumn';

// others
import PHP from '../../../assets/icons/php.svg';
import { TConfig, TUpdateConfigPayload } from '../../../store/config/types';

// styles
import { EClassNames } from './classNames';
import { HomePageRightColumn as RightColumnStyled } from './HomePageRightColumnStyled';

export type TInnerProps = {
  getDataSelector: TConfig;
  isPending: boolean;
  updateConfig: (payload: TUpdateConfigPayload) => void;
};

const HomePageRightColumn: FunctionComponent<TInnerProps> = ({
  getDataSelector,
  isPending,
  updateConfig,
}) => {
  const onBlurHandler = (value: string) => {
    updateConfig({
      value,
      path: ['data', 'config', 'baseUrl'],
    });
  };

  return (
    <RightColumnStyled>
      <h4>JUST GETTING STARTED?</h4>
      <p>
        Download and test on:{' '}
        <a
          href="https://www.postman.com/downloads/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Postman
        </a>
        .
      </p>
      <CodeContainer
        onBlur={onBlurHandler}
        description={getDataSelector.baseUrl}
        title="Base url"
      />

      {/* LIBRARY CONTAINER */}
      <div className={EClassNames.LIBRARY_CONTAINER}>
        <div className={EClassNames.LIBRARY_HEADER}>
          <p className={EClassNames.LIBRARY_TITLE}>BACKEND LANGUAGE:</p>
          <img alt="php" className={EClassNames.LIBRARY_ICON} src={PHP} />
          <p className={EClassNames.LIBRARY_LANGUAGE}>PHP</p>
        </div>
        <div className={EClassNames.LIBRARY_BODY}>
          <p className={EClassNames.LIBRARY_DESCRIPTION}>
            Currently used framework &quot;Laravel&quot; is based on language
            php.
          </p>
        </div>
      </div>
    </RightColumnStyled>
  );
};

export default enhanceHomePageRightColumn(HomePageRightColumn);
