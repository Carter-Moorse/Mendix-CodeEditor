import { Component, ReactNode, createElement, createRef, RefObject } from "react";
import { config } from "ace-builds";
import AceEditor from "react-ace";

import { CodeEditorContainerProps } from "../typings/CodeEditorProps";

export default class CodeEditor extends Component<CodeEditorContainerProps> {
    static basePath = "<%ACEPATH%>";

    editorRef: RefObject<AceEditor> = createRef();

    loadAce(filename: string): Promise<HTMLScriptElement | null> {
        return new Promise(resolve => {
            const location = CodeEditor.basePath + "/" + filename;
            const head = document.getElementsByTagName("head")[0];
            let script: HTMLScriptElement | null = document.querySelector('script[src="' + location + '"]');
            if (script == null) {
                script = document.createElement("script");
                script.src = location;
                head.appendChild(script);
                script.onload = () => {
                    script?.setAttribute("has-loaded", "true");
                    resolve(script);
                };
            } else if (script.getAttribute("has-loaded") === "true") {
                resolve(script);
            }
        });
    }

    loadModules(): void {
        const editor = this.editorRef.current?.editor;
        if (!editor) {
            return;
        }

        if (this.props.enableBasicAutocompletion || this.props.enableLiveAutocompletion || this.props.enableSnippets) {
            this.loadAce("ext-language_tools.js").then(() =>
                editor.setOptions({
                    enableBasicAutocompletion: this.props.enableBasicAutocompletion,
                    enableLiveAutocompletion: this.props.enableLiveAutocompletion,
                    enableSnippets: this.props.enableSnippets
                })
            );
        }
        if (this.props.enableEmmet) {
            // TODO: Add emmet lib to build
            this.loadAce("ext-emmet.js"); // .then(() => editor.setOption("enableEmmet", this.props.enableEmmet));
        }
        if (this.props.useElasticTabstops) {
            this.loadAce("ext-elastic_tabstops_lite.js");
        }
    }

    componentDidMount(): void {
        this.loadModules();
    }

    componentDidUpdate(): void {
        this.loadModules();
    }

    render(): ReactNode {
        return (
            <AceEditor
                name={this.props.name}
                ref={this.editorRef}
                style={this.props.style}
                className={this.props.class}
                mode={this.props.mode}
                theme={this.props.theme}
                height={this.props.height}
                width={this.props.width}
                value={this.props.value.value}
                defaultValue={this.props.value.value}
                debounceChangePeriod={this.props.debounceChangePeriod}
                onChange={value => this.props.value.setValue(value)}
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                    /*
                     * editor options
                     */
                    selectionStyle: this.props.selectionStyle,
                    highlightActiveLine: this.props.highlightActiveLine,
                    highlightSelectedWord: this.props.highlightSelectedWord,
                    readOnly: this.props.value.readOnly,
                    cursorStyle: this.props.cursorStyle,
                    mergeUndoDeltas: this.props.mergeUndoDeltas,
                    behavioursEnabled: this.props.behavioursEnabled,
                    wrapBehavioursEnabled: this.props.wrapBehavioursEnabled,
                    autoScrollEditorIntoView: this.props.autoScrollEditorIntoView,
                    copyWithEmptySelection: this.props.copyWithEmptySelection,
                    useSoftTabs: this.props.useSoftTabs,
                    navigateWithinSoftTabs: this.props.navigateWithinSoftTabs,
                    enableMultiselect: this.props.enableMultiselect,
                    enableAutoIndent: this.props.enableAutoIndent,
                    enableKeyboardAccessibility: this.props.enableKeyboardAccessibility,
                    /*
                     * renderer options
                     */
                    hScrollBarAlwaysVisible: this.props.hScrollBarAlwaysVisible,
                    vScrollBarAlwaysVisible: this.props.vScrollBarAlwaysVisible,
                    highlightGutterLine: this.props.highlightGutterLine,
                    animatedScroll: this.props.animatedScroll,
                    showInvisibles: this.props.showInvisibles,
                    showPrintMargin: this.props.showPrintMargin,
                    printMarginColumn: this.props.printMarginColumn,
                    printMargin: this.props.printMargin,
                    fadeFoldWidgets: this.props.fadeFoldWidgets,
                    showFoldWidgets: this.props.showFoldWidgets,
                    showLineNumbers: this.props.showLineNumbers,
                    showGutter: this.props.showGutter,
                    displayIndentGuides: this.props.displayIndentGuides,
                    highlightIndentGuides: this.props.highlightIndentGuides,
                    fontSize: this.props.fontSize,
                    fontFamily: this.props.fontFamily || undefined,
                    maxLines: this.props.maxLines,
                    minLines: this.props.minLines,
                    scrollPastEnd: this.props.scrollPastEnd,
                    fixedWidthGutter: this.props.fixedWidthGutter,
                    customScrollbar: this.props.customScrollbar,
                    hasCssTransforms: this.props.hasCssTransforms,
                    maxPixelHeight: this.props.maxPixelHeight,
                    useSvgGutterIcons: this.props.useSvgGutterIcons,
                    /*
                     * mouseHandler options
                     */
                    scrollSpeed: this.props.scrollSpeed || undefined,
                    dragDelay: this.props.dragDelay || undefined,
                    dragEnabled: this.props.dragEnabled,
                    // focusTimout: this.props.focusTimout,
                    tooltipFollowsMouse: this.props.tooltipFollowsMouse,
                    /*
                     * session options
                     */
                    firstLineNumber: this.props.firstLineNumber,
                    // overwrite: this.props.overwrite,
                    newLineMode: this.props.newLineMode,
                    useWorker: this.props.useWorker,
                    indentedSoftWrap: this.props.indentedSoftWrap,
                    tabSize: this.props.tabSize,
                    wrap: this.props.wrap,
                    // wrapMethod: this.props.wrapMethod,
                    foldStyle: this.props.foldStyle
                }}
            />
        );
    }
}

config.set("packaged", true);
config.set("basePath", CodeEditor.basePath);
config.set("workerPath", CodeEditor.basePath);
config.set("modePath", CodeEditor.basePath);
config.set("themePath", CodeEditor.basePath);
