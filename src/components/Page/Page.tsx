// eslint-disable-next-line
import React, { FunctionComponent } from 'react';

// components
import PageLoader from './PageLoader/LoaderPage';

type TProps = {
  children: React.ReactNode;
  loadedData: boolean;
};

const Page: FunctionComponent<TProps> = ({ children, loadedData }) => (
  <>
    <PageLoader loadedData={loadedData} />
    {loadedData && <div>{children}</div>}
  </>
);

export default Page;
