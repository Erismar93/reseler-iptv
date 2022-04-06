import { CSSProperties, PropsWithChildren } from "react"
import clsx from 'clsx'
type WrapperSectionProps = PropsWithChildren<{
    className?: string
    style?: CSSProperties
    noPadding?: boolean
}>

export const WrapperSection = (props: WrapperSectionProps) => {
    const {children,className,style,noPadding = false} = props
    return (
        <div className={clsx("w-full",!noPadding && "px-10 lg:px-40 xl:px-60 py-10",className)} style={style}>{children}</div>
    )
}