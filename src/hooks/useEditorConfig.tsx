import { toggleStyle } from "@/utils/EditorUtils";
import isHotkey from "is-hotkey";
import { KeyboardEventHandler, useCallback } from "react";
import { BaseEditor, Editor } from "slate";
import {
  DefaultElement,
  ReactEditor,
  RenderElementProps,
  RenderLeafProps,
} from "slate-react";

export default function useEditorConfig(editor: Editor & ReactEditor) {
  const onKeyDown = useCallback(
    (event: any) => KeyBindings.onKeyDown(editor, event),
    [editor]
  );
  return { renderElement, renderLeaf, onKeyDown };
}

function renderElement(props: RenderElementProps) {
  const { element, children, attributes } = props;
  switch (element.type) {
    case "paragraph":
    case "p":
      return <p className="mb-2 text-gray-800 dark:text-gray-200" {...attributes}>{children}</p>;
    case "h1":
      return (
        <h1 className="text-3xl leading-[3rem] mb-2" {...attributes}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className="text-2xl leading-10 mb-2" {...attributes}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className="text-xl mb-2" {...attributes}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className="text-lg mb-2" {...attributes}>
          {children}
        </h4>
      );
    default:
      // For the default case, we delegate to Slate's default rendering.
      return <DefaultElement {...props} />;
  }
}

function renderLeaf(props: RenderLeafProps) {
  const { attributes, children, leaf } = props;
  let el = <>{children}</>;

  if (leaf.bold) {
    el = <strong>{el}</strong>;
  }

  if (leaf.code) {
    el = <code>{el}</code>;
  }

  if (leaf.italic) {
    el = <em>{el}</em>;
  }

  if (leaf.underline) {
    el = <u>{el}</u>;
  }

  return <span {...attributes}>{el}</span>;
}

type KeyBindings = {
  onKeyDown: (editor: BaseEditor & ReactEditor, event: KeyboardEvent) => void;
};

const KeyBindings: KeyBindings = {
  onKeyDown: (editor, event) => {
    if (isHotkey("mod+b", event)) {
      toggleStyle(editor, "bold");
      return;
    }
    if (isHotkey("mod+i", event)) {
      toggleStyle(editor, "italic");
      return;
    }
    if (isHotkey("mod+c", event)) {
      toggleStyle(editor, "code");
      return;
    }
    if (isHotkey("mod+u", event)) {
      toggleStyle(editor, "underline");
      return;
    }
  },
};
