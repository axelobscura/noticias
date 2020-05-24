import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Head from './layout/head';

const Index = ({ posts }) => (
    <>
        <Head />
        <Container fluid>
            <Row>
                {posts.articles.map((post, index) => (
                    <Col key={index} xs="12" sm="3">
                        <Card>
                            <div style={{ maxHeight: '150px', overflow: 'hidden' }}>
                                <Card.Img variant="top" src={post.urlToImage} />
                            </div>
                            <Card.Body>
                                <Card.Title><Link href="/somos"><h2>{post.title}</h2></Link></Card.Title>
                                <Card.Text>{post.content}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </>
)

export async function getStaticProps() {
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=mx&apiKey=d6e94ae6348c44ab9b20c475613aae01')
    const posts = await res.json()
    return {
        props: {
            posts,
        },
    }
}


export default Index;