import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginTailwindCSS from 'eslint-plugin-tailwindcss';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parser: typescriptParser,
    },
  },

  // Konfigurasi JavaScript dan React
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,

  // Konfigurasi tambahan untuk plugin linting
  {
    plugins: {
      tailwindcss: pluginTailwindCSS,
      prettier: prettierPlugin,
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      // Tailwind CSS
      'tailwindcss/classnames-order': 'warn', // Periksa urutan class Tailwind
      'tailwindcss/no-custom-classname': 'off', // Nonaktifkan jika menggunakan class custom

      // Prettier
      'prettier/prettier': 'warn',

      // TypeScript
      '@typescript-eslint/no-unused-vars': 'warn',

      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
            semi: true,
            tabWidth: 2,
            useTabs: false,
          },
        ],
      },
    },

    settings: {
      react: {
        version: 'detect', // Deteksi otomatis versi React
      },
    },
  },

  // Tambahkan konfigurasi Prettier di akhir
  prettierConfig,
];
