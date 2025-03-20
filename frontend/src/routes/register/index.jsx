import { Card, Col, Container, Row, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainNavigation from '../../components/MainNavigation';


export default function Register() {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const SubmitRegister = (event) => {
        event.preventDefault();
        var fname = event.target[0].value;
        var sname = event.target[1].value;
        var email = event.target[2].value;
        var password = event.target[3].value;
        var passwordRepeat = event.target[4].value

        if (password == passwordRepeat) {
            axios.post('http://localhost:3000/users', {
                email, password, fname, sname
            }).then((res) => {
                navigate('/login')
            }).catch((error) => {
                setShow(true);
                setMessage(error.error.data.message)
            })
        } else {
            setShow(true);
            setMessage("Passwords do not match");
        }
    }

    return (
        <>
            <MainNavigation />
            <Container fluid className="vh-100 d-flex justify-content-center align-items-center">
                <Row className="w-50 justify-content-center">
                    <Col md={6}>

                        <Card className="shadow">
                            <Card.Body>
                                <Card.Title className="fs-2 text-center"><strong>Signup</strong></Card.Title>
                                <Form onSubmit={SubmitRegister}>
                                    <Form.Group className='mb-3' controlId='formEmail' name='email'>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="name" placeholder="Enter First Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="name" placeholder="Enter Last Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Repeat Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Button style={{ width: "100%" }} variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>

                            </Card.Body>
                        </Card>
                        <div style={{ paddingTop: "20px" }}>
                            <Alert show={show} variant='danger' >
                                <Alert.Heading>Warning</Alert.Heading>
                                <p>The information you have entered is incorrect, please try again.
                                </p>
                                <p>
                                    {message}
                                </p>
                                <Alert.Link href="/login">Forgot Password?</Alert.Link>
                                <hr />
                                <div className='d-flex justify-content-end'>
                                    <Button onClick={() => setShow(false)} variant='danger'>
                                        Close Me
                                    </Button>
                                </div>
                            </Alert>
                        </div>

                    </Col>

                </Row>
            </Container>
        </>
    )
}