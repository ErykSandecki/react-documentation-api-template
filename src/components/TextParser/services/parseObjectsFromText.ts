// @ts-nocheck
// styles
import { EClassNames } from '../classNames';

const variablesToParse = ['Array', 'Date'];

const parseObjectsFromText = (text: string): string => {
  variablesToParse.forEach((variable) => {
    text = text.replaceAll(
      variable,
      `<span class="${EClassNames.OBJECTS}">${variable}</span>`
    );
  });

  return text;
};

export default parseObjectsFromText;
