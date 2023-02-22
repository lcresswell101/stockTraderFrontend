import {UseFormRegister} from "react-hook-form";

type InputProps = {
  name: string,
  type: string,
  register: UseFormRegister<any>,
  rules: object
}

export const Input = ({name, type, register, rules}: InputProps) => {
  return (
    <input type={type} {...(register && register(name, rules))} className="border p-3"/>
  )
}