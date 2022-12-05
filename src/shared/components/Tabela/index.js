import  'bootstrap/dist/css/bootstrap.min.css' ;
import {Table , Container } from "react-bootstrap";
import { MdClear, MdFilterAlt } from "react-icons/md";


export const Tabela = ({ listaTabela }) => {

    return (
        <Container >
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th> Ações </th>
                        <th>id
                        <MdFilterAlt/>
                        </th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Código  Consulta</th>
                        <th>Data da Consulta</th>
                    </tr>
                </thead>
                <tbody>
                    {listaTabela.map (content => ( 

                        <tr>
                        <td>{content.id}</td>
                        <td>{content.nome}</td>
                        <td>{content.cpf}</td>
                        <td>{content.codigo_consulta}</td>
                        <td>{content.data_consulta}</td>
                    </tr>
                    ))
                    }
                </tbody>
            </Table>
        </Container >
    )
}