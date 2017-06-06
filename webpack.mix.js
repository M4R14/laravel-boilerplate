const {mix} = require('laravel-mix');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// paths to clean
var pathsToClean = [
    'public/assets/app/js',
    'public/assets/app/css',
    'public/assets/admin/js',
    'public/assets/admin/css',
    'public/assets/auth/css',
];

// the clean options to use
var cleanOptions = {};

mix.webpackConfig({
    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions)
    ]
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

/*
 |--------------------------------------------------------------------------
 | Core
 |--------------------------------------------------------------------------
 |
 */

mix.scripts([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/pace-progress/pace.js',

], 'public/assets/app/js/app.js').version();

mix.styles([
    'node_modules/font-awesome/css/font-awesome.css',
    'node_modules/pace-progress/themes/blue/pace-theme-minimal.css',
], 'public/assets/app/css/app.css').version();

mix.copy([
    'node_modules/font-awesome/fonts/',
], 'public/assets/app/fonts');

/*
 |--------------------------------------------------------------------------
 | Auth
 |--------------------------------------------------------------------------
 |
 */

mix.styles('resources/assets/auth/css/login.css', 'public/assets/auth/css/login.css').version();
mix.styles('resources/assets/auth/css/register.css', 'public/assets/auth/css/register.css').version();
mix.styles('resources/assets/auth/css/passwords.css', 'public/assets/auth/css/passwords.css').version();

mix.styles([
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'node_modules/gentelella/vendors/animate.css/animate.css',
    'node_modules/gentelella/build/css/custom.css',
], 'public/assets/auth/css/auth.css').version();

/*
 |--------------------------------------------------------------------------
 | Admin
 |--------------------------------------------------------------------------
 |
 */

mix.scripts([
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/gentelella/build/js/custom.js',
], 'public/assets/admin/js/admin.js').version();

mix.styles([
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'node_modules/gentelella/vendors/animate.css/animate.css',
    'node_modules/gentelella/build/css/custom.css',
], 'public/assets/admin/css/admin.css').version();


mix.copy([
    'node_modules/gentelella/vendors/bootstrap/dist/fonts',
], 'public/assets/admin/fonts');

/*
 |--------------------------------------------------------------------------
 | Frontend
 |--------------------------------------------------------------------------
 |
 */
