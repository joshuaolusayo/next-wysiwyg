import ElementDropdown from "@/components/ElementDropdown";
import GroupElements from "@/components/GroupElements";
import RenderIcon from "@/components/RenderIcon";
import { BaseSelection } from "slate";
import ToolbarWrapper from "./ToolbarWrapper";
import { getActiveStyles, toggleStyle } from "@/utils/EditorUtils";
import { useSlateStatic } from "slate-react";

type Props = {
  selection: BaseSelection;
};
const Toolbar = (props: Props) => {
//   const { selection } = props;
  const editor = useSlateStatic();

  const handleClick = (style: string) => {
    toggleStyle(editor, style);
  };

  return (
    <div className="grid place-content-start my-4">
      <ToolbarWrapper className="relative h-10">
        <ElementDropdown />
        <GroupElements>
          <RenderIcon
            isActive={getActiveStyles(editor).has("link")}
            icon="lucide:link"
            onMouseDown={() => handleClick("link")}
          />
          <RenderIcon
            isActive={getActiveStyles(editor).has("image")}
            icon="lucide:image"
            onMouseDown={() => handleClick("image")}
          />
        </GroupElements>
        <GroupElements>
          <RenderIcon
            isActive={getActiveStyles(editor).has("left")}
            icon="lucide:align-left"
            onMouseDown={() => handleClick("left")}
          />
          <RenderIcon
            isActive={getActiveStyles(editor).has("right")}
            icon="lucide:align-right"
            onMouseDown={() => handleClick("right")}
          />
          <RenderIcon
            isActive={getActiveStyles(editor).has("center")}
            icon="lucide:align-center"
            onMouseDown={() => handleClick("center")}
          />
        </GroupElements>
        <GroupElements>
          <RenderIcon
            isActive={getActiveStyles(editor).has("bold")}
            icon="lucide:bold"
            className="font-bold"
            onMouseDown={() => handleClick("bold")}
          />
          <RenderIcon
            isActive={getActiveStyles(editor).has("underline")}
            icon="lucide:underline"
            className="underline"
            onMouseDown={() => handleClick("underline")}
          />
          <RenderIcon
            isActive={getActiveStyles(editor).has("italic")}
            icon="lucide:italic"
            className="font-bold"
            onMouseDown={() => handleClick("italic")}
          />
        </GroupElements>
        <GroupElements>
          <RenderIcon
            isActive={getActiveStyles(editor).has("bulleted-list")}
            icon="lucide:list"
            onMouseDown={() => handleClick("bulleted-list")}
          />
          <RenderIcon
            isActive={getActiveStyles(editor).has("numbered-list")}
            icon="lucide:list-ordered"
            onMouseDown={() => handleClick("numbered-list")}
          />
          <RenderIcon
            isActive={getActiveStyles(editor).has("link")}
            icon="lucide:list-minus"
            onMouseDown={() => handleClick("link")}
          />
        </GroupElements>
      </ToolbarWrapper>
    </div>
  );
};

export default Toolbar;
