module.exports = {
	"globals": { "module": true },
	"root": true,
	"extends": [
		"plugin:vue/essential",
		"eslint:recommended"
	],
	"rules": {
		"no-console": "off",
		"arrow-spacing": ["warn"],
		"init-declarations": ["error", "always"],
		"no-duplicate-imports": [
			"warn"
		],
		"no-const-assign": [
			"error"
		],
    
		"space-unary-ops": [
			"error",
			{
				"words": true,
				"nonwords": false
			}],
		"quote-props": [
			"warn", 
			"always"
		],
		"no-unneeded-ternary": [
			"warn"
		],
		"rest-spread-spacing": ["error", "never"],
		"no-param-reassign": [
			"error"
		],
		"no-self-compare": [
			"error"
		],
		"prefer-object-spread": [ "warn"],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"no-lone-blocks": [
			"error"
		],
		"no-multi-str": [
			"error"
		],
		"no-path-concat": [
			"error"
		],
		"global-require": [
			"warn"
		],
		"no-lonely-if": [
			"error"
		],
		"no-spaced-func": [
			"error"
		],
		"no-confusing-arrow": [
			"error"
		],
		"prefer-template": [
			"error"
		],
		"no-constant-condition": [
			"error"
		],
		"arrow-body-style": [
			"warn",
			"as-needed"
		],
		"no-var": [
			"error"
		],
		"no-nested-ternary": [
			"error"
		],
		"no-multiple-empty-lines": [
			"warn"
		],
		"no-template-curly-in-string": [
			"error"
		],
		"no-empty-function": [
			"error"
		],
		"no-floating-decimal": [
			"error"
		],
		"no-multi-spaces": [
			"error"
		],
		"no-loop-func": [
			"error"
		],
		"yoda" : [
			"error"
		],
		"no-mixed-spaces-and-tabs": "off"
	},
	"parserOptions": {
		"parser": "babel-eslint",
		"sourceType": "module",
	}
};
