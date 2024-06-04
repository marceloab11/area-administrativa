import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Container = ({children}:Props) => {
    return(
        <div className="b bg-slate-200 m-8 rounded-md p-8 h-full">
            {children}
        </div>
    )
}