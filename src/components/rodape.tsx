export const Rodape = () => {
    return(
        <footer className="flex flex-col h-full text-white p-4 bg-blue-950 items-center text-center">
            <ul className=" w-40 flex justify-around items-center mb-4">
                <a href="#">
                    <li><img src="assets/facebook.png" alt="facebook" /></li>
                </a>
                <a href="#">
                    <li><img src="assets/instagram.png" alt="instagram" /></li>
                </a>
                <a href="#">
                    <li><img src="assets/whatsapp.png" alt="whatsapp" /></li>
                </a>
            </ul>
            <p>Criado por Marcelo Augusto - Marcelo_ab11</p>
        </footer>
    )
}