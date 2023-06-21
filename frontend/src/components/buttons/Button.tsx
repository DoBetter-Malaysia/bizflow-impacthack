"use client";

import {
  Button as MantineButton,
  clsx,
  ButtonProps as MantineButtonProps
} from "@mantine/core";

import { PolymorphicComponentProps } from "@mantine/utils";

type ButtonProps = PolymorphicComponentProps<"button", MantineButtonProps>;

const Button = ({
  children,
  variant = "filled",
  color = "blue",
  ...props
}: ButtonProps) => {
  return (
    <MantineButton
      {...props}
      className={clsx(
        "rounded-md px-4 py-4 transition-all",
        {
          "bg-blue-500 hover:bg-blue-600 active:bg-blue-700":
            variant == "filled",
          " text-blue-500 hover:text-blue-600 active:text-blue-700":
            variant == "subtle",
          "border-blue-600 bg-transparent text-blue-500 hover:border-blue-600 hover:bg-blue-500/20 active:bg-blue-600/20":
            variant == "outline"
        },
        props.className
      )}
      variant={variant}
      classNames={{ root: "!h-[unset] py-1" }}
    >
      {children}
    </MantineButton>
  );
};

export default Button;
