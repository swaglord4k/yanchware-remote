import { PropsWithChildren } from "react";
import { classes } from "../utils/theme-utils";

export type ListProps = {} & React.HTMLAttributes<HTMLUListElement>;

export const List = (props: PropsWithChildren<ListProps>) => {
  if (!props?.children) {
    return null;
  }
  return (
    <ul {...props} className={classes("list-none", props)}>
      {props.children}
    </ul>
  );
};
