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
  
        axios.delete("https://iot.14mob.com/api-fiap/public/index.php/users/" + id).then( response => {
            alert('Deu certo removi o usuario')
  
           props.atualizarLista();
  
        }).catch( error => console.log(error));
  
    }

    return (
        <Container >
            <Table striped bordered hover>
            <thead>
            <tr>
            <th>Ações</th>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            </tr>
        
        </thead>  
        <tbody> 
            { props.usuarios.map( pacientes => {
                return (
                    <tr key={pacientes.id}>
                        <td>
                            <MdDelete size={20}  onClick={ event => removerPaciente(pacientes.id) } />
                            <MdModeEditOutline size={20} onClick={handleClick} />
                            
                            </td>
                        <td>{pacientes.id}</td>
                        <td>{pacientes.name}</td>
                        <td>{pacientes.email}</td>
                        
                    </tr>
                    )
            } ) }
        </tbody>
            </Table>
        </Container >
    )
}