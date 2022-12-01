import { MdFilterAlt, MdAdd, MdClear } from "react-icons/md";
import { Container, Row, Stack } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { FormDataConsulta } from "../../shared/components/FormDataConsulta";
import { Title } from "../../shared/layout/EstilosGerais";
import { BarraNav, Pacientes } from "../../shared/components";
import axios from "axios";
import { useEffect, useState } from "react";


export const FiltrosConsultasTeste = () => {


   const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/gerenciador-filtros');
    }
      


    const [pacientes, setPacientes] = useState([]);
  

  
  
  // chamar essa função toda ver que queria atuzalizar a lista,puxa-la 
    function atualizarLista() {
      axios.get('https://iot.14mob.com/api-fiap/public/index.php/users').then( response => {
        setPacientes(response.data.users);
          console.log(response);
      })
  
    }
    
  useEffect(() => {
  
      atualizarLista(); // somente chama-la se der certo
    },[])
  
  

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
                    <Pacientes usuarios={pacientes} atualizarLista= {e => {atualizarLista()}} />
                </Row>
            </Container>
        </Container >
    )
};