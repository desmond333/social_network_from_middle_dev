import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {paths, mode} = options

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
            rules: buildLoaders()
        },
        resolve: buildResolvers()
    };
}