// @ts-nocheck
import React, { FunctionComponent, useState } from 'react';
import { Modal } from 'antd';

// components
import Checkbox from '../../DataEntry/Checkbox/Checkbox';
import Input from '../../DataEntry/Input/Input';
import Select from '../../DataEntry/Select/Select';
import TextArea from '../../DataEntry/TextArea/TextArea';

// others
import { TEndpoint, TParam } from '../../../store/groupedEndpoints/types';

// styles
import { ParamsListForm as ParamsListFormStyled } from './ParamsListFormStyled';
import { EClassNames } from './classNames';

type TProps = {
  endpoint: TEndpoint;
  indexOfEndpoint: number;
  indexOfGroup: number;
  options: Array<{ text: string; value: number | string }>;
  paramName: string;
  updateEndpoint: (payload: TUpdateEndpointPayload) => void;
};

const ParamsListForm: FunctionComponent<TProps> = ({
  endpoint,
  indexOfEndpoint,
  indexOfGroup,
  options,
  paramName,
  updateEndpoint,
}) => {
  const [isCustomParam, setIsCustomParam] = useState(false);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [isOptional, setIsOptional] = useState(false);
  const [description, setDescription] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const payload: TUpdateEndpointPayload = {
    indexOfEndpoint,
    indexOfGroup,
    restPath: [],
    value: '',
  };

  const onSubmitHandler = (): void => {
    const params: Array<TParam> = endpoint[paramName]
      ? [...endpoint[paramName]]
      : [];

    params.push({
      description,
      isOptional,
      name,
      type,
    });

    triggerAction(params);
    clearForm();
  };

  const triggerAction = (params: Array<TParam>): void => {
    payload.restPath = [paramName];
    payload.value = params;

    updateEndpoint(payload);
    setModalVisible(false);
  };

  const clearForm = (): void => {
    setDescription('');
    setIsOptional(false);
    setName('');
  };

  return (
    <ParamsListFormStyled>
      <h5>
        Do you need a new param? You can create by clicking:{' '}
        <span
          className={EClassNames.NEW_PARAM}
          onClick={() => setModalVisible(true)}
        >
          here
        </span>
      </h5>

      {/* MODAL */}
      <Modal
        title="Create New Param"
        visible={isModalVisible}
        okText="Submit"
        onOk={onSubmitHandler}
        onCancel={() => setModalVisible(false)}
      >
        <label>Param name:</label>
        <Input
          placeholder="Param name:"
          onChange={(e) => setName(e.target.value)}
          value={name}
          size="middle"
          styles={{ marginBottom: '25px' }}
        />
        <label>
          {isCustomParam ? 'Enter type param:' : 'Select type param:'}
        </label>
        {isCustomParam ? (
          <Input
            placeholder="Custom type param:"
            onChange={(e) => setType(e.target.value)}
            value={type}
            size="middle"
            styles={{ marginBottom: '25px' }}
          />
        ) : (
          <Select
            options={options}
            defaultValue={type}
            onChange={(value) => setType(value)}
            size="middle"
            style={{ marginBottom: '25px', width: '100%' }}
          />
        )}
        <label>Description:</label>
        <TextArea
          placeholder="Description:"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          size="middle"
          styles={{ marginBottom: '25px' }}
        />
        <Checkbox
          checked={isOptional}
          onChange={(e) => setIsOptional(e.target.checked)}
        >
          Optional param
        </Checkbox>
        <Checkbox
          checked={isCustomParam}
          onChange={(e) => setIsCustomParam(e.target.checked)}
        >
          Is custom type param?
        </Checkbox>
      </Modal>
    </ParamsListFormStyled>
  );
};

export default ParamsListForm;
