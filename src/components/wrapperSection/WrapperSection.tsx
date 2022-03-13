import { PropsWithChildren } from "react"
import clsx from 'clsx'
type WrapperSectionProps = PropsWithChildren<{
    isFirst?: boolean
}>

export const WrapperSection = (props: WrapperSectionProps) => {
    const {children,isFirst = false} = props
    return (
        <div className={clsx("w-full h-screen",isFirst && 'pt-32')}>{children}</div>
    )
}