const getSpacing = ({ all, top, right, left, bottom, horizontal, vertical }: any) => {
  const topMargin = [top, vertical, all].find((s) => s != null) || 0;
  const rightMargin = [right, horizontal, all].find((s) => s != null) || 0;
  const bottomMargin = [bottom, vertical, all].find((s) => s != null) || 0;
  const leftMargin = [left, horizontal, all].find((s) => s != null) || 0;

  return `${topMargin}rem ${rightMargin}rem ${bottomMargin}rem ${leftMargin}rem`;
};

export default getSpacing;
