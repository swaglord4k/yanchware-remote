export type PropsWithClassName = {
  className?: string;
};

export const classes = (styles: string, { className }: PropsWithClassName) =>
  `${styles} ${className || ""}`;
