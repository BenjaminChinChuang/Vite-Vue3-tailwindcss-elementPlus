module.exports = {
  plugins: {
    'postcss-import': {}, //Build-time imports
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}
