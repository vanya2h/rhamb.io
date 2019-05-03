const path = require('path');

const sourceDir = path.resolve(__dirname, '../source');

module.exports = {
  sourceDir,
  developmentPort: process.env.PORT || '3000',
  buildDir: path.resolve(__dirname, '../build'),
  assetsDir: path.resolve(__dirname, '../assets'),
  isAnalyzeEnabled: Boolean(process.env.ANALYZE_ENABLED),
  areSourceMapsDisabled: process.env.SOURCEMAPS === 'disabled',
};
