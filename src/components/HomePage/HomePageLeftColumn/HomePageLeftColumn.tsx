// @ts-nocheck
import React, { FunctionComponent } from 'react';

// components
import Description from '../../Description/Description';
import Title from '../../Title/Title';

// styles
import { HomePageLeftColumn as HomePageLeftColumnStyled } from './HomePageLeftColumnStyled';

const HomePageLeftColumn: FunctionComponent<{}> = () => {
  return (
    <HomePageLeftColumnStyled>
      {/* TITLE */}
      <Title>API Reference</Title>

      {/* DESCRIPTIOn */}
      <Description>
        The {name} API is organized around REST. Our API has predictable
        resource-oriented URLs, accepts form-encoded request bodies, returns
        JSON-encoded responses, and uses standard HTTP response codes,
        authentication, and verbs.
        <br />
        <br />
        The {name} API differs for every account as we release new versions and
        tailor functionality.
        <br />
        <br />
        Additional, you can login on the database, which is available from this
        link -{' '}
        <a rel="noopener noreferrer" target="_blank">
          Database
        </a>
        .
        <br />
        <br />
        Also our application &quot;{name} - API Documentation&quot;, contains
        &quot;nosql&quot; database which is available from this link -{' '}
        <a rel="noopener noreferrer" target="_blank">
          Firebase
        </a>
        .
      </Description>
    </HomePageLeftColumnStyled>
  );
};

export default HomePageLeftColumn;
