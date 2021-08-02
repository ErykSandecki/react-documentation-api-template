// @ts-nocheck
import React, { FunctionComponent, useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

// components
import Input from '../../DataEntry/Input/Input';
import ModalEndpointFinder from '../../ModalEndpointFinder/ModalEndpointFinder';

// others
import Logo from '../../../assets/images/logo/logo.svg';
import SlashInSquare from '../../../assets/icons/slash-in-square.svg';

// styles
import { EClassNames } from './classNames';
import { SideBarHeader as SideBarHeaderStyled } from './SideBarHeaderStyled';

const SideBarHeader: FunctionComponent<{}> = () => {
  const [isVisibleModal, setVisibleModal] = useState(false);

  const onKeyDownHandler = (e): void => {
    if (e.keyCode === 27 || (e.ctrlKey && e.keyCode === 70)) {
      if (isVisibleModal) {
        setVisibleModal(false);
      } else if (e.keyCode !== 27) {
        e.preventDefault();
        setVisibleModal(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDownHandler);
    return () => {
      window.removeEventListener('keydown', onKeyDownHandler);
    };
  }, [isVisibleModal]);

  return (
    <SideBarHeaderStyled>
      {/* Logo */}
      <div className={EClassNames.LOGO_WRAPPER}>
        <img alt="logo" src={Logo} />
      </div>

      <div onClick={() => setVisibleModal(true)}>
        <Input
          className={EClassNames.INPUT_FILTER}
          disabled
          placeholder="Find endpoint:"
          prefix={<SearchOutlined />}
          suffix={<img alt="slash-in-square" src={SlashInSquare} />}
          size="middle"
        />
      </div>

      {/* MODAL ENDPOINT FINDER */}
      <ModalEndpointFinder
        isVisibleModal={isVisibleModal}
        setVisibleModal={setVisibleModal}
      />
    </SideBarHeaderStyled>
  );
};

export default SideBarHeader;
