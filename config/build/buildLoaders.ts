import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'

export const buildLoaders = (isDev: boolean): webpack.RuleSetRule[] => {
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // style-loader creates `style` nodes from JS strings
            // MiniCssExtractPlugin для создания css в отдельных файлах css в build
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
        ],
    }
    // порядок loaders имеет значение
    return [fileLoader, svgLoader, tsLoader, cssLoader]
}
