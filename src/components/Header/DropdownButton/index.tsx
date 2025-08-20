import {Button, ButtonProps, Image} from "@heroui/react"
import {FC, memo, useState} from "react"
import clsx from 'clsx'

const DropdownButton: FC<ButtonProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => setIsOpen(prev => !prev)

  return (
    <Button {...props} size='sm' variant="light" onPress={toggleIsOpen} endContent={
      <Image src='/main/caret-down.svg' alt='Caret down' width={18} height={18} className={clsx("transition-all", {
        "rotate-180": isOpen
      })} />
    } />
  )
}

export default memo(DropdownButton)
