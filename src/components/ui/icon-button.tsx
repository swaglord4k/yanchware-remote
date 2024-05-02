import { PropsWithChildren } from "react";

export const IconButton = (
  props: PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>
) => <button {...props}>{props?.children}</button>;
