import { useNavigate } from 'react-router-dom';
import { Tabela } from "../../shared/components/Tabela";
import listConsultas from "../../shared/data/consultas.json";
import { Container, Row, Stack } from "react-bootstrap";
import { MdFilterAlt, MdAdd, MdClear } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import { FormDataConsulta } from "../../shared/components/FormDataConsulta";
import { Title } from "../../shared/layout/EstilosGerais";
import { BarraNav } from "../../shared/components";


export const FiltrosConsultas = () => {
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/gerenciador-filtros');
    }

    return (
        <Container fluid="sx" >
            <Stack d="auto">
              <BarraNav/>
                <Stack direction="horizontal" gap={3} style={{borderBottom: "5px solid", padding: '4px', alignItems: "center" }}>
                    <MdFilterAlt size={20} />
                    <Title>Filtrar Resultados</Title>
                </Stack>
            </Stack>
            <Container style={{ marginLeft: "0" }}>

                <FormDataConsulta />
                <Stack direction="horizontal" gap={3} style={{marginTop:"8vh"}}>
                    <Button variant="warning" size="sm" >
                        <MdClear size={20} />
                        Limpar Filtros
                    </Button>
                    <Button variant="success" size="sm" onClick={handleClick}>
                        <MdAdd size={20} />
                        Adicionar Filtros
                    </Button>
                </Stack>
                <Row style={{ marginTop: "20px", marginLeft:'10px'}}>
                    <Tabela listaTabela={listConsultas} />
                </Row>
            </Container>
        </Container >
    )
};