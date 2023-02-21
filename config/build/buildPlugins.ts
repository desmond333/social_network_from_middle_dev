import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { BuildOptions } from "./types/config";

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
  const { paths, analyze } = options;

  return [
    new HTMLWebpackPlugin(
      {
        template: paths.html,
      },
    ),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin(
      {
        filename: "css[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      },
    ),
    new BundleAnalyzerPlugin(
      {
        analyzerMode: analyze ? "server" : "disabled",
      },
    ),
  ];
};