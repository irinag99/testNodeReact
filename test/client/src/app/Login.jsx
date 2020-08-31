import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';

export function Login() {

  const [errors, setErrors] = useState([])
  const history = useHistory();

  const handleSubmit = (values, { setSubmiting }) => {
    const miInit = {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('http://localhost:3000/users/login', miInit)
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => processResponse(response));
  }

  const processResponse = (response) => {
    console.log(response);
    if (response.errors?.length > 0) {
      setErrors(response.errors);
    }else{
      console.log(response)
      history.push('/')
      window.sessionStorage.setItem("token", response.token)
    }
  }



  return (
    <div className="Login">
      <h1>Login</h1>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ email: '', password: '', name: '', role: 0 }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="name" />
            <Field type="email" name="email" />
            <Field type="password" name="password" />
            <select name="role" id="role">
              <option value={0}> Cliente </option>
              <option value={1}> Desarrollador </option>
            </select>
            <button type="submit" disabled={isSubmitting}>
              Submit
           </button>
          </Form>
        )}
      </Formik>
      {errors.map((error, index) => {
        return (
          <p key={index}> {error.msg} </p>
        )
      })}
    </div>
  );
}