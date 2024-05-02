import { PropsWithChildren } from "react";
import classnames from "classnames";

export type ListItemProps = {} & React.LiHTMLAttributes<HTMLLIElement>;

export const ListItem = (props: PropsWithChildren<ListItemProps>) => {
  if (!props?.children) {
    return null;
  }
  return (
    <li
      {...props}
      className={classnames(`cursor-pointer rounded-sm`, props.className)}
    >
      {props?.children}
    </li>
  );
};
