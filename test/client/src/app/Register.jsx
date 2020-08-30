import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';


export function Register() {

  const [errors, setErrors] = useState([])

  const handleSubmit = (values, { setSubmiting }) => {
    const miInit = {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('http://localhost:3000/users/register', miInit)
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => processResponse(response));
  }

  const processResponse = (response) => {
    if(response.errors?.length > 0) {
      setErrors(response.errors);

    }
  }



  return (
    <div className="Register">
      <h1>Registarme</h1>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ email: '', password: '', name: '', role: 0 }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="name" />
            <Field type="email" name="email" />
            <Field type="password" name="password" />
            <Field type="password" name="retypepassword" />
            <Field as="select" name="role">
             <option value={0}>Cliente</option>
             <option value={1}>Desarrollador</option>
           </Field>
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
