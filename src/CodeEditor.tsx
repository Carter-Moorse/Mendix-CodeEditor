import { Component, ReactNode, createElement, createRef, RefObject } from "react";
import { config } from "ace-builds";
import AceEditor from "react-ace";

import { CodeEditorContainerProps } from "../typings/CodeEditorProps";

const basePath = "widgets/mendix/codeeditor/src-noconflict";
config.set("basePath", basePath);

function loadScript(filename: string): Promise<HTMLScriptElement | null> {
  return new Promise((resolve) => {
    const location = basePath + "/" + filename;
    const head = document.getElementsByTagName("head")[0];
    let script: HTMLScriptElement | null = document.querySelector("script[src=\"" + location + "\"]");
    if (script == null) {
      script = document.createElement("script");
      script.src = location;
      head.appendChild(script);
      script.onload = () => resolve(script);
    }
    resolve(script);
  })
}

interface CodeEditorState {
  modulesLoaded: boolean
}

export default class CodeEditor extends Component<CodeEditorContainerProps, CodeEditorState> {
  editorRef: RefObject<AceEditor> = createRef();
  // state: Readonly<CodeEditorState> = { modulesLoaded: false };

  async loadExtensions(): Promise<void> {
    if (this.props.enableBasicAutocompletion ||
      this.props.enableLiveAutocompletion ||
      this.props.enableSnippets) await loadScript("ext-language_tools.js");
    if (this.props.enableEmmet) await loadScript("ext-emmet.js");
    if (this.props.useElasticTabstops) await loadScript("ext-elastic_tabstops_lite.js");

    // this.setState({ modulesLoaded: true });
  }

  render(): ReactNode {
    // this.loadExtensions();
    // if (!this.state.modulesLoaded) return null;

    return <AceEditor
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
      enableBasicAutocompletion={this.props.enableBasicAutocompletion}
      enableLiveAutocompletion={this.props.enableLiveAutocompletion}
      enableSnippets={this.props.enableSnippets}
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        selectionStyle: this.props.selectionStyle,
        highlightActiveLine: this.props.highlightActiveLine,
        highlightSelectedWord: this.props.highlightSelectedWord,
        readOnly: this.props.value.readOnly,
        cursorStyle: this.props.cursorStyle,
        // mergeUndoDeltas: this.props.mergeUndoDeltas,
        behavioursEnabled: this.props.behavioursEnabled,
        wrapBehavioursEnabled: this.props.wrapBehavioursEnabled,
        autoScrollEditorIntoView: this.props.autoScrollEditorIntoView,
        copyWithEmptySelection: this.props.copyWithEmptySelection,
        useSoftTabs: this.props.useSoftTabs,
        navigateWithinSoftTabs: this.props.navigateWithinSoftTabs,
        enableMultiselect: this.props.enableMultiselect,
        enableAutoIndent: this.props.enableAutoIndent,
        enableKeyboardAccessibility: this.props.enableKeyboardAccessibility,
        hScrollBarAlwaysVisible: this.props.hScrollBarAlwaysVisible,
        vScrollBarAlwaysVisible: this.props.vScrollBarAlwaysVisible,
        highlightGutterLine: this.props.highlightGutterLine,
        animatedScroll: this.props.animatedScroll,
        showInvisibles: this.props.showInvisibles,
        showPrintMargin: this.props.showPrintMargin,
        printMarginColumn: this.props.printMarginColumn,
        // printMargin: this.props.printMargin,
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
        // scrollPastEnd: this.props.scrollPastEnd,
        fixedWidthGutter: this.props.fixedWidthGutter,
        customScrollbar: this.props.customScrollbar,
        // hasCssTransforms: this.props.hasCssTransforms,
        // maxPixelHeight: this.props.maxPixelHeight,
        // useSvgGutterIcons: this.props.useSvgGutterIcons,
        scrollSpeed: this.props.scrollSpeed || undefined,
        dragDelay: this.props.dragDelay || undefined,
        dragEnabled: this.props.dragEnabled,
        // focusTimout: this.props.focusTimout,
        tooltipFollowsMouse: this.props.tooltipFollowsMouse,
        firstLineNumber: this.props.firstLineNumber,
        // overwrite: this.props.overwrite,
        // newLineMode: this.props.newLineMode,
        useWorker: this.props.useWorker,
        indentedSoftWrap: this.props.indentedSoftWrap,
        tabSize: this.props.tabSize,
        // wrap: this.props.wrap,
        // wrapMethod: this.props.wrapMethod,
        // foldStyle: this.props.foldStyle,
        enableEmmet: this.props.enableEmmet
        // useElasticTabstops: this.props.useElasticTabstops
      }}
    />;
  }
}
