import React, { useState } from 'react'
import PyroForm from 'pyro-form'

import Flex from '../../primitives/Flex'
import Button from '../../primitives/Button'
import TextField from '../../primitives/TextField'
// @ts-ignore
import storage from '../../../utils/storage'
// @ts-ignore
import makeLogin from '../../../utils/login'

interface InitialValues {
  username: string
  password: string
}

const initialValues: InitialValues = {
  username: '',
  password: '',
}

const LoginForm: React.FC = () => {
  const [error, setError] = useState('')

  const handleValidate = (values: InitialValues) => {
    try {
      console.log('values', values)
    } catch (e) {
      console.log('e', e)
      return e
    }
  }

  const handleSubmit = async (values: InitialValues) => {
    try {
      const { username, token } = await makeLogin(values.username, values.password)
      storage.setItem('username', username)
      storage.setItem('token', token)
    } catch (error) {
      console.log('error', error)
      setError(error)
    }
  }

  return (
    <PyroForm initialValues={initialValues} onValidate={handleValidate} onSubmit={handleSubmit}>
      {({ hasErrors, handleSubmit: onSubmit }) => (
        <form onSubmit={onSubmit}>
          {error}
          <Flex flexDirection="column">
            <TextField name="username" label="Username" fullWidth />
            <TextField name="password" label="Password" type="password" fullWidth />
          </Flex>
          <Flex>
            <Button>Cancel</Button>
            <Button disabled={hasErrors} type="submit">
              Login
            </Button>
          </Flex>
        </form>
      )}
    </PyroForm>
  )
}

export default LoginForm
