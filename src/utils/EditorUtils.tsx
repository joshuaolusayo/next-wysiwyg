import { Editor, Range, BaseEditor, Transforms } from "slate";

export function getActiveStyles(editor: BaseEditor) {
  return new Set(Object.keys(Editor.marks(editor) ?? {}));
}

export function getTextBlockStyle(editor: BaseEditor) {
  const selection = editor.selection;

  if (selection == null) {
    return null;
  }
  // gives the forward-direction points in case the selection was
  // was backwards.
  const [start, end] = Range.edges(selection);

  //path[0] gives us the index of the top-level block.
  let startTopLevelBlockIndex = start.path[0];
  const endTopLevelBlockIndex = end.path[0];

  let blockType = null;
  while (startTopLevelBlockIndex <= endTopLevelBlockIndex) {
    const [node, _] = Editor.node(editor, [startTopLevelBlockIndex]);
    if (blockType == null) {
      console.log(node.type);
      blockType = node.type;
    } else if (blockType !== node.type) {
      return "multiple";
    }
    startTopLevelBlockIndex++;
  }

  return blockType;
}

export function toggleBlockType(editor: BaseEditor, blockType: string) {
  const currentBlockType = getTextBlockStyle(editor);
  console.log({ currentBlockType, blockType });
  const changeTo = currentBlockType === blockType ? "paragraph" : blockType;
  console.log({ selection: editor.selection, changeTo });
  Transforms.setNodes(
    editor,
    { type: changeTo },
    {
      at: editor.selection ?? undefined,
      match: (n) => Editor.isBlock(editor, n),
    }
  );
}

export function toggleStyle(editor: BaseEditor, style: string) {
  const activeStyles = getActiveStyles(editor);
  if (activeStyles.has(style)) {
    Editor.removeMark(editor, style);
  } else {
    Editor.addMark(editor, style, true);
  }
}

export function hasActiveLinkAtSelection(editor: Editor) {
  return isLinkNodeAtSelection(editor, editor.selection);
}

export function isLinkNodeAtSelection(editor: Editor, selection: any) {
  if (selection == null) {
    return false;
  }

  return (
    Editor.above(editor, {
      at: selection,
      match: (n) => n.type === "link",
    }) != null
  );
}
