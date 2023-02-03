import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

export const buildPlugins = (path: string): webpack.WebpackPluginInstance[] => {
    return [
        new HTMLWebpackPlugin(
            {
                template: path
            }
        ),
        new webpack.ProgressPlugin(),
    ]
}