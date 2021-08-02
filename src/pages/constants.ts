// @ts-nocheck
// components
import HomePage from './HomePage/HomePage';
import EndpointPage from './EndpointPage/EndpointPage';

// others
import { TRoutingData } from '../core/Routing/types';
import { ERoutesPathes } from '../core/Routing/constants';

export const EMainRoutes: Array<TRoutingData> = [
  {
    Component: HomePage,
    path: ERoutesPathes.HOME_PAGE,
    exact: true,
  },
  {
    Component: EndpointPage,
    path: ERoutesPathes.ENDPOINT,
  },
];
