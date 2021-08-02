// @ts-nocheck
import React, { FunctionComponent } from 'react';

// styles
import { Description as DescriptionStyled } from './DescriptionStyled';
import TextEditable from '../TextEditable/TextEditable';

type TProps = {
  children?: React.ReactNode;
  contentEditable?: boolean;
  description?: string;
  onBlur?: () => void;
};

const Description: FunctionComponent<TProps> = ({
  children = null,
  contentEditable = false,
  description = '',
  onBlur = null,
}) => {
  if (!contentEditable) {
    return (
      <DescriptionStyled>
        <p>{children}</p>
      </DescriptionStyled>
    );
  }

  return (
    <DescriptionStyled>
      <TextEditable text={description} onBlur={onBlur} />
    </DescriptionStyled>
  );
};
export default Description;
