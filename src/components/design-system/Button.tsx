import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

type BaseButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkButtonProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
};

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants[variant], className);

  if ("href" in props && props.href) {
    const linkProps = props as Omit<LinkButtonProps, keyof BaseButtonProps>;
    const { href, ...restLinkProps } = linkProps;

    return (
      <Link href={href} className={classes} {...restLinkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as Omit<NativeButtonProps, keyof BaseButtonProps>;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
