import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Head from './layout/head';

const Contacto = () => (
    <>
        <Head />
        <Container fluid>
            <Row className="flex-row flex-nowrap justify-content-center align-items-center" style={{height:'90vh'}}>
                <h1>CONTACTO ----</h1>
            </Row>
        </Container>
    </>
)

export default Contacto;