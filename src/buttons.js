import Button from '@mui/material/Button'

function Submit () {
  return (
    <Button variant='contained' color='primary'>
      Submit
    </Button>
  )
}

function Login () {
  return (
    <Button
      variant='contained'
      color='primary'
      onClick={() => this.login_click()}
    >
      Login
    </Button>
  )
}

function SignUp () {
  return (
    <Button
      variant='contained'
      color='primary'
      onClick={() => this.sign_in_click()}
    >
      Sign-Up
    </Button>
  )
}

export { Submit, Login,SignUp }
