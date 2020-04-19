const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin')
const dirApp = path.join(__dirname, 'app')
const dirAssets = path.join(__dirname, 'assets')
const dirNode = 'node_modules'
const IS_DEV = process.env.NODE_ENV === 'dev'
const DATA = require('./data.json')
const SITE = require('./site.json')

const CONFIG = {
  entry: {
    bundle: [
      path.join(dirApp, 'bundle'),
      path.join(dirAssets, 'styles', 'index.scss')
    ]
  },
  resolve: {
    modules: [dirNode, dirApp, dirAssets]
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEV,
    }),


    new HtmlWebpackPlugin({
      template: './views/pages/index.pug',
      filename: 'index.html',
      title: 'Title',
      excludeChunks: ['item'],
      templateParameters: {
        SITE,
      },
      favicon: './favicon.ico',
      SITE,
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name].[hash].css',
    })
  ]
    .concat([
      new HtmlBeautifyPlugin({
        config: {
          html: {
            end_with_newline: true,
            indent_size: 2,
            indent_with_tabs: true,
            indent_inner_html: true,
            preserve_newlines: true,
            intend_scripts: 'keep',
            inline: ['img', 'span', 'svg'],
            extra_liners: [
              'head',
              'body',
              'main',
              'section',
              'php',
              '?php',
              'a',
            ]
          }
        }
      })
    ]),
  module: {
    rules: [
      // PUG
      {
        test: /\.pug$/,
        use: [{ loader: 'pug-loader' }],
      },

      // BABEL
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/(node_modules)/, /(vendor)/],
        options: {
          compact: true,
        }
      },

      // HTML templates
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },

      // STYLES
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['ie >= 8', 'last 4 version'],
                })
              ],
              sourceMap: IS_DEV,
            }
          }
        ]
      },

      // CSS / SASS
      {
        test: /\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['ie >= 8', 'last 4 version']
                })
              ],
              sourceMap: IS_DEV
            }
          },
          {
            loader: 'group-css-media-queries-loader',
            options: {
              sourceMap: IS_DEV
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: IS_DEV
              //   includePaths: [dirAssets]
            }
          }
        ]
      },

      // IMAGES & FONTS
      {
        test: /\.(jpe?g|png|gif|svg|ttf|eot|woff?2)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  }
}

module.exports = CONFIG
