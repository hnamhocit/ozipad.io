import { Input, InputProps } from "@heroui/react"
import { FC, memo } from "react"
import InputPassword from "../InputPassword"

interface FormGroupProps extends InputProps {
  message?: string
}

const FormGroup: FC<FormGroupProps> = ({ message, ...props }) => {
  return props.type === 'password'
    ? <InputPassword {...props} errorMessage={message} isInvalid={!!message} />
    : <Input {...props} errorMessage={message} isInvalid={!!message} />
}

export default memo(FormGroup)
