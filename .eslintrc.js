module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:node/recommended"
    ],
    "rules": {
        "node/no-unsupported-features/es-syntax": ["error", {
            "version": ">=8.0.0",
            "ignores": []
        }]
    },
    "parserOptions": {
        "ecmaVersion": 2017
    },
};
