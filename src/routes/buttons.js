import Button from '@mui/material/Button'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function Submit () {
  let navigate = useNavigate()
  const routeChange = () => {
    localStorage.setItem("loggedin", true);
    let path = '/profile'
    navigate(path)
  }
  if (this.Username === 'admin' && this.password === 'admin') {
    return (
      <Button
        href='/profile'
        variant='contained'
        color='primary'
        onclick={routeChange}
      >
        Submit
      </Button>
    )
  } else {
    alert("Invalid User");
    // return (
    //   <React.Fragment>
    //     <Button href='/profile' variant='contained' color='primary'>
    //       Submit
    //     </Button>
    //     <p>wrong username or password</p>
    //   </React.Fragment>
    // )
  }
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

export { Submit, Login, SignUp }
