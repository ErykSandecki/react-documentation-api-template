// store
import { EGroupedEndpointsActionsType } from './actionsType';

export enum ETypeParams {
  BOOLEAN = 'boolean',
  DATE = 'Date',
  NUMBER = 'number',
  STRING = 'string',
}

export type TParam = {
  name: string;
  type: ETypeParams;
  isOptional: boolean;
  description: string;
};

export type TEndpoint = {
  endpointName: string;
  description?: string;
  messages?: string;
  queryParams?: Array<TParam>;
  requestParams?: Array<TParam>;
  responseParams?: Array<TParam>;
  path?: string;
  response?: string;
  request?: string;
  type?: string;
  url?: string;
};

export type TGroupedEndpoint = {
  groupName: string;
  endpoints: Array<TEndpoint>;
};

export type TAddNewEndpointPayload = {
  indexOfGroup: number;
  endpointName: string;
};

export type TUpdateEndpointPayload = {
  indexOfGroup: number;
  indexOfEndpoint: number;
  restPath: Array<string>;
  value: any;
};

export type TGroupedEndpointsState = {
  data: Array<TGroupedEndpoint>;
  isPending: boolean;
};

export type TGroupedEndpointsSuccess = {
  type: typeof EGroupedEndpointsActionsType.GROUPED_ENDPOINTS_SUCCESS;
  payload: Array<TGroupedEndpoint>;
};

export type TAddNewGroup = {
  type: typeof EGroupedEndpointsActionsType.ADD_NEW_GROUP;
  payload: string;
};

export type TAddNewEndpoint = {
  type: typeof EGroupedEndpointsActionsType.ADD_NEW_ENDPOINT;
  payload: TAddNewEndpointPayload;
};

export type TUpdateEndpoint = {
  type: typeof EGroupedEndpointsActionsType.UPDATE_ENDPOINT;
  payload: TUpdateEndpointPayload;
};
