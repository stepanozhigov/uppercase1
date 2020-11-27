module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [
        "resources/js/*.vue",
        "resources/js/components/*.vue",
        "resources/sass/*.scss",
        "views/layouts/*"
    ],
    theme: {
        fontFamily: {
            manrope: ["Manrope"],
            suisseIntl: ["SuisseIntl"]
        },
        height: theme => ({
            auto: "auto",
            ...theme("spacing"),
            full: "100%",
            screen: "calc(var(--vh)*100)"
        }),
        inset: {
            1: "1rem"
        },
        screens: {
            'sm': '375px',
            // => @media (min-width: 640px) { ... }
      
            'md': '415px',
            // => @media (min-width: 768px) { ... }
      
            'lg': '768px',
            // => @media (min-width: 1024px) { ... }
      
            'xl': '1366px',
            // => @media (min-width: 1280px) { ... }
      
            '2xl': '1920px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            colors: {
                cwhite: "#f8f7f6",
                cwhite1: "#faf9f8",
                cblack: "#14120e",
                cbrown: "#b39059",
                cgray: "#b3adae",
                cbright: "#ffffff",
                cdark: "#66615a",
                bg: "#ffffff",
                shadow: "#dbdad7",
                clightgray: "#14120e",
                formborder: "#bbb"
            }
        }
    },
    variants: {},
    plugins: [],
    corePlugins: {
        inset: true
    }
};
