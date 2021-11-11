const { resolve } = require("path");

module.exports = {
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(ezoneproject, "index.html"),
      },
    },
  },
};
