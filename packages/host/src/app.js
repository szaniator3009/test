/* eslint-disable no-undef */
import 'the-new-css-reset/css/reset.css';
import 'sanitize.css';
import Heading from './heading/heading';

const heading = new Heading();
heading.render('HOST (Module Federation)');

import(/* webpackChunkName: "FormApp" */ './init-remote')
  .then(module => {
    const initRemote = module.default();
    return initRemote('FormApp', './initContactForm');
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.log(error, 'Error initializing lazy loaded remote.');
  });

//
// Uncomment below to load dynamic remote on click event
// And uncomment lines in index.html
//

// const getHeader = document.getElementById('click-me');

// const lazyLoadRemoteApp = () => {
//   import(/* webpackChunkName: "FormApp" */ './init-remote')
//     .then(module => {
//       const initRemote = module.default();
//       initRemote('FormApp', './initContactForm');
//     })
//     .catch(err => {
//       // eslint-disable-next-line no-console
//       console.log(err, 'Error initializing lazy loaded remote.');
//     });

//   getHeader.removeEventListener('click', lazyLoadRemoteApp);
// };

// getHeader.addEventListener('click', lazyLoadRemoteApp);
