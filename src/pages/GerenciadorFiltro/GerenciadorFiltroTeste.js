import { Title } from "../../shared/layout/EstilosGerais";
import { useNavigate } from 'react-router-dom';
import { Container, Form, Stack } from "react-bootstrap";
import { MdListAlt } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import { BarraNav } from "../../shared/components";


export const  GerenciadorFiltroTeste= () => {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/consultas-geral');
    }

    return ( 
        <Container fluid="sx">
            <Stack d="auto">
              <BarraNav/>
                <Stack direction="horizontal" gap={3} style={{borderBottom: "10px", padding: '4px', alignItems: "center" }}>
                    <MdListAlt size={25} />
                    <Title>Gerenciador de Filtros</Title>
                </Stack>
                <div className="Traco" style={{height:"1px", backgroundColor:"#000" }}></div>
            </Stack>

            
            <Container style={{ marginLeft: "0" }}>
                <Stack direction="horizontal" gap={3} style={{marginTop:"8vh"}}>
                        <Form.Label> Nome do Filtro</Form.Label>
                        <Form.Select className= "Select do filtro" 
                        style={{ width:"30%"}}
                        >
                            <option value="All">Id</option>
                            <option value="CPF">CPF</option>
                            <option value="Código de Consulta">Código de Consulta</option>
                            <option value="Cartão SUS">Cartão SUS</option>
                            <option value="Telefone">Telefone</option>
                            <option value="All">Email</option>
                        </Form.Select>

                        <Form.Label > Filtrar por:</Form.Label>
                        <Form style={{ width:"40%"}}>
                            <input 
                            type="text"
                            />
                        </Form>
                        </Stack>
                </Container>
                

            <Container style ={{display: 'flex', justifyContent: 'right', position: 'absolute' , bottom: 40, right: 40}}>
                <Button variant="success" size="md" onClick={handleClick}>
                        Aplicar
                </Button>
            </Container>
        </Container>
     );
}