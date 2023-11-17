import * as React from 'react'
import { TextField, Button } from '@mui/material'
import { Formik, Form } from 'formik'

interface Values {
  firstName: string
  lastName: string
  email: string
  password: string
}

interface Props {
  onSubmit: (values: Values) => void
}
const SignupForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }}
      onSubmit={values => {
        onSubmit(values)
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <div>
            <TextField
              name='firstName'
              value={values.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              name='lastName'
              value={values.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              name='email'
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              name='password'
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <Button type='submit'>Sign up</Button>
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
        </Form>
      )}
    </Formik>
  )
}

export default SignupForm
