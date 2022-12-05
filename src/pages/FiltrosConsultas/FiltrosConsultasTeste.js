import { MdFilterAlt, MdAdd, MdClear } from "react-icons/md";
import { Container, Row, Stack } from "react-bootstrap";
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { FormDataConsulta } from "../../shared/components/FormDataConsulta";
import { Title } from "../../shared/layout/EstilosGerais";
import { BarraNav, Pacientes } from "../../shared/components";
import axios from "axios";
import { useEffect, useState } from "react";


export const FiltrosConsultasTeste = () => {


   const navigate = useNavigate();
   const location = useLocation();
   console.log(location);
    const handleClick = () =>{
        navigate('/gerenciador-filtros');
    }
      


    const [pacientes, setPacientes] = useState([]);
  

  
  
  // chamar essa função toda ver que queria atuzalizar a lista,puxa-la 
    function atualizarLista(filtro) {
        if(filtro && filtro.valor){
            axios.post("http://localhost:3001/api/v1/paciente/", {
                filtro: filtro.filtro,
                valor: filtro.valor
            }).then( response => {
                console.log(response.data);
                setPacientes(response.data.lista);
            }).catch((err) => console.log(err));
    }
        else{
            console.log("Loading inicial");
            axios.post("http://localhost:3001/api/v1/paciente/").then( response => {
                console.log(response.data);
                setPacientes(response.data.lista);
            }).catch((err) => console.log(err));
        }

/*       axios.get('https://iot.14mob.com/api-fiap/public/index.php/users').then( response => {
        setPacientes(response.data.users);
          console.log(response);
      }) */
  
    }
    
  useEffect(() => {
  
      atualizarLista(location.state); // somente chama-la se der certo
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