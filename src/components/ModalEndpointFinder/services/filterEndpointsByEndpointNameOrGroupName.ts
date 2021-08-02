const filterEndpointsByEndpointNameOrGroupName = (
  value: string,
  list: Array<any>
): Array<string> =>
  list.filter(
    ({ endpointName, groupName }) =>
      endpointName.toLowerCase().includes(value.toLowerCase()) ||
      groupName.toLowerCase().includes(value.toLowerCase())
  );

export default filterEndpointsByEndpointNameOrGroupName;
