import { clsxm } from "@/utils";
import { getTextBlockStyle, toggleBlockType } from "@/utils/EditorUtils";
import { Menu } from "@headlessui/react";
import { useCallback, useState } from "react";
import { useSlateStatic } from "slate-react";

const PARAGRAPH_STYLES = ["h1", "h2", "h3", "h4", "paragraph", "multiple"];

const ElementDropdown = () => {
  const editor = useSlateStatic();

  const handleClick = useCallback(
    (targetType: string) => {
      if (targetType === "multiple") return;
      toggleBlockType(editor, targetType);
    },
    [editor]
  );

  const blockType = getTextBlockStyle(editor);

  return (
    <div className="px-2">
      <Menu>
        <Menu.Button>
          {getLabelForBlockStyle(blockType ?? "paragraph")}
        </Menu.Button>
        <Menu.Items className={"flex flex-col absolute top-8 left-0 z-10"}>
          {PARAGRAPH_STYLES.map((style) => (
            <Menu.Item
              as="div"
              key={style}
              className={clsxm(
                "ui-active:text-base ui-not-active:italic",
                "duration-500 hover:cursor-pointer",
                "px-4 py-2 bg-opacity-80 bg-gray-200 dark:bg-gray-800"
              )}
              onClick={() => handleClick(style)}
            >
              {getLabelForBlockStyle(style)}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default ElementDropdown;

function getLabelForBlockStyle(style: string) {
  switch (style) {
    case "h1":
      return "Heading 1";
    case "h2":
      return "Heading 2";
    case "h3":
      return "Heading 3";
    case "h4":
      return "Heading 4";
    case "paragraph":
      return "Paragraph";
    case "multiple":
      return "Multiple";
    default:
      throw new Error(`Unhandled style in getLabelForBlockStyle: ${style}`);
  }
}
