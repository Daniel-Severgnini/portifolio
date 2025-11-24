// eslint.config.mjs
import js from '@eslint/js'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettierConfig from 'eslint-config-prettier'
import globals from 'globals'
import jestPlugin from 'eslint-plugin-jest'

export default [
  {
    ignores: [
      '**/.prettierrc',
      '**/.prettierrc.*',
      '**/prettier.config.*',
      '**/eslint.config.*',
      'node_modules/',
      'dist/',
      'build/'
    ]
  },

  js.configs.recommended,

  {
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}'],
    plugins: {
      jest: jestPlugin
    },
    languageOptions: {
      globals: {
        ...globals.jest
      }
    },
    rules: {
      ...jestPlugin.configs.recommended.rules
    }
  },

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: {
        ...globals.browser,
        ...globals.es2021
      }
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      // Desativa regras de ponto-e-vírgula para não conflitar com Prettier
      '@typescript-eslint/semi': 'off',
      semi: 'off'
    }
  },

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // Desativa regras de formatação que conflitam com Prettier
      semi: 'off'
    }
  },

  // plugin:prettier/recommended (IMPORTANTE: deve ser o último)
  prettierConfig, // ← Desativa regras conflitantes
  {
    plugins: {
      prettier: pluginPrettier // ← Adiciona o plugin
    },
    rules: {
      'prettier/prettier': 'error' // ← Executa Prettier como regra do ESLint
    }
  }
]
