import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

export async function getStaticProps() {
    //const res = await fetch('https://newsapi.org/v2/top-headlines?country=mx&apiKey=d6e94ae6348c44ab9b20c475613aae01')
    //const images = await featch('https://pixabay.com/api/?key=16724135-621b009083b44d598216ac09a&q=construction&image_type=photo&pretty=true');
    //const posts = require('./api/datos.json');

    
    return {
        props: {
            posts,
        },
    }
    
}


export default Index;