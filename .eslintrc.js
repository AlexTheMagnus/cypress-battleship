module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'cypress',
    'import',
    'jest',
    'prettier',
    'unused-imports',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:cypress/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['*/node_modules/*', '*/build/*'],
  rules: {
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    camelcase: 'off',
    'consistent-return': 'off',
    'dot-notation': 'off',
    'func-names': 'off',
    'import/extensions': 'off',
    'import/first': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'jest/expect-expect': 'off',
    'jest/valid-expect': 1,
    'lines-between-class-members': 'off',
    'no-console': ['warn', { allow: ['info', 'error'] }],
    'max-len': [1, 200, 2],
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-constructor': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': 'off',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: false,
        allowSeparatedGroups: true,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
      },
    ],
  },
};
