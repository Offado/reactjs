import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';

function App() {
    return (
        <>
            <div className="App">
                <Navbar bg="primary" data-bs-theme="dark">
                    <Container>
                    <Navbar.Brand href="#home">AGP</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Accueil</Nav.Link>
                        <Nav.Link href="#features">Clients</Nav.Link>
                        <Nav.Link href="#pricing">Rendez-vous</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>

                <br></br><br></br><br></br>

                <h1 style={{ marginLeft: '20px' }}>Tableau de bord</h1>

                <br></br>

                <Card style={{ width: '18rem', float: 'left', display: 'flex', gap: '2rem', marginLeft: '30px' }}>
                    <Card.Body>
                        <Card.Title>Clients</Card.Title>
                        <Card.Text>
                        Nombre de clients: 20
                        </Card.Text>
                        <Card.Link href="#">Voir plus</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20rem', float: 'left', marginLeft: '50px' }}>
                    <Card.Body>
                        <Card.Title>Rendez-vous</Card.Title>
                        <Card.Text>
                        Vous avez rendez-vous le 07/07/2024
                        </Card.Text>
                        <Card.Link href="#">Voir plus</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '20rem', float: 'left', marginLeft: '50px' }}>
                    <Card.Body>
                        <Card.Title>Statistiques</Card.Title>
                        <Card.Text>
                        Total clients: 80
                        Total rendez-vous: 80
                        </Card.Text>
                        <Card.Link href="#">Voir plus</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default App;