/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#11d452",
        "background-light": "#f6f8f6",
        "background-dark": "#102216",
        "primary-content": "#052e12",
        "background-light": "#f6f8f6",
        "background-dark": "#102216",
        "surface-light": "#ffffff",
        "surface-dark": "#1a2e22",
      },
      fontFamily: {
        display: ["Lexend", "sans-serif"],
        body: ["Noto Sans", "sans-serif"],
      },
      fontSize: {
        // Existing sizes
        large: "1.125rem",
        medium: "1rem",
        small: "0.875rem",
        xSmall: "0.75rem",
        // Typography component sizes
        "heading-sm": [
          "1.5rem",
          { lineHeight: "2rem", letterSpacing: "-0.025em" },
        ], // 24px
        "heading-md": [
          "2rem",
          { lineHeight: "2.5rem", letterSpacing: "-0.025em" },
        ], // 32px
        "heading-lg": [
          "2.5rem",
          { lineHeight: "3rem", letterSpacing: "-0.025em" },
        ], // 40px
        "heading-xl": [
          "3rem",
          { lineHeight: "3.5rem", letterSpacing: "-0.025em" },
        ], // 48px
        "body-sm": ["0.875rem", { lineHeight: "1.5rem" }], // 14px
        "body-md": ["1rem", { lineHeight: "1.75rem" }], // 16px
        "body-lg": ["1.125rem", { lineHeight: "1.875rem" }], // 18px
        "action-sm": [
          "0.75rem",
          { lineHeight: "1rem", letterSpacing: "0.025em", fontWeight: "600" },
        ], // 12px
        "action-md": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "0.015em",
            fontWeight: "600",
          },
        ], // 14px
        "action-lg": [
          "1rem",
          { lineHeight: "1.5rem", letterSpacing: "0.015em", fontWeight: "600" },
        ], // 16px
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
