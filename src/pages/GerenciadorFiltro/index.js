import { Title } from "../../shared/layout/EstilosGerais";
import { useNavigate } from 'react-router-dom';
import { Container, Stack } from "react-bootstrap";
import { MdListAlt } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import { BarraNav } from "../../shared/components";


export const  GerenciadorFiltro= () => {
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
                    <div>Nome do Filtro
                        <select class = "Select do filtro" >
                            
                            <option>Id</option>
                            <option>CPF</option>
                            <option>Código de Consulta</option>
                            <option>Cartão SUS</option>
                            <option>Telefone</option>
                            <option>Email</option>
                        </select>
                        </div>

                        <form>
                            <div className='NomeDoFiltro'>Filtrar por:
                            <input 
                            type="text"
                            />
                            </div>
                        </form>
                        </Stack>
                </Container>

            <Container style ={{display: 'flex', justifyContent: 'right', position: 'absolute' , bottom: 40, right: 40}}>
                <Button variant="success" size="sm" onClick={handleClick}>
                        Aplicar
                </Button>
            </Container>
        </Container>
     );
}