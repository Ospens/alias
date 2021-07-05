module.exports = {
  root: true,
  extends: ["@react-native-community", "airbnb", "airbnb/hooks", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  rules: {
    // note you must disable the base rule as it can report incorrect errors
    "no-use-before-define": "off",
    "import/no-unresolved": "error",
    "prettier/prettier": ["warn"],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-curly-newline": "off",
    "react/display-name": 2,
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "react/prop-types": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".png"],
      },
    },
  },
};
