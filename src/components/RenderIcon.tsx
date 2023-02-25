import { clsxm } from "@/utils";
import { Icon } from "@iconify/react";

type Props = {
  icon: string;
  isActive: boolean;
} & React.ComponentProps<"div">;

const RenderIcon: React.FC<Props> = (props) => {
  const { className, icon, isActive, ...rest } = props;
  return (
    <>
      <div className={clsxm("grid place-content-center px-2 h-full", {
        "bg-black text-white dark:bg-white dark:text-black": isActive
      })} {...rest}>
        <Icon icon={icon} className={clsxm("w-5 h-5", className)} />
      </div>
    </>
  );
};

export default RenderIcon;
