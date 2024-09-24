import { Component, ReactNode, createElement } from "react";
import { config } from "ace-builds";
import AceEditor from "react-ace";

import { CodeEditorPreviewProps } from "../typings/CodeEditorProps";

config.set("basePath", "https://cdn.jsdelivr.net/npm/ace-builds@1.32.5/src-min-noconflict");

export class preview extends Component<CodeEditorPreviewProps> {
    render(): ReactNode {
        return <AceEditor
        name="CodeEditorPreview"
        className={this.props.class}
        mode={this.props.mode}
        theme={this.props.theme}
        height={this.props.height}
        width={this.props.width}
        onChange={() => { }}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          selectionStyle: this.props.selectionStyle,
          highlightActiveLine: this.props.highlightActiveLine,
          highlightSelectedWord: this.props.highlightSelectedWord,
          readOnly: false,
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
          printMarginColumn: this.props.printMarginColumn ?? undefined,
          // printMargin: this.props.printMargin,
          fadeFoldWidgets: this.props.fadeFoldWidgets,
          showFoldWidgets: this.props.showFoldWidgets,
          showLineNumbers: this.props.showLineNumbers,
          showGutter: this.props.showGutter,
          displayIndentGuides: this.props.displayIndentGuides,
          highlightIndentGuides: this.props.highlightIndentGuides,
          fontSize: this.props.fontSize,
          fontFamily: this.props.fontFamily,
          maxLines: this.props.maxLines ?? undefined,
          minLines: this.props.minLines ?? undefined,
          // scrollPastEnd: this.props.scrollPastEnd,
          fixedWidthGutter: this.props.fixedWidthGutter,
          theme: this.props.theme,
          customScrollbar: this.props.customScrollbar,
          // hasCssTransforms: this.props.hasCssTransforms,
          // maxPixelHeight: this.props.maxPixelHeight,
          // useSvgGutterIcons: this.props.useSvgGutterIcons,
          scrollSpeed: this.props.scrollSpeed ?? undefined,
          dragDelay: this.props.dragDelay ?? undefined,
          dragEnabled: this.props.dragEnabled,
          focusTimout: this.props.focusTimout ?? undefined,
          tooltipFollowsMouse: this.props.tooltipFollowsMouse,
          firstLineNumber: this.props.firstLineNumber ?? undefined,
          // overwrite: this.props.overwrite,
            // newLineMode: this.props.newLineMode,
          useWorker: this.props.useWorker,
          indentedSoftWrap: this.props.indentedSoftWrap,
          tabSize: this.props.tabSize ?? undefined,
            // wrap: this.props.wrap,
          wrapMethod: this.props.wrapMethod,
            // foldStyle: this.props.foldStyle,
          mode: this.props.mode,
          enableBasicAutocompletion: this.props.enableBasicAutocompletion,
          enableLiveAutocompletion: this.props.enableLiveAutocompletion,
          enableSnippets: this.props.enableSnippets,
          enableEmmet: this.props.enableEmmet,
          useElasticTabstops: this.props.useElasticTabstops
        }}
      />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/CodeEditor.css");
}
