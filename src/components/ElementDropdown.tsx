import { clsxm } from "@/utils";
import { getTextBlockStyle, toggleBlockType } from "@/utils/EditorUtils";
import { Menu } from "@headlessui/react";
import { useCallback, useEffect, useState } from "react";
import { useSlateStatic } from "slate-react";

const BLOCK_STYLES = [
  { name: "h1", label: "Heading 1" },
  { name: "h2", label: "Heading 2" },
  { name: "h3", label: "Heading 3" },
  { name: "h4", label: "Heading 4" },
  { name: "paragraph", label: "Paragraph" },
  { name: "multiple", label: "Multiple" },
];

type Option = { name: string; label: string };

const ElementDropdown = () => {
  const editor = useSlateStatic();
  // const [selected, setSelected] = useState<Option>({
  //   name: "paragraph",
  //   label: "Paragraph",
  // });

  const handleClick = useCallback(
    (targetType: Option) => {
      if (targetType.name === "multiple") return;
      // setSelected(targetType);
      toggleBlockType(editor, targetType.name);
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
          {BLOCK_STYLES.map((style) => (
            <Menu.Item
              as="div"
              key={style.name}
              className={clsxm(
                "ui-active:text-base ui-not-active:italic",
                "duration-500 hover:cursor-pointer",
                "px-4 py-2 bg-opacity-80 bg-gray-200 dark:bg-gray-800"
              )}
              onClick={() => handleClick(style)}
            >
              {style.label}
              {/* {getLabelForBlockStyle(style)} */}
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
