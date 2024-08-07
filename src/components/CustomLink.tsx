import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface IProps extends LinkProps {
  children: ReactNode;
  linkType?: "primary" | "secondary" | "link" | "non";
  className?: string;
  target?: string;
  download?: boolean; // Add download prop
}

const styled = {
  baseStyled: "px-6 py-2 rounded-full inline-block text-sm cursor-pointer",
  primary: "bg-zinc-100 text-zinc-900",
  secondary: "border border-zinc-700 hover:bg-zinc-700",
  link: "text-zinc-400 hover:text-zinc-50 hover:text-underline",
  non: "px-0",
};

export default function CustomLink({
  children,
  linkType = "primary",
  className,
  target,
  download,
  ...props
}: IProps) {
  return (
    <Link {...props} legacyBehavior>
      <a
        className={clsx(
          linkType !== "non" && styled.baseStyled,
          styled[linkType],
          className
        )}
        target={target}
        download={download ? true : undefined}
      >
        {children}
      </a>
    </Link>
  );
}
