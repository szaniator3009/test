/*
  We're loading the whole application with dynamic imports in this entry point.
  This gives webpack the time needed for the negotiation and loading the shared
  libraries (jquery) when the application starts.
  https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-module-federation-in-webpack-5/

  Webpack docs:
  We strongly recommend using an asynchronous boundary. It will split out the initialization code of a
  larger chunk to avoid any additional round trips and improve performance in general.
  https://webpack.js.org/concepts/module-federation/#troubleshooting

  Module Federation author:
  You need to have a dynamic import somewhere in the parent to leverage static imports
  https://github.com/module-federation/module-federation-examples/issues/375#issuecomment-701896225
*/

/*
  We create a dynamic import entry for our host code
*/
import('./app');
