export const boxShadow = (content: string): string => `
  -webkit-box-shadow: ${content};
  -moz-box-shadow: ${content};
  box-shadow: ${content};
`;

export const transform = (content: string): string => `
  -ms-transform: ${content};
  transform: ${content};`;

export const transition = (content: string): string => ` 
  -webkit-transition: ${content};
  -moz-transition: ${content};
  -o-transition: ${content};
  transition: ${content};`;
