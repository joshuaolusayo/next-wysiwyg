"use client";

import { Editable, Slate, withReact } from "slate-react";
import { createEditor, Descendant } from "slate";
import { useCallback, useMemo } from "react";
import { useEditorConfig } from "@/hooks";
import useSelection from "@/hooks/useSelection";
import Toolbar from "./Toolbar";

type Props = {
  document: Descendant[];
  onChange?: (value: Descendant[]) => void;
};

export default function Editor({ document, onChange = () => {} }: Props) {
  const editor = useMemo(() => withReact(createEditor()), []);
  const { renderElement, renderLeaf, onKeyDown } = useEditorConfig(editor);
  const [selection, setSelection] = useSelection(editor);
  const onChangeHandler = useCallback(
    (document: Descendant[]) => {
      onChange(document);
      const selection = editor.selection;
      if (selection) {
        setSelection(selection);
      }
    },
    [editor.selection, onChange, setSelection]
  );

  return (
    <div className={"px-4"}>
      <Slate editor={editor} value={document} onChange={onChange}>
        <Toolbar selection={selection} />
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={onKeyDown}
        />
      </Slate>
    </div>
  );
}
