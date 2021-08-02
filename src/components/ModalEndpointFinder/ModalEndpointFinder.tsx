// @ts-nocheck
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

// components
import { enhanceModalEndpointFinder } from './enhanceModalEndpointFinder';

// others
import Enter from '../../assets/icons/enter.svg';
import NavigateDown from '../../assets/icons/navigate-down.svg';
import NavigateUp from '../../assets/icons/navigate-up.svg';
import Search from '../../assets/icons/search.svg';
import { ERoutesPathes } from '../../core/Routing/constants';
import { TGroupedEndpoint } from '../../store/groupedEndpoints/types';

// services
import debounce from '../../services/debounce';
import extractAllEndpoints from './services/extractAllEndpoints';
import filterEndpoints from './services/filterEndpointsByEndpointNameOrGroupName';

// styles
import { EClassNames } from './classNames';
import { ModalEndpointFinder as ModalEndpointFinderStyled } from './ModalEndpointFinderStyled';

export type TInnerProps = {
  data: Array<TGroupedEndpoint>;
  history: any;
};

export type TProps = TInnerProps & {
  isVisibleModal: boolean;
  setVisibleModal: (flag: boolean) => void;
};

const ModalEndpointFinder: FunctionComponent<TProps> = ({
  data,
  history,
  isVisibleModal,
  setVisibleModal,
}) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  const [selectedElement, setSelectElement] = useState(0);
  const [availableEndpoints, setAvailableEndpoints]: Array<any> = useState(
    extractAllEndpoints(data)
  );

  const onClickHandler = (e: Event) => {
    inputRef.current.focus();
    e.stopPropagation();
  };

  const onChangeHandler = (e: React.ChangeEvent<any>): void => {
    const { value } = e.target;
    setValue(value);
    setSelectElement(0);

    debounce(
      () =>
        setAvailableEndpoints(
          filterEndpoints(value, extractAllEndpoints(data))
        ),
      500
    );
  };

  const onKeyDownHandler = (e): void => {
    if (isVisibleModal) {
      onKeyEnter(e);
      onKeyArrows(e);
    }
  };

  const onKeyEnter = (e): void => {
    if (e.keyCode === 13) {
      const endpoint = availableEndpoints[selectedElement];
      if (endpoint) {
        const { indexOfGroup, indexOfEndpoint } = endpoint;

        setVisibleModal(false);
        history.push(`${ERoutesPathes.ENDPOINT}?indexOfGroup=${indexOfGroup}&indexOfEndpoint=${indexOfEndpoint}
        `);
      }
    }
  };

  const onKeyArrows = (e): void => {
    const lastIndex = availableEndpoints.length - 1;
    if (e.keyCode === 38) {
      setSelectElement(selectedElement > 0 ? selectedElement - 1 : lastIndex);
    } else if (e.keyCode === 40) {
      setSelectElement(selectedElement < lastIndex ? selectedElement + 1 : 0);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDownHandler);
    return () => {
      window.removeEventListener('keydown', onKeyDownHandler);
    };
  }, [selectedElement, availableEndpoints, isVisibleModal]);

  useEffect(() => {
    setAvailableEndpoints(extractAllEndpoints(data));
  }, [data]);

  useEffect(() => {
    if (inputRef && isVisibleModal) {
      inputRef.current.focus();
    }
  }, [isVisibleModal]);

  if (!isVisibleModal) {
    return null;
  }

  return (
    <ModalEndpointFinderStyled onClick={() => setVisibleModal(false)}>
      <div className={EClassNames.MODAL_CONTAINER} onClick={onClickHandler}>
        {/* INPUT */}
        <div className={EClassNames.INPUT_WRAPPER}>
          <img
            alt="search"
            className={EClassNames.INPUT_WRAPPER_ICON}
            src={Search}
          />
          <input
            className={EClassNames.INPUT}
            placeholder="Filter by endpoint name or group name:"
            onChange={onChangeHandler}
            ref={inputRef}
            value={value}
          />
        </div>

        {/* LIST ENDPOINT */}
        <div className={EClassNames.LIST_WRAPPER}>
          {availableEndpoints.map(
            ({ endpointName, groupName, indexOfEndpoint, indexOfGroup }, i) => (
              <Link
                className={`${EClassNames.LINK} ${
                  selectedElement === i ? EClassNames.LINK_SELECTED : ''
                }`}
                key={i}
                onMouseEnter={() => setSelectElement(i)}
                onClick={() => setVisibleModal(false)}
                to={`${ERoutesPathes.ENDPOINT}?indexOfGroup=${indexOfGroup}&indexOfEndpoint=${indexOfEndpoint}`}
              >
                {endpointName} - <span>{groupName}</span>{' '}
                <img alt="enter" src={Enter} />
              </Link>
            )
          )}
        </div>

        {/* FOOTER */}
        <div className={EClassNames.FOOTER}>
          <div className={EClassNames.PROMPT}>
            <img alt="navigate-up" src={NavigateUp} />
            <img alt="navigate-up" src={NavigateDown} />
            <span>Navigate</span>
          </div>

          <div className={EClassNames.PROMPT}>
            <img alt="enter" src={Enter} />
            <span>Go</span>
          </div>

          <div className={EClassNames.PROMPT}>
            <span>Open On</span>
            <kbd>Ctrl-F</kbd>
          </div>
        </div>
      </div>
    </ModalEndpointFinderStyled>
  );
};

export default withRouter(enhanceModalEndpointFinder(ModalEndpointFinder));
