const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
require("laravel-mix-purgecss");

mix.js("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .options({
        processCssUrls: false,
        postCss: [tailwindcss("./tailwind.config.js")],
        autoprefixer: {
            browsers: ["last 9 versions"]
        }
    })
    //.purgeCss({
    //enabled: true
    //})
    .version()
    // .copy("resources/images/*", "public/images")
    // .copy("resources/fonts/*", "public/fonts")
    .browserSync({
        proxy: "uppercase1.local",
        open: false
    });
