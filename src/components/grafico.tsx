import { Consulta } from "@/types/type-consulta";
import { Profissional } from "@/types/type-profissional"
import { Profi } from "@/utils/Profissional";
import { Consul } from "@/utils/consulta";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

type Props = {
    profissionais: Profissional[] | null;
    consultas: Consulta[] | null
}

type Dados = {
    nome:string,
    consulta:number
}

export const Grafico = () => {
    const useDadosGrafico = ({profissionais, consultas}:Props) => {
        let dados: Array<Dados> = [];

        if(profissionais && consultas) {
            dados = profissionais.map((profissionais) =>({
                nome: profissionais.nome,
                consulta: consultas.filter((consulta) =>
                    consulta.profissional=== profissionais.nome
                ).length
            }))
        }
        return dados;
    }

    const profissionais = Profi;
    const consultas = Consul;

    let dados: Dados[] = useDadosGrafico({profissionais, consultas});

    return(
        <ResponsiveContainer width='100%' height={350}>
            <BarChart
            layout="vertical"
            data={dados}
            margin={{top:25, right:40, left: 40, bottom: 20}}
            >
                <XAxis type="number"></XAxis>
                <YAxis type="category" dataKey="nome"></YAxis>
                <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
            </BarChart>
        </ResponsiveContainer>
    )
}