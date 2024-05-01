import { PropsWithChildren } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

export type NavigationLinksProps = {} & NavLinkProps &
  React.RefAttributes<HTMLAnchorElement>;

export const NavigationLink = (
  props: PropsWithChildren<NavigationLinksProps>
) => (
  <NavLink
    {...props}
    className={({ isActive, isPending }) =>
      `m-2 text-white ${
        isActive ? "font-bold cursor-default" : "font-normal"
      } ${props.className || ""}`
    }
  >
    {props.children}
  </NavLink>
);
