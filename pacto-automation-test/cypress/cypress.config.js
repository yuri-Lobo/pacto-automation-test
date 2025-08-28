const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://br.search.yahoo.com/',
    viewportWidth: 1280,
    viewportHeight: 720
  }
});
