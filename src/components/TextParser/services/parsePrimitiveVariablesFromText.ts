// @ts-nocheck
// styles
import { EClassNames } from '../classNames';

const variablesToParse = ['boolean', 'number', 'string'];

const parsePrimitiveVariablesFromText = (text: string): string => {
  variablesToParse.forEach((variable) => {
    text = text.replaceAll(
      variable,
      `<span class="${EClassNames.PRIMITIVE_VARIABLE}">${variable}</span>`
    );
  });

  return text;
};

export default parsePrimitiveVariablesFromText;
