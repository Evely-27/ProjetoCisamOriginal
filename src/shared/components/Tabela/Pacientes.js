import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import {Table , Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import axios from "axios";

export const Pacientes = (props) => {
    
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/confirmar-consulta');
    }

    function removerPaciente(id){
        console.log('funcionando' + id);
  
        axios.delete("http://localhost:3001/api/v1/paciente/" + id).then( response => {
  
           props.atualizarLista();
  
        }).catch( error => console.log(error));
  
    }

    return (
        <Container >
            <Table striped bordered hover>
            <thead>
            <tr>
            <th>Ações</th>
            <th>CPF</th>
            <th>Nome</th>
            <th>Email</th>
            </tr>
        
        </thead>  
        <tbody> 
            { props.usuarios.map( pacientes => {
                return (
                    <tr key={pacientes.cpf_paciente}>
                        <td>
                            <MdDelete size={20}  onClick={ event => removerPaciente(pacientes.cpf_paciente) } />
                            <MdModeEditOutline size={20} onClick={handleClick} />
                            
                            </td>
                        <td>{pacientes.cpf_paciente}</td>
                        <td>{pacientes.nomePaciente}</td>
                        <td>{pacientes.email}</td>
                        
                    </tr>
                    )
            } ) }
        </tbody>
            </Table>
        </Container >
    )
}