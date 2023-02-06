import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const buildDevServer = (port: number): DevServerConfiguration => {
  return {
    port,
    open: true,
    historyApiFallback: true,
  };
};
