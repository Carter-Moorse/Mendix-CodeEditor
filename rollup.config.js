import copy from "rollup-plugin-copy";
import replace from "@rollup/plugin-replace";

import { join } from "path";
import { sourcePath, widgetPackage, widgetName } from "./node_modules/@mendix/pluggable-widgets-tools/configs/shared";


const outDir = join(sourcePath, "/dist/tmp/");
const widgetDir = join("/widgets/", widgetPackage.replace(/\./g, "/"), widgetName.toLowerCase());
const aceDir = join(widgetDir, "ace-builds")


export default args => {
  const config = args.configDefaultConfig;

  config[0].plugins.unshift(
    copy({
      targets: [
        {
          src: ["node_modules/ace-builds/src-min-noconflict/*", "node_modules/ace-builds/LICENSE"],
          ignore: ["node_modules/ace-builds/src-min-noconflict/ace.js"],
          dest: join(outDir, aceDir)
        }
      ]
    }),
    replace({
      preventAssignment: true,
      delimiters: ["<%", "%>"],
      include: `src/${widgetName}.tsx`,
      values: {
        "ACEPATH": aceDir.replaceAll("\\", "/")
      }
    })
  )

  return config;
};