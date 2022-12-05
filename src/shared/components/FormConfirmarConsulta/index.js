import { useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



export const FormConfirmarConsulta = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/consultas-geral');
    }


    return (
        <Container fluid="sx" style={{marginLeft: 10}}> 

            <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ marginRight: 9, marginTop:'50px' }}>
                <Row className="mb-3" >
                    <Form.Group as={Col} md="6"  controlId="validationCustom01">
                        <Form.Label>Médico</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Nome do médico"
                            defaultValue="Laura Olinda Bregieiro Ferreira"
                        />
                        <Form.Control.Feedback>Tudo certo!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom02" >
                        <Form.Label>Plano</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Plano"
                            defaultValue="SUS"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3"  style={{marginTop:'50px'}}>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Especialidade</Form.Label>
                        <Form.Control type="text" placeholder="Ginecologista e Obstetra" required />
                        {/* <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>Data</Form.Label>
                        <Form.Control type="date" required />
                        <Form.Control.Feedback type="invalid">
                            Por favor escolha uma data valida!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Horário</Form.Label>
                        <Form.Control type="time" placeholder="Zip" required />
                        <Form.Control.Feedback type="invalid">
                            Por favor escolha um horário valido!
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit" style={{marginTop:10}} onClick={handleClick}>Enviar</Button>
            </Form>
        </Container>
    );
}
