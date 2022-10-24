import {  Stack, Form} from "react-bootstrap";

export const FormDataConsulta = () => {

    return (
        <Stack direction="horizontal" style={{ marginBlock:"20px", alignItems:"center" }}>
                <Form.Label style={{ width:"25vh" }}>Data da Consulta</Form.Label>
                <Form.Control placeholder="15/10/2022" style={{ width:"25vh", }}/>
        </Stack>
    )
};
