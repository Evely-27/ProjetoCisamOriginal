import { Title } from "../../shared/layout/EstilosGerais";
import { useNavigate } from 'react-router-dom';
import { Tabela } from "../../shared/components/Tabela";
import listConsultas from "../../shared/data/consultas.json";
import { Container, Row, Stack } from "react-bootstrap";
import { MdListAlt, MdAdd, MdClear } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import { FormDataConsulta } from "../../shared/components/FormDataConsulta";
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
            <Container >
                <Button variant="success" size="sm" onClick={handleClick} style={{float: 'right' }} >
                        Aplicar
                </Button>
            </Container>
        </Container>
     );
}