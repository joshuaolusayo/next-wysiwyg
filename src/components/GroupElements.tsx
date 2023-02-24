import { clsxm } from "@/utils";

type Props = {} & React.ComponentProps<"div">;

const GroupElements: React.FC<Props> = (props) => {
  const { children, className } = props;
  return (
    <div className={clsxm("flex h-full border-r border-black dark:border-white items-center", className)}>
      {children}
    </div>
  );
};

export default GroupElements;
