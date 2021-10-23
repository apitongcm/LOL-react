//craco.config.js
//i'll be using craco to help my code run the tailwindcss

module.exports = {
    style:{
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer')
            ]
        },
    },
}

