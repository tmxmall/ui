import React, { useState } from 'react'
import PyroForm from 'pyro-form'

import Flex from '../../primitives/Flex'
import Button from '../../primitives/Button'
import TextField from '../../primitives/TextField'

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

  const handleSubmit = async ({ username, password }: InitialValues) => {
    const { username, token, error } = await makeLogin(username, password)

    if (username && token) {
      this.setLoggedUser(username, token)
      storage.setItem('username', username)
      storage.setItem('token', token)
    }

    if (error) {
      setError(error)
    }
  }

  return (
    <PyroForm initialValues={initialValues} onValidate={handleValidate} onSubmit={handleSubmit}>
      {({ hasErrors, handleSubmit: onSubmit }) => (
        <form onSubmit={onSubmit}>
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
