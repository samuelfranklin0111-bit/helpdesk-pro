import js from '@eslint/js';
import globals from 'globals';

// Configuração do ESLint (análise estática). A meta do projeto é 0 erros e 0 avisos.
export default [
  { ignores: ['node_modules/', 'coverage/', 'data/', 'test-results/', 'playwright-report/'] },
  js.configs.recommended,
  {
    // Regras extras para o código todo
    rules: {
      eqeqeq: ['error', 'always'],
      'prefer-const': 'error',
      'no-var': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  {
    // Servidor e scripts: rodam no Node.js
    files: ['src/backend/**/*.js', 'src/shared/**/*.js', 'eslint.config.js', 'tests/**/*.js'],
    languageOptions: { ecmaVersion: 'latest', sourceType: 'module', globals: globals.node },
  },
  {
    // Interface: roda no navegador
    files: ['src/frontend/**/*.js'],
    languageOptions: { ecmaVersion: 'latest', sourceType: 'module', globals: globals.browser },
  },
];
