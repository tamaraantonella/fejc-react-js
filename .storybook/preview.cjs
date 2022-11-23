import '@fontsource/montserrat';
import '@fontsource/open-sans';
import '../src/index.css';


export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  viewport: {
    // Based on https://gs.statcounter.com/screen-resolution-stats/mobile/worldwide
    viewports: [
      {
        name: 'Mobile 360x800 (9.44%)',
        styles: {
          width: '360px',
          height: '800px'
        }
      },
      {
        name: 'Mobile 360x640 (4.28%)',
        styles: {
          width: '360px',
          height: '640px'
        }
      }
    ],
    defaultViewport: 'Mobile 360x640 (4.28%)'
  },
  backgrounds: {
    default: 'default',
    values: [
      { name: 'default', value: 'rgb(229 231 235)' }
    ]
  }
};
