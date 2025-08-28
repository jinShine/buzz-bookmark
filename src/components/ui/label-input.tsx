import { ComponentProps } from "react";

import { ValidError } from "@/app/auth/sign-in/_components/SignForm";

import { Input } from "./input";

type Props = {
  id?: string;
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
  name?: string;
  error?: ValidError;
} & ComponentProps<"input">;

export default function LabelInput({ id, label, type, placeholder, className, name, error, ...props }: Props) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Input type={type} id={id} name={name || id} className={className} placeholder={placeholder} {...props} />
      {error && name && error[name] && <p className="text-xs text-red-500 mb-1">{error[name].errors.join(", ")}</p>}
    </>
  );
}
