import { Container, Navbar,Nav} from "react-bootstrap";

import { MdOutlineAccountCircle , MdOutlineArrowCircleDown} from "react-icons/md";

export const BarraNav = () => {

    return( 
      <Navbar bg="primary" variant="dark" style={{height:"12vh"}} >
        <Container>
          <Navbar.Brand href="/" style={{ fontSize:"30px"}} >NUTES-CISAM</Navbar.Brand>
            <Nav className="justify-content-end" >
            <Nav.Link>
                <MdOutlineAccountCircle size={30} color="white"/>
            </Nav.Link>
            <Nav.Link>
                <MdOutlineArrowCircleDown size={30} color="white"/>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

  );
}
