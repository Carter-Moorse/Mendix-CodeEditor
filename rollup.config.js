import { join } from "path";
import { 
  sourcePath,
  widgetName,
  widgetPackage
} from "./node_modules/@mendix/pluggable-widgets-tools/configs/shared";
import { globSync } from "glob";
import path from "node:path";
import { fileURLToPath } from "node:url";


const files = Object.fromEntries(
  globSync("node_modules/ace-builds/src-noconflict/**/*.js").map(file => [
    // This remove `src/` as well as the file extension from each
    // file, so e.g. src/nested/foo.js becomes nested/foo
    path.relative(
      "node_modules/ace-builds",
      file.slice(0, file.length - path.extname(file).length)
    ),
    // This expands the relative paths to absolute paths, so e.g.
    // src/nested/foo becomes /project/src/nested/foo.js
    fileURLToPath(new URL(file, import.meta.url))
  ])
);

const outDir = join(sourcePath, "/dist/tmp/widgets/");
const outWidgetDir = join(widgetPackage.replace(/\./g, "/"), widgetName.toLowerCase());

export default args => {
  const config = args.configDefaultConfig;

  // console.log(files);

  config.unshift({
    input: files,
    output: {
      format: "es",
      entryFileNames: "[name].js",
      dir: join(outDir, outWidgetDir)
    }
  });

  return config;
};