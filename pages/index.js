import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Head from './layout/head';

import styles from './Index.module.css'

const Index = () => (
    <div>
        <Head />
        <Container fluid className={styles.cardas}>
            <Row className="flex-row flex-nowrap">
                
            </Row>
        </Container>
    </div>
)

export default Index;