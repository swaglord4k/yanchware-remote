import { PropsWithChildren } from "react";
import { Stateful } from "../../models/stateful.model";
import { Status } from "../../models/status.model";
import classnames from "classnames";

export type ContainerProps = {
  className?: string;
} & Stateful;

export const Container = ({
  status,
  className,
  children,
}: PropsWithChildren<ContainerProps>) => {
  if (status === Status.pending) {
    return <p className={classnames(className)}>Loading</p>;
  }
  if (status === Status.failed) {
    return <p className={classnames(className)}>Error</p>;
  }
  return <div className={classnames(className)}>{children}</div>;
};
