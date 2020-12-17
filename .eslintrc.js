module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'promise',
    'chai-friendly',
  ],
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'no-unused-expressions': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': ['error', { allowTernary: true }],
    'import/extensions': 0,
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        typedefs: true,
      },
    ],
  },
};
