import React from 'react';
// import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';


const Login = () => (
    <>
        <h1>Login Here</h1>
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form>
                <label htmlFor="email">Email</label>
                <Field
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                />
                <label htmlFor="password"></label>
                <Field id="password" name="password" placeholder="password" />
                <button type="submit">Submit</button>
                <Link to="/SignupForm">
                    <button type="button">
                        Create Account
     </button>
                </Link>
            </Form>
        </Formik>
    </>
);

export default Login;