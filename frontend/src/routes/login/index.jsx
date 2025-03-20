import { Card, Col, Container, Row, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainNavigation from '../../components/MainNavigation';

export default function Login() {
    const [, setCookies] = useCookies(['token']);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const SubmitLogin = (event) => {
        event.preventDefault();

        var email = event.target[0].value;
        var password = event.target[1].value;
        var remember = event.target[2].checked;
        console.log(remember)

        axios.post('http://localhost:3000/auth', {
            email, password, remember
        }).then((res) => {
            if (res.data.token != undefined) {
                setCookies('token', res.data.token);
                navigate('/');
            } else {
                setMessage(res.data.message);
                setShow(true);
            }
        }).catch((error) => console.log(error))
    }

    return (
        <>
            <MainNavigation />
            <Container className="vh-100 d-flex justify-content-center align-items-center">
                <Row className="w-50 justify-content-center">
                    <Col>
                        <Card className="shadow">
                            <Card.Body>
                                <Card.Title className="fs-2 text-center"><strong>Login</strong></Card.Title>
                                <Form onSubmit={SubmitLogin}>
                                    <Form.Group className='mb-3' controlId='formEmail' name='email'>
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control type='email' placeholder='Enter Email' />
                                    </Form.Group>

                                    <Form.Group className='mb-3' controlId='formPassword' name='password'>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type='password' placeholder='Password' />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check className="items-center" type="checkbox" label="Remember Me" />
                                    </Form.Group>
                                    <Button style={{ width: "100%" }} variant='primary' type='submit'>
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        <div style={{ paddingTop: "20px" }}>
                            <Alert show={show} variant='danger' >
                                <Alert.Heading>Warning</Alert.Heading>
                                <p>The information you have entered is incorrect, please try again.</p>
                                <p>
                                    {message}
                                </p>
                                <Alert.Link href="/register">Forgot Password?</Alert.Link>
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