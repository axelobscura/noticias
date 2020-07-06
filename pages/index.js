import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Head from './layout/head';

import styles from './Index.module.css'

const Index = ({ posts }) => (
    <div>
        <Head />
        <Container fluid className={styles.cardas}>
            <Row className="flex-row flex-nowrap">
                {posts.store.abril2020.secciones.map((post, index) => (
                    <Col key={index} xs="12" sm="3" className="p-0 m-1">
                        <Card className={styles.carta}>
                            <div className={styles.imagen}>
                                <Card.Img variant="top" src={post.titulo} />
                            </div>
                            <Card.Body className={styles.cuerpo}>
                                <Card.Title><Link href="/somos"><h2>{post.titulo}</h2></Link></Card.Title>
                                <Card.Text>{post.titulo}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
)

export async function getStaticProps() {
    //const res = await fetch('https://newsapi.org/v2/top-headlines?country=mx&apiKey=d6e94ae6348c44ab9b20c475613aae01')
    const images = await featch('https://pixabay.com/api/?key=16724135-621b009083b44d598216ac09a&q=construction&image_type=photo&pretty=true');
    const posts = require('./api/datos.json');

    console.log("Datos" + posts.store);

    console.log("Datos" + images);

    return {
        props: {
            posts,
        },
    }
}


export default Index;