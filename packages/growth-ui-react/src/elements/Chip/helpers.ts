export const getSize = ({ size }: any) => {
  switch (size) {
    case 'mini':
      return '17px';
    case 'tiny':
      return '20px';
    case 'small':
      return '22px';
    case 'medium':
      return '25px';
    case 'large':
      return '28px';
    case 'big':
      return '32px';
    case 'huge':
      return '43px';
    case 'massive':
      return '60px';
    default:
      return '23px';
  }
};

export const getFontSize = ({ size }: any) => {
  switch (size) {
    case 'mini':
      return '8px';
    case 'tiny':
      return '9px';
    case 'small':
      return '10px';
    case 'medium':
      return '12px';
    case 'large':
      return '14px';
    case 'big':
      return '18px';
    case 'huge':
      return '25px';
    case 'massive':
      return '35px';
    default:
      return '11px';
  }
};
