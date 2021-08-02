// @ts-nocheck
const queryParamsExtract = (queryParams: string) => {
  const mappedQueryParams = {};
  queryParams
    .substr(1)
    .split('&')
    .forEach((query) => {
      const splittedQuery = query.split('=');
      mappedQueryParams[splittedQuery[0]] = splittedQuery[1];
    });

  return mappedQueryParams;
};

export default queryParamsExtract;
