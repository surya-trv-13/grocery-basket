const fs = require("fs");
const path = require("path");

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8"));
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["airbnb", "prettier"],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["prettier", "redux-saga", "react", "react-hooks", "import", "jsx-a11y"],
	rules: {
		"prettier/prettier": ["error", prettierOptions],
		quotes: ["error", "double"],
		indent: "off",
		"react/jsx-filename-extension": "off",
		"arrow-body-style": ["error", "as-needed"],
		"no-console": "warn",
		"max-len": "off",
		"newline-per-chained-call": "off",
		"no-unused-vars": "warn",
		"prefer-template": "error",
		"jsx-a11y/aria-props": "error",
		"jsx-a11y/heading-has-content": "off",
		"jsx-a11y/label-has-associated-control": [2],
		"jsx-a11y/label-has-for": "off",
		"jsx-a11y/mouse-events-have-key-events": "error",
		"jsx-a11y/role-has-required-aria-props": "error",
		"jsx-a11y/role-supports-aria-props": "error",
		"react-hooks/rules-of-hooks": "error",
		"react/jsx-closing-tag-location": "error",
		"react/forbid-prop-types": "off",
		"react/jsx-curly-newline": "off",
		"react/jsx-first-prop-new-line": ["error", "multiline"],
		"react/jsx-no-target-blank": "off",
		"react/jsx-props-no-spreading": "off",
		"react/jsx-uses-vars": "error",
		"react/jsx-no-duplicate-props": ["error", { ignoreCase: false }],
		"react/require-extension": "off",
		"react/self-closing-comp": "off",
		"react/sort-comp": "off",
		"redux-saga/no-yield-in-race": "error",
		"redux-saga/yield-effects": "error",
		"require-yield": "error",
		"import/no-extraneous-dependencies": "off",
		"import/prefer-default-export": "warn",
		"react/no-unused-state": "warn",
		"react/destructuring-assignment": "off",
		"no-underscore-dangle": "off",
		"no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
		"react/no-deprecated": "warn",
		"react/function-component-definition": [
			2,
			{
				namedComponents: ["function-declaration", "function-expression", "arrow-function"],
				unnamedComponents: ["function-expression", "arrow-function"],
			},
		],
	},
};
