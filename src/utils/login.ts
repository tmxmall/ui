//@ts-ignore
import API from './api'

export async function makeLogin(username: string, password: string) {
  const response = await API.request('login', 'POST', {
    body: JSON.stringify({ username, password }),
    headers: {
      Accept: 'json',
      'Content-Type': 'json',
    },
  })
  return response
}
