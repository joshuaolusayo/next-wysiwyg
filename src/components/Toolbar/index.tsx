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
  const { selection } = props;
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
            icon="lucide:link"
            onMouseDown={() => handleClick("link")}
          />
          <RenderIcon
            icon="lucide:image"
            onMouseDown={() => handleClick("image")}
          />
        </GroupElements>
        <GroupElements>
          <RenderIcon
            icon="lucide:align-left"
            onMouseDown={() => handleClick("left")}
          />
          <RenderIcon
            icon="lucide:align-right"
            onMouseDown={() => handleClick("right")}
          />
          <RenderIcon
            icon="lucide:align-center"
            onMouseDown={() => handleClick("center")}
          />
        </GroupElements>
        <GroupElements>
          <RenderIcon
            icon="lucide:bold"
            className="font-bold"
            onMouseDown={() => handleClick("bold")}
          />
          <RenderIcon
            icon="lucide:italic"
            className="font-bold"
            onMouseDown={() => handleClick("italic")}
          />
        </GroupElements>
        <GroupElements>
          <RenderIcon
            icon="lucide:list"
            onMouseDown={() => handleClick("bulleted-list")}
          />
          <RenderIcon
            icon="lucide:list-ordered"
            onMouseDown={() => handleClick("numbered-list")}
          />
          <RenderIcon
            icon="lucide:list-minus"
            onMouseDown={() => handleClick("link")}
          />
        </GroupElements>
      </ToolbarWrapper>
    </div>
  );
};

export default Toolbar;
