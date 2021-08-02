// @ts-nocheck
// styles
import { EClassNames } from '../classNames';

const signs = ['{', '}'];

const parseBracketsFromText = (text: string): string => {
  signs.forEach((sign) => {
    text = text.replaceAll(
      sign,
      `<span class="${EClassNames.BRACKET}">${sign}</span>`
    );
  });

  return text;
};

export default parseBracketsFromText;
