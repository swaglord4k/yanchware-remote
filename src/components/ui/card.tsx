import { PropsWithChildren } from "react";
import { Stateful } from "../../models/stateful.model";
import { Status } from "../../models/status.model";
import { Loading } from "../../app/loading";
import { PropsWithClassName } from "../../models/propsc-with-classname";
import classnames from "classnames";

export type CardProps = {} & Stateful & PropsWithClassName;

export const Card = ({
  children,
  status,
  className,
}: PropsWithChildren<CardProps>) => (
  <div
    className={classnames(
      "border-gray-100 bg-white border rounded-md px-4 py-2 m-4 max-md:m-0 shadow-md",
      className
    )}
  >
    {status === Status.pending ? <Loading /> : children}
  </div>
);
