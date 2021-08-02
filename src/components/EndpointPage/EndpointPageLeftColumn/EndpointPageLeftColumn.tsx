// @ts-nocheck
import React, { FunctionComponent } from 'react';

// components
import Description from '../../Description/Description';
import Title from '../../Title/Title';

// styles
import CodeContainer from '../../CodeContainer/CodeContainer';
import RequestType from '../../RequestTypeForm/RequestTypeForm';
import { EClassNames } from './classNames';
import { EndpointPageLeftColumn as HomePageLeftColumnStyled } from './EndpointPageLeftColumnStyled';
import { TEndpoint } from '../../../store/groupedEndpoints/types';
import ParamsList from '../../ParamsList/ParamsList';

type TProps = {
  endpoint: TEndpoint;
  updateEndpointHandler: (value: string, restPath: string) => void;
};

const EndpointPageLeftColumn: FunctionComponent<TProps> = ({
  endpoint,
  updateEndpointHandler,
  ...restProps
}) => (
  <HomePageLeftColumnStyled>
    <div className={EClassNames.HEADER}>
      {/* TITLE */}
      <Title
        contentEditable
        onBlur={(e) =>
          updateEndpointHandler(e.target.innerText, 'endpointName')
        }
        suppressContentEditableWarning
      >
        {endpoint.endpointName}
      </Title>
      <RequestType type={endpoint.type} {...restProps} />
    </div>

    {/* DESCRIPTION */}
    <Description
      contentEditable
      description={
        endpoint.description
          ? endpoint.description
          : 'No description, click on this text to edit.'
      }
      onBlur={(e) => updateEndpointHandler(e.target.innerText, 'description')}
    />

    {/* CODE CONTAINER */}
    <CodeContainer
      description={endpoint.url ? endpoint.url : 'Enter new Url, e.g: /path'}
      onBlur={(value: string) => updateEndpointHandler(value, 'url')}
      title="Url:"
    />

    {/* PARAMS LIST */}
    <ParamsList
      endpoint={endpoint}
      paramName="queryParams"
      title="Query Params:"
      {...restProps}
    />

    <ParamsList
      endpoint={endpoint}
      paramName="requestParams"
      title="Request Params:"
      {...restProps}
    />

    <ParamsList
      endpoint={endpoint}
      paramName="responseParams"
      title="Response Params:"
      {...restProps}
    />
  </HomePageLeftColumnStyled>
);

export default EndpointPageLeftColumn;
