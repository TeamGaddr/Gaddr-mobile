/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    plugins: ["@tailwindcss/postcss"]
  },
};

export default config;
