// @ts-nocheck
// styles
import { EClassNames } from '../classNames';

const parseBlockTextFromText = (text: string): string => {
  const regexp = RegExp("`[A-Za-z1-9'\\[\\]/?\\-=!&_ ]*`", 'g');
  const results = [...text.matchAll(regexp)];

  results.forEach((result) => {
    const [foundedText] = result;
    text = text.replace(
      foundedText,
      `<span class="${EClassNames.BLOCK_TEXT}">${foundedText.slice(
        1,
        -1
      )}</span>`
    );
  });

  return text;
};

export default parseBlockTextFromText;
