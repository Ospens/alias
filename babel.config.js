module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
        ],
        alias: {
          screens: "./src/screens",
          "screens/*": "./src/screens/*",
          components: "./src/components",
          "components/*": "./src/components/*",
          stores: "./src/stores",
          "stores/*": "./src/stores/*",
          routing: "./src/routing",
          "routing/*": "./src/routing/*",
          themes: "./src/themes",
          "themes/*": "./src/themes/*",
        },
      },
    ],
  ],
};
