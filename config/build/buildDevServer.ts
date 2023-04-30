import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = (
    options: BuildOptions,
): DevServerConfiguration => {
    const { port } = options;

    return {
        port,
        open: true,
        historyApiFallback: true,

        // для обновления приложения после изменений в коде без обновления страницы
        hot: true,
    };
};
