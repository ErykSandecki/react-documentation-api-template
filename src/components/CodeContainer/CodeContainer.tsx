// @ts-nocheck
import React, { FunctionComponent, useRef, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { message } from 'antd';

// components
import Tooltip from '../DataDisplay/Tooltip/Tooltip';

// others
import Copy from '../../assets/icons/copy.svg';
import PadlockOpened from '../../assets/icons/padlock-opened.svg';
import PadlockClosed from '../../assets/icons/padlock-closed.svg';
import Pencil from '../../assets/icons/pencil.svg';
import { EStyleCode } from './constants';

// styles
import { CodeContainer as CodeContainerStyled } from './CodeContainerStyles';
import { EClassNames } from './classNames';
import TextParser from '../TextParser/TextParser';

type TProps = {
  onBlur?: (value: string) => void;
  description?: string;
  title?: string;
  styleCode?: EStyleCode;
};

const CodeContainer: FunctionComponent<TProps> = ({
  onBlur,
  description = '',
  title = '',
  styleCode = EStyleCode.DEFAULT,
}) => {
  const [canEdit, setMode] = useState(false);
  const editableText = useRef(null);

  return (
    <CodeContainerStyled styleCode={styleCode}>
      {/* HEADER */}
      <div className={EClassNames.HEADER}>
        <p>{title}</p>
        <nav className={EClassNames.NAV}>
          {/* EDIT TEXT */}
          <Tooltip
            title={`Change of edit mode text: ${canEdit ? 'Lock' : 'Unlock'}`}
          >
            <div
              className={EClassNames.NAV_ITEM}
              onClick={() => setMode(!canEdit)}
            >
              <img
                alt="padlock"
                src={canEdit ? PadlockOpened : PadlockClosed}
              />
            </div>
          </Tooltip>

          <span className={EClassNames.SEPARATOR}>|</span>

          {/* EDIT TEXT */}
          <Tooltip title="Editing of code">
            <div
              className={EClassNames.NAV_ITEM}
              onClick={() => editableText.current?.focus()}
            >
              <img alt="pencil" src={Pencil} />
            </div>
          </Tooltip>

          <span className={EClassNames.SEPARATOR}>|</span>

          {/* COPY TEXT */}
          <Tooltip title="Copy url">
            <CopyToClipboard
              text={description}
              onCopy={() => message.success('The text was copied!')}
            >
              {/* THIS DIV IS NEEDED BECAUSE COPY TO CLIPBOARD OVERWRITTEN FIRST ELEMENT HTML */}
              <div>
                <div className={EClassNames.NAV_ITEM}>
                  <img alt="copy" src={Copy} />
                </div>
              </div>
            </CopyToClipboard>
          </Tooltip>
        </nav>
      </div>

      {/* CODE */}
      <div className={EClassNames.CODE}>
        {canEdit ? (
          <p
            contentEditable={canEdit}
            onBlur={(e) => onBlur(e.target.innerText)}
            ref={editableText}
            suppressContentEditableWarning
          >
            {description}
          </p>
        ) : (
          <TextParser description={description} />
        )}
      </div>
    </CodeContainerStyled>
  );
};

export default CodeContainer;
