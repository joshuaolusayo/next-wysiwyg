import { clsxm } from "@/utils";
import { Icon } from "@iconify/react";

type Props = {
  icon: string;
} & React.ComponentProps<"div">;

const RenderIcon: React.FC<Props> = (props) => {
  const { className, icon, ...rest } = props;
  return (
    <>
      <div className="grid place-content-center px-2" {...rest}>
        <Icon icon={icon} className={clsxm("w-5 h-5", className)} />
      </div>
    </>
  );
};

export default RenderIcon;
