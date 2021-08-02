// @ts-nocheck
import React, { FunctionComponent, useState } from 'react';
import { AppstoreAddOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

// components
import Button from '../../General/Button/Button';
import Input from '../../DataEntry/Input/Input';
import Select from '../../DataEntry/Select/Select';

// others
import {
  TAddNewEndpointPayload,
  TGroupedEndpoint,
} from '../../../store/groupedEndpoints/types';

// styles
import { SideBarFooter as SideBarFooterStyled } from './SideBarFooterStyled';

type TProps = {
  addNewGroup: (payload: TAddNewEndpointPayload) => void;
  data: Array<TGroupedEndpoint>;
};

const SideBarFooter: FunctionComponent<TProps> = ({ addNewGroup, data }) => {
  const [endpointName, setEndpointName] = useState('');
  const [indexOfGroup, setIndexOfGroup] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const groupedNames = data.map(({ groupName }, i) => ({
    text: groupName,
    value: i,
  }));

  const onSubmitHandler = () => {
    addNewGroup({ indexOfGroup, endpointName });
    setEndpointName('');
    setModalVisible(false);
  };

  return (
    <SideBarFooterStyled>
      {/* SUGGESTION */}
      <p>Do you need a new endpoint?</p>
      <Button
        onClick={() => setModalVisible(true)}
        size="middle"
        type="primary"
      >
        Create {<AppstoreAddOutlined />}
      </Button>

      {/* MODAL */}
      <Modal
        title="Add New Endpoint"
        visible={isModalVisible}
        okText="Create"
        onOk={onSubmitHandler}
        onCancel={() => setModalVisible(false)}
      >
        <label>Select group name:</label>
        <Select
          options={groupedNames}
          defaultValue={groupedNames[0].value}
          onChange={(value) => setIndexOfGroup(value)}
          size="middle"
          style={{ marginBottom: '25px', width: '100%' }}
        />
        <label>Endpoint name:</label>
        <Input
          onChange={(e) => setEndpointName(e.target.value)}
          placeholder="Endpoint name:"
          size="middle"
          value={endpointName}
        />
      </Modal>
    </SideBarFooterStyled>
  );
};

export default SideBarFooter;
