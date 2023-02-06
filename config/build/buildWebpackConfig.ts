import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";
import {BuildOptions} from "./types/config";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {paths, mode, isDev} = options

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(paths.html),
        module: {
            rules: buildLoaders(isDev)
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options.port) : undefined
    };
}