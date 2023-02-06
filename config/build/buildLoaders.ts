import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders = (isDev: boolean): webpack.RuleSetRule[] => {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            //style-loader creates `style` nodes from JS strings
            // MiniCssExtractPlugin для создания css в отдельных файлах css в build
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    // порядок loaders имеет значение
    return [tsLoader, cssLoader]
}