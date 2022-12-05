import { Container, Stack } from "react-bootstrap";
import { MdEditNote } from "react-icons/md";

import { Title } from "../../shared/layout/EstilosGerais";
import { BarraNav, FormConfirmarConsulta } from "../../shared/components";


export const ConfirmarConsulta = () => {

    return (

        <Container fluid="sx">
               <Stack d="auto">
              <BarraNav/>
                <Stack direction="horizontal" gap={3} style={{borderBottom: "5px solid", padding: '4px', alignItems: "center" }}>
                    <MdEditNote size={40} />
                    <Title>Confirmar Consulta</Title>
                </Stack>
                </Stack>
                    <FormConfirmarConsulta />
        </Container>
    );
};