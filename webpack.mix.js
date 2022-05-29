const mix = require('laravel-mix');
const path = require("path");

mix.babelConfig({
    plugins: ["@babel/plugin-syntax-dynamic-import"],
}).webpackConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources/js/vue"),
        },
    },
    output: {
        chunkFilename: "js/chunks/[name].js?id=[chunkhash]",
        publicPath: "/",
    },
})
    .options({
        legacyNodePolyfills: true,
    });
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .copy("resources/css/app.css", "public/css")
    .version()
    .vue({
        version: 3,
    });
