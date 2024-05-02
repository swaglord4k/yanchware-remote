import { Tooltip } from "react-tooltip";
import { PropsWithClassName } from "../../models/propsc-with-classname";

export type InfoLineProps = {
  icon?: JSX.Element;
  label: string;
  info?: string;
} & PropsWithClassName;

export const InfoLine = ({ icon, info, label, className }: InfoLineProps) => {
  if (icon) {
    return (
      <div className={className}>
        <Tooltip id={`${label}-tooltip`} />
        <div
          data-tooltip-id={`${label}-tooltip`}
          data-tooltip-content={label}
          className="flex flex-row flex-wrap font-light text-sm gap-2 items-center"
        >
          {icon}
          <p>{info}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row flex-wrap font-light text-sm gap-2 items-center">
        <p>{label}</p>
        <p>{info}</p>
      </div>
    );
  }
};
