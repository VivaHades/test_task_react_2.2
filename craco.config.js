module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/scss-tools/variables.scss";
          @import "src/scss-tools/fonts.scss";
          @import "src/scss-tools/reset.scss";
        `,
      },
    },
  },
};