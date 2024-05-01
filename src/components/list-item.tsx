import { PropsWithChildren } from "react";
import { classes } from "../utils/theme-utils";

export type ListItemProps = {} & React.LiHTMLAttributes<HTMLLIElement>;

export const ListItem = (props: PropsWithChildren<ListItemProps>) => {
  if (!props?.children) {
    return null;
  }
  return (
    <li
      {...props}
      className={classes(`cursor-pointer hover:bg-gray-100`, props)}
    >
      {props?.children}
    </li>
  );
};
