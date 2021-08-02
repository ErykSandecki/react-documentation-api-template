import React from 'react';

export type TRoutingData = {
  Component: React.FunctionComponent<any>;
  exact?: boolean;
  path: string;
};
