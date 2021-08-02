// @ts-nocheck
import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';

// components
import Input from '../DataEntry/Input/Input';
import { enhancePageHeader } from './enhancePageHeader';

// others
import Group from '../../assets/icons/group.svg';
import Home from '../../assets/icons/home.svg';
import { ERoutesPathes } from '../../core/Routing/constants';

// styles
import { PageHeader as PageHeaderStyled } from './PageHeaderStyled';

export type TInnerProps = {
  addNewGroup: (payload: string) => void;
};

const PageHeader: FunctionComponent<TInnerProps> = ({ addNewGroup }) => {
  const [value, setValue] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const onSubmitHandler = () => {
    addNewGroup(value);
    setValue('');
    setModalVisible(false);
  };

  return (
    <PageHeaderStyled>
      {/* LINkS */}
      <Link to={ERoutesPathes.HOME_PAGE}>
        <span>Home</span> <img alt="home" src={Home} />
      </Link>
      <a
        href="javascript:void(0)"
        onClick={() => setModalVisible(!isModalVisible)}
      >
        <span>Add Group</span> <img alt="group" src={Group} />
      </a>

      {/* MODAL */}
      <Modal
        title="Add New Group"
        visible={isModalVisible}
        okText="Create"
        onOk={onSubmitHandler}
        onCancel={() => setModalVisible(false)}
      >
        <label>Group name:</label>
        <Input
          onChange={(e) => setValue(e.target.value)}
          placeholder="Group name:"
          size="middle"
          value={value}
        />
      </Modal>
    </PageHeaderStyled>
  );
};

export default enhancePageHeader(PageHeader);
