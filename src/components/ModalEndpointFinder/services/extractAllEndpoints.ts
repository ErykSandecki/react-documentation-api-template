// @ts-nocheck
// others
import { TGroupedEndpoint } from '../../store/groupedEndpoints/types';

const extractAllEndpoints = (
  groupedEndpoints: Array<TGroupedEndpoint>
): any => {
  const data = [];
  for (let i = 0; i < groupedEndpoints.length; i++) {
    const endpoints = groupedEndpoints[i].endpoints;

    if (endpoints) {
      for (let j = 0; j < endpoints.length; j++) {
        data.push({
          endpointName: endpoints[j].endpointName,
          groupName: groupedEndpoints[i].groupName,
          indexOfGroup: i,
          indexOfEndpoint: j,
        });
      }
    }
  }
  return data;
};

export default extractAllEndpoints;
