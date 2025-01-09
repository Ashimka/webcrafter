import path from "path";
import nodeExternals from "webpack-node-externals";
const __dirname = process.cwd();

export default () => {
  return {
    mode: "production",
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "app.js",
    },
    externals: [nodeExternals()],
    target: "node",

    module: {
      rules: [
        {
          test: /.ts$/,
          use: "ts-loader",
          exclude: /node_modules\, uploads/,
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
  };
};
