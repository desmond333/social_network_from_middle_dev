import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export const buildPlugins = (
    options: BuildOptions,
): webpack.WebpackPluginInstance[] => {
    const {
        isDev, paths, analyze, apiUrl,
    } = options;

    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: analyze ? 'server' : 'disabled',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify('frontend'),
        }),
    ];

    const restPlugins = isDev
        ? [
        // 2 плагина для обновления приложения после изменений в коде без обновления страницы
            new ReactRefreshPlugin(),
            new webpack.HotModuleReplacementPlugin(),
        ]
        : [];

    return [...plugins, ...restPlugins];
};
