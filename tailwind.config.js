const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
   content: ["./index.html", "./src/**/*.{jsx,jsx,ts,tsx}"],
   theme: {
      container: {
         center: true,
         padding: {
            DEFAULT: "8px",
         },
      },
      screens: {
         sm: "640px",
         // => @media (min-width: 640px) { ... }

         md: "799px",
         // => @media (min-width: 768px) { ... }

         lg: "1024px",
         // => @media (min-width: 1024px) { ... }

         xl: "1380px",
         // => @media (min-width: 1280px) { ... }
         // xxl: "1000px",
      },
      extend: {
         colors: {
            dark: "#0F0F0F",
            secondary: "#CACACA",
            spacing: {
               100: "400px",
               144: "36rem",
            },
            borderRadius: {
               "3xl": "20px",
               "4xl": "24px",
            },
         },
      },
   },
   plugins: [],
});
