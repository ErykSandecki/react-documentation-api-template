// @ts-nocheck
import React, { FunctionComponent } from 'react';

// components
import EndpointPageLeftColumn from '../../components/EndpointPage/EndpointPageLeftColumn/EndpointPageLeftColumn';
import EndpointPageRightColumn from '../../components/EndpointPage/EndpointPageRightColumn/EndpointPageRightColumn';

// others
import { TRoutingProps } from '../types';
import {
  TGroupedEndpoint,
  TUpdateEndpointPayload,
} from '../../store/groupedEndpoints/types';

// services
import queryParamsExtract from '../../services/queryParamsExtract';

// styles
import { EndpointPage as EndpointPageStyled } from './EndpointPageStyled';
import { enhanceEndpointPage } from './enhanceEndpointPage';

export type TInnerProps = TRoutingProps & {
  data: TGroupedEndpoint;
  updateEndpoint: (payload: TUpdateEndpointPayload) => void;
};

const EndpointPage: FunctionComponent<TInnerProps> = ({
  data,
  location,
  updateEndpoint,
}) => {
  const { indexOfEndpoint, indexOfGroup } = queryParamsExtract(location.search);
  const parsedIndexOfEndpoint = parseInt(indexOfEndpoint);
  const parsedIndexOfGroup = parseInt(indexOfGroup);
  const endpoint = data[parsedIndexOfGroup].endpoints[parsedIndexOfEndpoint];
  const payload: TUpdateEndpointPayload = {
    indexOfEndpoint: parsedIndexOfEndpoint,
    indexOfGroup: parsedIndexOfGroup,
    restPath: [],
    value: '',
  };

  const updateEndpointHandler = (value: string, restPath: string): void => {
    payload.restPath = [restPath];
    payload.value = value;
    updateEndpoint(payload);
  };

  return (
    <EndpointPageStyled>
      <EndpointPageLeftColumn
        endpoint={endpoint}
        indexOfEndpoint={parsedIndexOfEndpoint}
        indexOfGroup={parsedIndexOfGroup}
        updateEndpointHandler={updateEndpointHandler}
      />
      <EndpointPageRightColumn
        endpoint={endpoint}
        updateEndpointHandler={updateEndpointHandler}
      />
    </EndpointPageStyled>
  );
};

export default enhanceEndpointPage(EndpointPage);
