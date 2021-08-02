// @ts-nocheck
import React, { FunctionComponent, useState } from 'react';

import { TUpdateEndpointPayload } from '../../store/groupedEndpoints/types';

// styles
import { RequestTypeForm as RequestTypeStyled } from './RequestTypeFormStyled';
import { enhanceRequestTypeForm } from './enhanceRequestTypeForm';
import { ETypeRequest } from './constants';
import { Modal } from 'antd';
import Select from '../DataEntry/Select/Select';
import Input from '../DataEntry/Input/Input';
import { SideBarFooter as SideBarFooterStyled } from '../SideBar/SideBarFooter/SideBarFooterStyled';

export type TInnerProps = {
  updateEndpoint: (payload: TUpdateEndpointPayload) => void;
};

type TProps = TInnerProps & {
  indexOfEndpoint: number;
  indexOfGroup: number;
  type: string;
};

const RequestTypeForm: FunctionComponent<TProps> = ({
  indexOfEndpoint,
  indexOfGroup,
  type,
  updateEndpoint,
}) => {
  const color = type ? ETypeRequest[type] : '#ffffff';
  const [requestType, setRequestType] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const options = [];
  const payload: TUpdateEndpointPayload = {
    indexOfEndpoint,
    indexOfGroup,
    restPath: [],
    value: '',
  };

  for (const key in ETypeRequest) {
    options.push({
      text: key,
      value: key,
    });
  }

  const onSubmitHandler = () => {
    payload.value = requestType;
    payload.restPath = ['type'];

    setModalVisible(false);
    updateEndpoint(payload);
  };

  return (
    <RequestTypeStyled
      color={color}
      onClick={() => !isModalVisible && setModalVisible(true)}
    >
      {type ? type : 'NONE'}
      {/* MODAL */}
      <Modal
        title="Type request"
        visible={isModalVisible}
        okText="Submit"
        onOk={onSubmitHandler}
        onCancel={() => setModalVisible(false)}
      >
        <label>Select type request:</label>
        <Select
          options={options}
          defaultValue={requestType}
          onChange={(value) => setRequestType(value)}
          size="middle"
          style={{ marginBottom: '25px', width: '100%' }}
        />
      </Modal>
    </RequestTypeStyled>
  );
};

export default enhanceRequestTypeForm(RequestTypeForm);
