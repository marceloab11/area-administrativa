import { Cabecalho } from "@/components/cabecalho";
import { Container } from "@/components/container";
import { Rodape } from "@/components/rodape";
import { Titulo } from "@/components/titulo";
import { ImgTitulo } from "@/data/img-titulo";

const Page = () => {
  return(
    <div>
      <Cabecalho />
      <Container>
          <Titulo imagem={ImgTitulo.consulta} children='Área Administrativa' />
      </Container>
      <Rodape />
    </div>
  )
}

export default Page;