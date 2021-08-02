// @ts-nocheck
import React, { FunctionComponent } from 'react';
// components
import CodeContainer from '../../CodeContainer/CodeContainer';
// others
import { TEndpoint } from '../../../store/groupedEndpoints/types';
// styles
import { EClassNames } from './classNames';
import { EndpointPageRightColumn as RightColumnStyled } from './EndpointPageRightColumnStyled';
import { EStyleCode } from '../../CodeContainer/constants';

export type TProps = {
  endpoint: TEndpoint;
  updateEndpointHandler: (value: string, restPath: string) => void;
};

const EndpointPageRightColumn: FunctionComponent<TProps> = ({
  endpoint,
  updateEndpointHandler,
}) => (
  <RightColumnStyled>
    {/* REQUEST */}
    <CodeContainer
      description={
        endpoint.request
          ? endpoint.request
          : 'Enter new Request, e.g: \n{\n   value: type,\n}'
      }
      onBlur={(value: string) => updateEndpointHandler(value, 'request')}
      styleCode={EStyleCode.PRIMARY}
      title="Request:"
    />

    <div className={EClassNames.DIVIDER}></div>

    {/* RESPONSE */}
    <CodeContainer
      description={
        endpoint.response
          ? endpoint.response
          : 'Enter new Response, e.g: \n{\n   value: type,\n}'
      }
      onBlur={(value: string) => updateEndpointHandler(value, 'response')}
      styleCode={EStyleCode.PRIMARY}
      title="Response:"
    />

    <div className={EClassNames.DIVIDER}></div>

    {/* MESSAGES */}
    <CodeContainer
      description={
        endpoint.messages
          ? endpoint.messages
          : 'Enter new Message, e.g: \n{\n   message.someMessage,\n}'
      }
      onBlur={(value: string) => updateEndpointHandler(value, 'messages')}
      styleCode={EStyleCode.PRIMARY}
      title="Messages:"
    />
  </RightColumnStyled>
);

export default EndpointPageRightColumn;
