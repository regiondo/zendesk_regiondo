const mix = require('laravel-mix');
require('mix-tailwindcss');

// Options
let setPub = './';
mix.setPublicPath(setPub);

// Front-end
mix.js('source/script.js', '/');

mix.sass('source/style.scss', '/')
        .tailwind();

// Version
if (mix.inProduction()) {
    mix.version();
}

// mix.browserSync('domain.local');
mix.browserSync({
    server: "./"
    // proxy: 'https://local.site',
});
mix.options({
    processCssUrls: false
});
mix.webpackConfig({
stats: {
    children: true,
},});