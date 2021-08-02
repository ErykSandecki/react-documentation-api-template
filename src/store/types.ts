// others
import { TConfig } from './config/types';
import { TGroupedEndpoint } from './groupedEndpoints/types';

export type TDataBase = [{ config: TConfig }, Array<TGroupedEndpoint>];
