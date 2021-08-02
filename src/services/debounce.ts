// @ts-nocheck
let _debounce;

const debounce = (callback: () => void, time: number): void => {
  if (_debounce) {
    clearTimeout(_debounce);
  }

  _debounce = setTimeout(() => callback(), time);
};

export default debounce;
