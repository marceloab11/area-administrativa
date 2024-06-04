export const Cabecalho = () => {
    return(
        <header className="flex items-center justify-between px-2 py-4">
            <img src="assets/logo.png" alt="logo da empresa" />
            <div className="flex items-center justify-around gap-7 mr-5">
                <img src="assets/perfil.png" alt="Imagem do perfil do usuario" />
                <a href="#" className=" text-blue-950 font-bold">Sair</a>
            </div>
        </header>
    )
}