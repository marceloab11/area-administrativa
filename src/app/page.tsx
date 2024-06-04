import { Cabecalho } from "@/components/cabecalho";
import { Container } from "@/components/container";
import { Rodape } from "@/components/rodape";
import { Tabela } from "@/components/tabela";
import { Titulo } from "@/components/titulo";
import { ImgTitulo } from "@/data/img-titulo";
import { Consul } from "@/utils/consulta";

const Page = () => {
 
  return(
    <div>
      <Cabecalho />
      <Container>
          <Titulo imagem={ImgTitulo.consulta} children='Área Administrativa' />
          <Tabela />
      </Container>
      <Rodape />
    </div>
  )
}

export default Page;