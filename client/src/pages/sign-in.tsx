import TextField from 'components/TextField'
import { Email } from 'styled-icons/material-outlined'
import Auth from 'templates/Auth'

export default function SignUp() {
  return (
    <Auth title="Sign Up">
      <TextField name="email" icon={<Email />} />
    </Auth>
  )
}
