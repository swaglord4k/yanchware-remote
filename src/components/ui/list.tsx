import { PropsWithChildren } from "react";
import classnames from "classnames";

export type ListProps = {} & React.HTMLAttributes<HTMLUListElement>;

export const List = (props: PropsWithChildren<ListProps>) => {
  if (!props?.children) {
    return null;
  }
  return (
    <ul {...props} className={classnames("list-none", props)}>
      {props.children}
    </ul>
  );
};
