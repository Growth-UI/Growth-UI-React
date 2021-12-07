const theme = {
  gui: {
    color: {
      negative: {
        background: '#fff6f6',
        color: '#9f3a38',
      },
      positive: {
        background: '#fcfff5',
        color: '#2c662d',
      },
      warning: {
        background: '#fffaf3',
        color: '#573a08',
      },
    },
    media: {
      only: {
        minimobile: '@media only screen and (max-width: 543px)',
        mobile: '@media only screen and (min-width: 544px) and (max-width: 767px)',
        tablet: '@media only screen and (min-width: 768px) and (max-width: 991px)',
        laptop: '@media only screen and (min-width: 992px) and (max-width: 1199px)',
        computer: '@media only screen and (min-width: 1200px) and (max-width: 1919px)',
        widescreen: '@media only screen and (min-width: 1920px)',
      },
      minimobile: '@media only screen and (max-width: 543px)',
      mobile: '@media only screen and (max-width: 767px)',
      tablet: '@media only screen and (max-width: 991px)',
      laptop: '@media only screen and (max-width: 1199px)',
      computer: '@media only screen and (max-width: 1919px)',
      widescreen: '@media only screen and (max-width: 1920px)',
    },
  },
};

export default theme;
