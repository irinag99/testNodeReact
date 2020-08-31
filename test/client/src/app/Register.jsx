import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';


export function Register() {

  const [errors, setErrors] = useState([])
  const history = useHistory();

  const handleSubmit = (values, { setSubmitting }) => {
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
      .then(response => processResponse(response, setSubmitting));
  }

  const processResponse = (response, setSubmitting) => {
    if(response.errors?.length > 0) {
      setErrors(response.errors);

    }else{
      history.push('/')
    }
    setSubmitting(false);
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
            <Field type="text" name="name" class="form-control" placeholder="First name" />
            <Field for="exampleFormControlInput1" type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            <Field type="password" name="password" class="form-control" id="inputPassword" placeholder = 'password'/>
            <Field type="password" name="retype" class="form-control" placeholder = 'repeat password' />
            <Field for="role" as="select" class="form-control form-control-sm"id="role" name="role">
             <option value={0}>Cliente</option>
             <option value={1}>Desarrollador</option>
           </Field>
            <button type="submit" class="btn btn-primary mb-2" disabled={isSubmitting}>
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
