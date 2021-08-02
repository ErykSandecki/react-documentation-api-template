// @ts-nocheck
import React, { FunctionComponent } from 'react';
import { withRouter } from 'react-router-dom';

// components
import SideBarFooter from './SideBarFooter/SideBarFooter';
import SideBarGroup from './SideBarGroup/SideBarGroup';
import SideBarHeader from './SideBarHeader/SideBarHeader';
import { enhanceSideBar } from './enhanceSideBar';

// others
import { TAddNewEndpointPayload } from '../../store/groupedEndpoints/types';
import { TGroupedEndpoint } from '../../store/groupedEndpoints/types';

// services
import queryParamsExtract from '../../services/queryParamsExtract';

// styles
import { EClassNames } from './classNames';
import { SideBar as SideBarStyled } from './SideBarStyled';
import { addNewEndpoint } from '../../store/groupedEndpoints/actions';

export type TInnerProps = {
  addNewGroup: (payload: TAddNewEndpointPayload) => void;
  data: Array<TGroupedEndpoint>;
  history: any;
};

const SideBar: FunctionComponent<TInnerProps> = ({
  addNewGroup,
  data,
  history,
}) => {
  const { indexOfEndpoint, indexOfGroup } = queryParamsExtract(
    history.location.search
  );

  return (
    <SideBarStyled>
      {/* HEADER */}
      <SideBarHeader />

      {/* LIST */}
      <div className={EClassNames.CONTAINER}>
        {data.map((groupedEndpoint, index) => (
          <SideBarGroup
            groupedEndpoint={groupedEndpoint}
            indexOfGroup={index}
            indexOfEndpoint={indexOfEndpoint}
            isSelectedGroup={indexOfGroup == index}
            key={index}
          />
        ))}
      </div>

      {/* FOOTER */}
      <SideBarFooter addNewGroup={addNewGroup} data={data} />
    </SideBarStyled>
  );
};

export default withRouter(enhanceSideBar(SideBar));
