import { join } from "path";
import { 
  sourcePath,
  widgetName,
  widgetPackage
} from "./node_modules/@mendix/pluggable-widgets-tools/configs/shared";
import { globSync } from "glob";
import path from "node:path";
import { fileURLToPath } from "node:url";


// Get list of modules from 'ace-builds'
const files = Object.fromEntries(
  globSync("node_modules/ace-builds/src-min-noconflict/**/*.js").map(file => [
    // Remove the 'node_modules/ace-builds' path from the filepath. e.g.
    // 'node_module/ace-builds/src-noconflict/ace.js' becomes 'src-noconflict/ace.js'
    path.relative(
      "node_modules/ace-builds",
      file.slice(0, file.length - path.extname(file).length)
    ),
    // Expands the relative paths to absolute paths, so e.g.
    // 'src-noconflict/ace.js' becomes 'C:/.../node_module/ace-builds/src-noconflict/ace.js'
    fileURLToPath(new URL(file, import.meta.url))
  ])
);

const outDir = join(sourcePath, "/dist/tmp/widgets/");
const outWidgetDir = join(widgetPackage.replace(/\./g, "/"), widgetName.toLowerCase());

export default args => {
  const config = args.configDefaultConfig;

  // Use to debug the output files
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