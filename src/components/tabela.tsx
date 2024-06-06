import { Consul } from "@/utils/consulta"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"


export const Tabela = () => {
    
    return(
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="tabela-customizada">
                    <TableHead>
                        <TableRow>
                            <TableCell className="text-blue-800 text-md font-bold">Data</TableCell>
                            <TableCell className="text-blue-800 text-md font-bold">Hórario</TableCell>
                            <TableCell className="text-blue-800 text-md font-bold">Profissional</TableCell>
                            <TableCell className="text-blue-800 text-md font-bold">Especialidade</TableCell>
                            <TableCell className="text-blue-800 text-md font-bold">Paciente</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Consul.map(linha => 
                            <TableRow>
                                <TableCell component="th" scope="row">{linha.data}</TableCell>
                                <TableCell>{linha.horario}</TableCell>
                                <TableCell>{linha.profissional}</TableCell>
                                <TableCell>{linha.especialidade}</TableCell>
                                <TableCell>{linha.paciente}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}