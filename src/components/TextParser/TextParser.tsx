// @ts-nocheck
import React, { FunctionComponent } from 'react';

// services
import parseBlockTextFromText from './services/parseBlockTextFromText';
import parseBracketsFromText from './services/parseBracketsFromText';
import parsePrimitiveVariablesFromText from './services/parsePrimitiveVariablesFromText';
import parseObjectsFromText from './services/parseObjectsFromText';

// styles
import { TextParser as TextParserStyled } from './TextParserStyled';
import parseIgnoreSignsFromText from './services/parseIgnoreSignsFromText';

type TProps = {
  className?: string;
  description: string;
  onDoubleClick?: () => void;
};

const TextParser: FunctionComponent<TProps> = ({
  className = '',
  description,
  onDoubleClick = null,
}) => {
  const parseText = (text: string): string =>
    parsePrimitiveVariablesFromText(
      parseBracketsFromText(
        parseObjectsFromText(
          parseBlockTextFromText(parseIgnoreSignsFromText(text))
        )
      )
    );

  const getText = () => parseText(description);

  return (
    <TextParserStyled
      className={className}
      dangerouslySetInnerHTML={{ __html: getText() }}
      {...(onDoubleClick ? { onDoubleClick: onDoubleClick } : {})}
    />
  );
};

export default TextParser;
