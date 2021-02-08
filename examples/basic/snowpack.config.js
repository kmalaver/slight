/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
    '../../src': { url: '/dist/slight' },
  },
  alias: {
    // Type 1: Package Import Alias
    '@slight': '../../src/index',
  },
  optimize: {
    /* Example: Bundle your final build: */
    bundle: true,
    minify: true,
    target: 'es2018',
  },

  buildOptions: {
    /* ... */
    jsxFactory: 'h',
  },
};
