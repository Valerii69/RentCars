// color: ${({ theme }) => theme.colors.colorCar};
const theme = {
  colors: {
    primary: '#121417',
    secondary: '#121417', //rgba(18, 20, 23, 0.50);
    accentBgColor: '#f0f0f0',
    white: '#ffffff', //rgba(255, 255, 255, 1);
    accent: '#3470FF', //rgba(52, 112, 255, 1);
    accentHover: '#4a90e2 ', //rgba(11, 68, 205, 1);
    placeholder: '#8A8A89', //rgba(138, 138, 137, 1);
    additionalModal: '#363535',
    lineDivider: 'rgba(18, 20, 23, 0.10)',
    scroll: 'rgba(18, 20, 23, 0.05)',
    dropdown: 'rgba(18, 20, 23, 0.20)',
    bgInput: '#F7F7FB',
    bgAdditionalModal: '#F9F9F9',
    bgHero: 'rgba(205 218 239)',
    colorHero: '#1e73a3',
    colorCar: '#e67e22',
    colorCarAccent: '#e36d05',
    borderPriseList: '#12147b0d',
  },

  shadow: {
    boxShadow: '0 8px 4px -5px rgba(136, 165, 191, 0.7)',
    boxShadowHeader: '4px 4px 4px rgba(136, 165, 191, 0.7)',
  },

  timingFunction: {
    cubicBezier: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },

  fonts: {
    fontsBody: 'Manrope',
    additionalModal: 'Montserrat',
  },
};
export { theme };
