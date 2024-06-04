import { Consul } from "@/utils/consulta"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"


export const Tabela = () => {
    
    return(
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="tabela-customizada">
                    <TableHead>
                        <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell>Hórario</TableCell>
                            <TableCell>Profissional</TableCell>
                            <TableCell>Especialidade</TableCell>
                            <TableCell>Paciente</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Consul.map(linha => 
                            <TableRow>
                                <TableCell component="th" scope="row">{linha.data}</TableCell>
                                <TableCell>{linha.horario}</TableCell>
                                <TableCell>{linha.profissional}</TableCell>
                                <TableCell>{linha.modalidade}</TableCell>
                                <TableCell>{linha.paciente}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}