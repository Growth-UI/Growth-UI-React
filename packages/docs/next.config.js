/* eslint-disable no-param-reassign */
/* eslint-disable object-shorthand */
/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();
// eslint-disable-next-line import/no-extraneous-dependencies
const Dotenv = require('dotenv-webpack');
const path = require('path');
const nextTranslate = require('next-translate');

// eslint-disable-next-line import/no-extraneous-dependencies
const withTM = require('next-transpile-modules')(['@growth-ui/react']);

module.exports = withTM(
  nextTranslate({
    images: {
      domains: ['localhost'],
    },
    webpack: function (config, options) {
      /** Rules */
      config.module.rules.push({
        test: /\.(eot|svg|ttf|woff|woff2|otf|png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      });

      /** Plugins */
      config.plugins = config.plugins || [];
      config.plugins.push(
        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true,
        }),
      );

      return config;
    },
  }),
);
