export const parseHexToRGBA = (hex: string, opacity: number) =>
  `rgba(${parseInt(hex.substring(1, 3), 16)}, ${parseInt(
    hex.substring(3, 5),
    16
  )}, ${parseInt(hex.substring(5, 7), 16)}, ${opacity})`;
