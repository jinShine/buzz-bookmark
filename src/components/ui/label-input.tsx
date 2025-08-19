import { ComponentProps } from "react";

import { Input } from "./input";

type Props = {
  id?: string;
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
} & ComponentProps<"input">;

export default function LabelInput({ id, label, type, placeholder, className, ...props }: Props) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Input type={type} id={id} className={className} placeholder={placeholder} {...props} />
    </>
  );
}
