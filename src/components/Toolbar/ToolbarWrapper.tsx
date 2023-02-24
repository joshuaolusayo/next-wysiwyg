import { clsxm } from "@/utils";

type ToolbarProps = {
  children: React.ReactNode;
} & React.ComponentProps<"div">;

const ToolbarWrapper = ({ children, className, ...rest }: ToolbarProps) => {
  return (
    <div
      className={clsxm(
        "bg-white dark:bg-black border border-black dark:border-white",
        "flex items-center divide-x divide-black dark:divide-white",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ToolbarWrapper;
