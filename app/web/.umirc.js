// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'web',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],

  // extra configuration for egg
  runtimePublicPath: true,
  hash: true,
  outputPath: '../public/web',
  manifest: {
    fileName: '../../../config/manifest.json',
    publicPath: '',
  },
}
