import { PropsWithChildren } from "react";

export const Select = (
  props: PropsWithChildren<React.SelectHTMLAttributes<HTMLSelectElement>>
) => (
  <select
    className="border border-gray-500 hover:cursor-pointer disabled:hover:cursor-default disabled:bg-gray-50 rounded-lg text-gray-500 fill-gray-500 px-2"
    {...props}
  >
    {props?.children}
  </select>
);
