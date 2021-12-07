export default {
  media: {
    xs: '@media only screen and (max-width: 480px)',
    s: '@media only screen and (max-width: 768px)',
    m: '@media only screen and (max-width: 1024px)',
    l: '@media only screen and (max-width: 1280px)',
    xl: '@media only screen and (max-width: 1536px)',
    custom: (w: number) => `@media only screen and (max-width: ${w}px)`,
  },
};
