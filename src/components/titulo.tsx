import { ImgTitulo } from "@/data/img-titulo"
import { ReactNode } from "react"

type Props = {
    imagem:string,
    children: ReactNode
}

export const Titulo = ({imagem, children}:Props) => {
    return(
        <div className="flex items-center mb-4">
            <img src={imagem} alt="" />
            <h2 className="text-blue-400 ml-2 font-bold">{children}</h2>
        </div>
    )
}