const HtmlWebPackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const paths = require('./paths');

const siteData = {
  title: 'Module Federation Boilerplate',
  description: 'A dynamic, multi-environment module federation boilerplate.',
  keywords: 'webpack, module federation, boilerplate, template, remote, config',
};

// eslint-disable-next-line no-unused-vars
const parts = isProduction => {
  module.exports.loadPages = () => ({
    plugins: [
      new HtmlWebPackPlugin({
        filename: 'index.html',
        title: `Remote | ${siteData.title}`,
        template: `${paths.src}/index.html`,
        favicon: `${paths.public}/favicon.png`,
        meta: {
          description: siteData.description,
          keywords: siteData.keywords,
          viewport: 'width=device-width',
        },
        base: paths.publicPath,
      }),
      new HtmlWebPackPlugin({
        filename: '404.html',
        title: `404 | ${siteData.title}`,
        template: `${paths.src}/404.html`,
        favicon: `${paths.public}/favicon.png`,
        meta: {
          description: siteData.description,
          keywords: siteData.keywords,
          viewport: 'width=device-width',
        },
        base: paths.publicPath,
      }),
    ],
  });

  module.exports.loadMF = () => ({
    plugins: [
      new ModuleFederationPlugin({
        name: 'FormApp',
        filename: 'remoteEntry.js',
        exposes: {
          './initContactForm': './src/form/init-contact-form',
        },
      }),
    ],
  });
};

module.exports = parts;
