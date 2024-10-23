import globals from 'globals';
import pluginJs from '@eslint/js';
import babelParser from '@babel/eslint-parser';

export default [
    {
        languageOptions: { globals: globals.browser, parser: babelParser },
        extends: ['prettier'],
    },
    pluginJs.configs.recommended,
];
