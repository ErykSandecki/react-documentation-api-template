// @ts-nocheck
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Modal, Popconfirm } from 'antd';

// components
import Select from '../../DataEntry/Select/Select';

// others
import ArrowSideBar from '../../../assets/icons/arrow-sidebar-light.svg';
import Trash from '../../../assets/icons/trash.svg';
import { TParam } from '../../../store/groupedEndpoints/types';

// styles
import { EClassNames } from './classNames';
import { ParamsListElement as ParamsListElementStyled } from './ParamsListElementStyled';
import TextEditable from '../../TextEditable/TextEditable';
import Input from '../../DataEntry/Input/Input';
import Checkbox from '../../DataEntry/Checkbox/Checkbox';

type TProps = {
  visible: boolean;
  indexOfEndpoint: number;
  indexOfGroup: number;
  indexOfParam: number;
  onChangeVisibilityElementHandler: (index: number) => void;
  onRemoveParamHandler: (index: number) => void;
  options: Array<{ text: string; value: number | string }>;
  param: TParam;
  paramName: string;
  updateEndpoint: (payload: TUpdateEndpointPayload) => void;
};

const ParamsListElement: FunctionComponent<TProps> = ({
  visible,
  indexOfEndpoint,
  indexOfGroup,
  indexOfParam,
  onChangeVisibilityElementHandler,
  onRemoveParamHandler,
  options,
  param,
  paramName,
  updateEndpoint,
}) => {
  const { description, isOptional, name, type } = param;
  const [isCustomParam, setIsCustomParam] = useState(false);
  const [typeParam, setTypeParam] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const payload: TUpdateEndpointPayload = {
    indexOfEndpoint,
    indexOfGroup,
    restPath: [],
    value: '',
  };

  const updateEndpointHandler = (value: string, key: string): void => {
    payload.restPath = [paramName, indexOfParam, key];
    payload.value = value;
    setModalVisible(false);
    updateEndpoint(payload);
  };

  return (
    <ParamsListElementStyled visible={visible}>
      {/* HEADER */}
      <p className={EClassNames.PARAM_HEADER}>
        {/* COLLAPSE OR EXTEND */}
        <img
          alt="arrow-sidebar"
          className={EClassNames.ARROW}
          onClick={() => onChangeVisibilityElementHandler(indexOfParam)}
          src={ArrowSideBar}
        />

        {/* REMOVE */}
        <Popconfirm
          title="Do you want, remove this param?"
          onConfirm={() => onRemoveParamHandler(indexOfParam)}
          okText="Remove"
          cancelText="Cancel"
        >
          <img alt="trash" className={EClassNames.TRASH} src={Trash} />
        </Popconfirm>

        <span
          contentEditable={true}
          className={EClassNames.PARAM_NAME}
          suppressContentEditableWarning
          onBlur={(e) => updateEndpointHandler(e.target.innerText, 'name')}
        >
          {name ? name : 'name'}
        </span>
        <span
          className={EClassNames.PARAM_TYPE}
          onClick={() => setModalVisible(true)}
        >
          {type ? type : 'type'}
        </span>
        <Popconfirm
          title="Do you want, set param as optional?"
          onConfirm={() => updateEndpointHandler(true, 'isOptional')}
          onCancel={() => updateEndpointHandler(false, 'isOptional')}
          okText="Yes"
          cancelText="No"
        >
          <span
            className={
              isOptional
                ? EClassNames.PARAM_OPTIONAL
                : EClassNames.PARAM_REQUIRED
            }
          >
            {isOptional ? 'Optional' : 'Required'}
          </span>
        </Popconfirm>
      </p>

      {/* DESCRIPTION */}
      {visible && (
        <TextEditable
          className={EClassNames.PARAM_DESCRIPTION}
          text={description ? description : 'Enter here new description:'}
          onBlur={(e) =>
            updateEndpointHandler(e.target.innerText, 'description')
          }
        />
      )}

      {/* MODAL */}
      <Modal
        title="Type param"
        visible={isModalVisible}
        okText="Submit"
        onOk={() => updateEndpointHandler(typeParam, 'type')}
        onCancel={() => setModalVisible(false)}
      >
        {isCustomParam ? 'Enter type param:' : 'Select type param:'}
        {isCustomParam ? (
          <Input
            placeholder="Custom type param:"
            onChange={(e) => setTypeParam(e.target.value)}
            value={typeParam}
            size="middle"
            styles={{ marginBottom: '25px' }}
          />
        ) : (
          <Select
            options={options}
            defaultValue={typeParam}
            onChange={(value) => setTypeParam(value)}
            size="middle"
            style={{ marginBottom: '25px', width: '100%' }}
          />
        )}
        <Checkbox
          checked={isCustomParam}
          onChange={(e) => setIsCustomParam(e.target.checked)}
        >
          Is custom type param?
        </Checkbox>
      </Modal>
    </ParamsListElementStyled>
  );
};

export default ParamsListElement;
