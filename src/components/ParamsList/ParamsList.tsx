// @ts-nocheck
import React, { FunctionComponent, useEffect, useState } from 'react';
import map from 'lodash/map';

// components
import ParamsListForm from './ParamsListForm/ParamsListForm';
import { enhanceParamsList } from './enhanceParamsList';

// others
import { ETypeParams, TEndpoint } from '../../store/groupedEndpoints/types';

// styles
import { ParamsList as ParamsListStyled } from './ParamsListStyled';
import ParamsListElement from './ParamsListElement/ParamsListElement';

export type TInnerProps = {
  updateEndpoint: (payload: TUpdateEndpointPayload) => void;
};

type TProps = TInnerProps & {
  endpoint: TEndpoint;
  indexOfEndpoint: number;
  indexOfGroup: number;
  paramName: string;
  title: string;
};

const ParamsList: FunctionComponent<TProps> = ({
  endpoint,
  indexOfEndpoint,
  indexOfGroup,
  updateEndpoint,
  paramName,
  title,
}) => {
  const [areVisible, setVisible] = useState([]);
  const payload: TUpdateEndpointPayload = {
    indexOfEndpoint,
    indexOfGroup,
    restPath: [],
    value: '',
  };
  const options = [];

  for (const key in ETypeParams) {
    options.push({
      text: ETypeParams[key],
      value: ETypeParams[key],
    });
  }

  useEffect(() => {
    setVisible(endpoint[paramName] ? endpoint[paramName].map(() => false) : []);
  }, [endpoint]);

  const areAllVisible = (): boolean => {
    if (areVisible.length > 0) {
      return areVisible.every((value: boolean) => value);
    }
    return false;
  };

  const onChangeVisibilityElementHandler = (index: number): void => {
    areVisible[index] = !areVisible[index];
    setVisible([...areVisible]);
  };

  const onChangeVisibilityAllElementsHandler = (): void => {
    if (areVisible.length > 0) {
      const visible = !areAllVisible();
      setVisible(areVisible.map((_) => visible));
    }
  };

  const onRemoveParamHandler = (index: number): void => {
    const params = [...endpoint[paramName]];
    params.splice(index, 1);
    payload.restPath = [paramName];
    payload.value = params;

    updateEndpoint(payload);
  };

  return (
    <ParamsListStyled>
      {/* TITLE */}
      <h2>
        {title}
        <p onClick={onChangeVisibilityAllElementsHandler}>
          {areAllVisible() ? 'Hide all' : 'Show all'}
        </p>
      </h2>

      {/* PARAM LIST */}
      {map(endpoint[paramName], (param, i) => (
        <ParamsListElement
          visible={areVisible.length > 0 ? areVisible[i] : false}
          indexOfEndpoint={indexOfEndpoint}
          indexOfGroup={indexOfGroup}
          indexOfParam={i}
          key={i}
          onChangeVisibilityElementHandler={onChangeVisibilityElementHandler}
          onRemoveParamHandler={onRemoveParamHandler}
          options={options}
          param={param}
          paramName={paramName}
          updateEndpoint={updateEndpoint}
        />
      ))}

      {/* PARAM LIST FORM */}
      <ParamsListForm
        endpoint={endpoint}
        options={options}
        paramName={paramName}
        indexOfEndpoint={indexOfEndpoint}
        indexOfGroup={indexOfGroup}
        updateEndpoint={updateEndpoint}
      />
    </ParamsListStyled>
  );
};

export default enhanceParamsList(ParamsList);
