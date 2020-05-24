import Head from 'next/head';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function IndexPage() {
  return (
    <>
      <Head>
        <title>REVISTA CONSTRUCCIÓN Y TECNOLOGÍA EN CONCRETO - Instituto Mexicano del Cemento y del Concreto A.C.</title>
        <link rel="icon" type="image/png" href="http://www.imcyc.com/revistacyt/templates/resvista_cyt/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;700&display=swap" rel="stylesheet"></link>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />
      </Head>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home">
        <img src="/logo.png" alt="my image" style={{ width: '230px'}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Nav className="mr-sm-2">
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>

  )
}

export default IndexPage