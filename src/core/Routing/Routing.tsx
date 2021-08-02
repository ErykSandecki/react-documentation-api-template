// @ts-nocheck
// eslint-disable-next-line
import React, { FunctionComponent } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import map from 'lodash/map';

// components
import PageHeader from '../../components/PageHeader/PageHeader';

// others
import { EMainRoutes } from '../../pages/constants';

// styles
import { Routing as RoutingStyled } from './RoutingStyled';

const Routing: FunctionComponent<{}> = () => {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { display: 'none' },
    config: { duration: 500 },
  });

  const routes = [...EMainRoutes];

  return map(transitions, ({ item: location, props, key }) => (
    <RoutingStyled key={key} style={props}>
      <PageHeader />
      <Switch location={location}>
        {[
          routes.map(({ Component, exact, path }, i) => (
            <Route key={i} exact={exact} path={path}>
              <Component location={location} />
            </Route>
          )),
        ]}
      </Switch>
    </RoutingStyled>
  ));
};

export default Routing;
