// @ts-nocheck
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import map from 'lodash/map';

// others
import { TGroupedEndpoint } from '../../../store/groupedEndpoints/types';
import { ERoutesPathes } from '../../../core/Routing/constants';

// styles
import { EClassNames } from './classNames';
import { SideBarGroup as SideBarGroupStyled } from './SideBarGroupStyled';

export type TInnerProps = {
  groupedEndpoint: TGroupedEndpoint;
  indexOfEndpoint: number;
  indexOfGroup: number;
  isSelectedGroup: boolean;
};

const SideBarGroup: FunctionComponent<TInnerProps> = ({
  groupedEndpoint,
  indexOfEndpoint,
  indexOfGroup,
  isSelectedGroup,
}) => {
  const [visibleLinks, setVisibleLinks] = useState(isSelectedGroup);
  const { groupName, endpoints } = groupedEndpoint;

  useEffect(() => {
    setVisibleLinks(isSelectedGroup);
  }, [isSelectedGroup]);

  return (
    <SideBarGroupStyled visibleLinks={visibleLinks}>
      {/* TITLE */}
      <h6
        className={EClassNames.GROUP_NAME}
        onClick={() => setVisibleLinks(!visibleLinks)}
      >
        {groupName}
      </h6>

      {/* ENDPOINTS */}
      {visibleLinks &&
        map(endpoints, ({ endpointName }, index) => (
          <Link
            className={
              isSelectedGroup && indexOfEndpoint == index
                ? EClassNames.LINK_SELECTED
                : ''
            }
            key={index}
            to={`${ERoutesPathes.ENDPOINT}?indexOfGroup=${indexOfGroup}&indexOfEndpoint=${index}`}
          >
            {endpointName}
          </Link>
        ))}
    </SideBarGroupStyled>
  );
};

export default SideBarGroup;
