import nextPlugin from "@next/eslint-plugin-next";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  // Next.js 기본 규칙 (Core Web Vitals 포함)
  ...nextPlugin.configs["core-web-vitals"],

  // Prettier & 커스텀 규칙
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // Prettier 규칙 강제
      "prettier/prettier": [
        "error",
        {
          singleQuote: false, // Prettier singleQuote와 동일
          printWidth: 120,
          tabWidth: 2,
          semi: true,
          trailingComma: "all",
          bracketSpacing: true,
          endOfLine: "lf",
        },
      ],

      // 커스텀 린트 규칙
      "no-implicit-coercion": "error",
      "no-warning-comments": [
        "warn",
        {
          terms: ["TODO", "FIXME", "XXX", "BUG"],
          location: "anywhere",
        },
      ],
      "react/react-in-jsx-scope": "off",
      "react-hooks/exhaustive-deps": "off",
      "react/prop-types": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/ban-types": "off",
      "@next/next/no-img-element": "off",
      "no-trailing-spaces": "error",
      "curly": "error",
      "brace-style": "error",
      "no-multi-spaces": "error",
      "space-infix-ops": "error",
      "space-unary-ops": "error",
      "no-whitespace-before-property": "error",
      "func-call-spacing": "error",
      "space-before-blocks": "error",
      "keyword-spacing": ["error", { before: true, after: true }],
      "comma-spacing": ["error", { before: false, after: true }],
      "comma-style": ["error", "last"],
      "space-in-parens": ["error", "never"],
      "block-spacing": "error",
      "array-bracket-spacing": ["error", "never"],
      "object-curly-spacing": ["error", "always"],
      "key-spacing": ["error", { mode: "strict" }],
      "arrow-spacing": ["error", { before: true, after: true }],
      "@typescript-eslint/no-empty-function": "off",
      "react-refresh/only-export-components": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          format: ["camelCase", "UPPER_CASE", "PascalCase"],
          selector: "variable",
          leadingUnderscore: "allow",
        },
        { format: ["camelCase", "PascalCase"], selector: "function" },
        { format: ["PascalCase"], selector: "interface" },
        { format: ["PascalCase", "UPPER_CASE"], selector: "typeAlias" },
      ],
    },
    ignorePatterns: ["lib/generated/prisma/**"],
    overrides: [
      {
        files: ["**/*.d.ts"],
        rules: {
          "no-unused-vars": "off",
          "@typescript-eslint/no-unused-vars": "off",
        },
      },
    ],
  },
];
