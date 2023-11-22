const { override, fixBabelImports,useBabelRc, addLessLoader } = require("customize-cra");
module.exports = override(



  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#000",
      "@border-color-base":"none",
    },

  })
);