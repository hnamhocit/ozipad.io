import {FC, memo, ReactNode} from "react";
import clsx from "clsx";

interface CenterProps {
	children: ReactNode
	className?: string
}

const Center: FC<CenterProps> = ({children, className}) => {
	return (
		<div className={clsx('absolute inset-0 flex items-center' +
			' justify-center', className)}>{children}</div>
	)
}
export default memo(Center)
