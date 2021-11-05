module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
  ],
  rules:{
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    "no-descending-specificity":null,
    'no-duplicate-selectors': null
  }
}