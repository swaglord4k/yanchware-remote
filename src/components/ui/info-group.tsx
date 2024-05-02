import { InfoLine, InfoLineProps } from "./info-line";

export type InfoGroupProps = {
  infos: InfoLineProps[];
};

export const InfoGroup = ({ infos }: InfoGroupProps) => {
  return (
    <div className="flex flex-col gap-2">
      {infos?.map((i) => (
        <InfoLine key={i.info} icon={i.icon} info={i.info} label={i.label} />
      ))}
    </div>
  );
};
