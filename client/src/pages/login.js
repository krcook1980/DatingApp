import React from 'react';
// import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import { Row, Col, Container } from 'react-bootstrap';


const Login = () => (
    <>
        <Header />
        <Container>

        <h1>Login Here</h1>
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form>
                <Row>
                    <Col md="6">
                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" placeholder="password" />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Link to="/Home">
                            <button type="submit">
                                Submit
                            </button>
                        </Link>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Link to="/SignupForm">
                            <h2>Not a member yet? Sign up here:</h2>
                            <button type="button">
                                Create Account
                                </button>
                        </Link>
                    </Col>
                </Row>

            </Form>
        </Formik>
        </Container>
    </>
);

export default Login;