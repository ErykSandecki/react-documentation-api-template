// @ts-nocheck
import React, { FunctionComponent, useState, useRef, useEffect } from 'react';

// styles
import { TextEditable as TextEditableStyled } from './TextEditableStyled';
import TextParser from '../TextParser/TextParser';

type TProps = {
  className?: string;
  onBlur: () => void;
  text: string;
};

const TextEditable: FunctionComponent<TProps> = ({
  className = '',
  onBlur,
  text,
}) => {
  const [canEdit, setMode] = useState(false);
  const textRef = useRef(null);

  const onBlurHandler = (e) => {
    onBlur(e);
    setMode(false);
  };

  useEffect(() => {
    if (canEdit) {
      textRef.current.focus();
    }
  }, [canEdit]);

  return (
    <TextEditableStyled className={className}>
      {/* EDITABLE TEXT */}
      {canEdit ? (
        <p
          contentEditable={true}
          onBlur={onBlurHandler}
          suppressContentEditableWarning
          ref={textRef}
        >
          {text}
        </p>
      ) : (
        <TextParser description={text} onDoubleClick={() => setMode(true)} />
      )}
    </TextEditableStyled>
  );
};
export default TextEditable;
