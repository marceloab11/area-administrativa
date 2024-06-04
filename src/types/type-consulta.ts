export type Consulta = {
    id:number,
    data: string,
    horario:string,
    profissional: [{nome:string, especialidade:string}]
    modalidade: string,
    paciente: string
}