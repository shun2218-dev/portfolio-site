module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'next/core-web-vitals', 'prettier'],
  plugins: ['unused-imports'],
  files: ['.ts', '.js', '.tsx'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    'unused-imports/no-unused-impots-ts': 'warn',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '{react,react-dom/**,react-router-dom}',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
  ignores: ['node_modules', '.next', 'out', 'public', '.turbo', '.vercel', '.prettierrc.yaml', '.eslint.config.js', 'next.config.js'],
}
