// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@formkit/nuxt'
        ],
    app: {
        head: {
            link: [
                    {
                        rel: "stylesheet", type: "text/css", href: "https://assets.calendly.com/assets/external/widget.css"
                    }
                ],
                script: [
                    { 
                        type: "text/javascript",
                        async: true,
                        src: "https://assets.calendly.com/assets/external/widget.js"
                    }
                ]
        }
    },
    meta: {
        meta: [
            {name: "viewport", content: "width=device-width, initial-scale=1"}
        ]
    },
    buildModules: [
    ],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {
        public: {
            sitename: 'DexForce Consulting'
        },
        private: {

        }
    }
})
