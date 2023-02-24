import { clsxm } from "@/utils";

type HeadingProps = {
  children: React.ReactNode;
};

type H1Props = HeadingProps & React.ComponentProps<"h1">;

const Title: React.FC<H1Props> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <h1
      className={clsxm("font-bold text-5xl leading-[3rem] px-4", className)}
      {...rest}
    >
      {children}
    </h1>
  );
};

export default Title;
