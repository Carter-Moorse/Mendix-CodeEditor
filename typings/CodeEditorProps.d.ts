/**
 * This file was generated from CodeEditor.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export type ThemeEnum = "ambiance" | "chaos" | "chrome" | "cloud9_day" | "cloud9_night" | "cloud9_night_low_color" | "cloud_editor" | "cloud_editor_dark" | "clouds" | "clouds_midnight" | "cobalt" | "crimson_editor" | "dawn" | "dracula" | "dreamweaver" | "eclipse" | "github" | "github_dark" | "gob" | "gruvbox" | "gruvbox_dark_hard" | "gruvbox_light_hard" | "idle_fingers" | "iplastic" | "katzenmilch" | "kr_theme" | "kuroir" | "merbivore" | "merbivore_soft" | "mono_industrial" | "monokai" | "nord_dark" | "one_dark" | "pastel_on_dark" | "solarized_dark" | "solarized_light" | "sqlserver" | "terminal" | "textmate" | "tomorrow" | "tomorrow_night" | "tomorrow_night_blue" | "tomorrow_night_bright" | "tomorrow_night_eighties" | "twilight" | "vibrant_ink" | "xcode";

export type ModeEnum = "abap" | "abc" | "actionscript" | "ada" | "alda" | "apache_conf" | "apex" | "applescript" | "aql" | "asciidoc" | "asl" | "assembly_x86" | "astro" | "autohotkey" | "batchfile" | "bibtex" | "c_cpp" | "c9search" | "cirru" | "clojure" | "cobol" | "coffee" | "coldfusion" | "crystal" | "csharp" | "csound_document" | "csound_orchestra" | "csound_score" | "csp" | "css" | "curly" | "cuttlefish" | "d" | "dart" | "diff" | "django" | "dockerfile" | "dot" | "drools" | "edifact" | "eiffel" | "ejs" | "elixir" | "elm" | "erlang" | "flix" | "forth" | "fortran" | "fsharp" | "fsl" | "ftl" | "gcode" | "gherkin" | "gitignore" | "glsl" | "gobstones" | "golang" | "graphqlschema" | "groovy" | "haml" | "handlebars" | "haskell" | "haskell_cabal" | "haxe" | "hjson" | "html" | "html_elixir" | "html_ruby" | "ini" | "io" | "ion" | "jack" | "jade" | "java" | "javascript" | "jexl" | "json" | "json5" | "jsoniq" | "jsp" | "jssm" | "jsx" | "julia" | "kotlin" | "latex" | "latte" | "less" | "liquid" | "lisp" | "livescript" | "logiql" | "logtalk" | "lsl" | "lua" | "luapage" | "lucene" | "makefile" | "markdown" | "mask" | "matlab" | "maze" | "mediawiki" | "mel" | "mips" | "mixal" | "mushcode" | "mysql" | "nasal" | "nginx" | "nim" | "nix" | "nsis" | "nunjucks" | "objectivec" | "ocaml" | "odin" | "partiql" | "pascal" | "perl" | "pgsql" | "php" | "php_laravel_blade" | "pig" | "plain_text" | "plsql" | "powershell" | "praat" | "prisma" | "prolog" | "properties" | "protobuf" | "prql" | "puppet" | "python" | "qml" | "r" | "raku" | "razor" | "rdoc" | "red" | "redshift" | "rhtml" | "robot" | "rst" | "ruby" | "rust" | "sac" | "sass" | "scad" | "scala" | "scheme" | "scrypt" | "scss" | "sh" | "sjs" | "slim" | "smarty" | "smithy" | "snippets" | "soy_template" | "space" | "sparql" | "sql" | "sqlserver" | "stylus" | "svg" | "swift" | "tcl" | "terraform" | "tex" | "text" | "textile" | "toml" | "tsx" | "turtle" | "twig" | "typescript" | "vala" | "vbscript" | "velocity" | "verilog" | "vhdl" | "visualforce" | "wollok" | "xml" | "xquery" | "yaml" | "zeek" | "zig";

export type SelectionStyleEnum = "line" | "text";

export type CursorStyleEnum = "ace" | "slim" | "smooth" | "wide";

export type NewLineModeEnum = "auto" | "unix" | "windows";

export type FoldStyleEnum = "markbegin" | "markbeginend" | "manual";

export interface CodeEditorContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    height: string;
    width: string;
    theme: ThemeEnum;
    mode: ModeEnum;
    value: EditableValue<string>;
    debounceChangePeriod: number;
    selectionStyle: SelectionStyleEnum;
    highlightActiveLine: boolean;
    highlightSelectedWord: boolean;
    cursorStyle: CursorStyleEnum;
    mergeUndoDeltas: boolean;
    behavioursEnabled: boolean;
    wrapBehavioursEnabled: boolean;
    autoScrollEditorIntoView: boolean;
    copyWithEmptySelection: boolean;
    useSoftTabs: boolean;
    navigateWithinSoftTabs: boolean;
    enableMultiselect: boolean;
    enableAutoIndent: boolean;
    enableKeyboardAccessibility: boolean;
    enableBasicAutocompletion: boolean;
    enableLiveAutocompletion: boolean;
    enableSnippets: boolean;
    enableEmmet: boolean;
    useElasticTabstops: boolean;
    hScrollBarAlwaysVisible: boolean;
    vScrollBarAlwaysVisible: boolean;
    highlightGutterLine: boolean;
    animatedScroll: boolean;
    showInvisibles: boolean;
    showPrintMargin: boolean;
    printMarginColumn: number;
    printMargin: number;
    fadeFoldWidgets: boolean;
    showFoldWidgets: boolean;
    showLineNumbers: boolean;
    showGutter: boolean;
    displayIndentGuides: boolean;
    highlightIndentGuides: boolean;
    fontSize: string;
    fontFamily: string;
    maxLines: number;
    minLines: number;
    scrollPastEnd: boolean;
    fixedWidthGutter: boolean;
    customScrollbar: boolean;
    hasCssTransforms: boolean;
    maxPixelHeight: number;
    useSvgGutterIcons: boolean;
    scrollSpeed: number;
    dragDelay: number;
    dragEnabled: boolean;
    focusTimout: number;
    tooltipFollowsMouse: boolean;
    firstLineNumber: number;
    newLineMode: NewLineModeEnum;
    useWorker: boolean;
    indentedSoftWrap: boolean;
    tabSize: number;
    wrap: boolean;
    foldStyle: FoldStyleEnum;
}

export interface CodeEditorPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    height: string;
    width: string;
    theme: ThemeEnum;
    mode: ModeEnum;
    value: string;
    onChangeAction: {} | null;
    debounceChangePeriod: number | null;
    selectionStyle: SelectionStyleEnum;
    highlightActiveLine: boolean;
    highlightSelectedWord: boolean;
    cursorStyle: CursorStyleEnum;
    mergeUndoDeltas: boolean;
    behavioursEnabled: boolean;
    wrapBehavioursEnabled: boolean;
    autoScrollEditorIntoView: boolean;
    copyWithEmptySelection: boolean;
    useSoftTabs: boolean;
    navigateWithinSoftTabs: boolean;
    enableMultiselect: boolean;
    enableAutoIndent: boolean;
    enableKeyboardAccessibility: boolean;
    enableBasicAutocompletion: boolean;
    enableLiveAutocompletion: boolean;
    enableSnippets: boolean;
    enableEmmet: boolean;
    useElasticTabstops: boolean;
    hScrollBarAlwaysVisible: boolean;
    vScrollBarAlwaysVisible: boolean;
    highlightGutterLine: boolean;
    animatedScroll: boolean;
    showInvisibles: boolean;
    showPrintMargin: boolean;
    printMarginColumn: number | null;
    printMargin: number | null;
    fadeFoldWidgets: boolean;
    showFoldWidgets: boolean;
    showLineNumbers: boolean;
    showGutter: boolean;
    displayIndentGuides: boolean;
    highlightIndentGuides: boolean;
    fontSize: string;
    fontFamily: string;
    maxLines: number | null;
    minLines: number | null;
    scrollPastEnd: boolean;
    fixedWidthGutter: boolean;
    customScrollbar: boolean;
    hasCssTransforms: boolean;
    maxPixelHeight: number | null;
    useSvgGutterIcons: boolean;
    scrollSpeed: number | null;
    dragDelay: number | null;
    dragEnabled: boolean;
    focusTimout: number | null;
    tooltipFollowsMouse: boolean;
    firstLineNumber: number | null;
    newLineMode: NewLineModeEnum;
    useWorker: boolean;
    indentedSoftWrap: boolean;
    tabSize: number | null;
    wrap: boolean;
    foldStyle: FoldStyleEnum;
}
