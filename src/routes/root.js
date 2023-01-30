import * as React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/system'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import { Navigate, useNavigate } from 'react-router-dom'
import Login from './login.js'
import { Component } from 'react'
import './app.css'
import {
  FirstName,
  LastName,
  UserName,
  Email,
  Age,
  ContactNumber,
  Password
} from './fields.js'
// import { Submit } from './buttons.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// npm
let username = ''
let password = ''
const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85'
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff'
    }
  }
})

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

function useForceUpdate () {
  const [value, setValue] = useState(0) // integer state
  return () => setValue(value => value + 1) // update state to force render
  // A function that increment 👆🏻 the previous state like here
  // is better than directly setting `setValue(value + 1)`
}

// function Submit () {
//   const forceUpdate = useForceUpdate()
//   let navigate = useNavigate()
//   const routeChange = () => {
//     let path = '/profile'
//     navigate(path)
//   }
//   if (username === 'admin' && password === 'admin') {
//     return (
//       <Button
//         href='/profile'
//         variant='contained'
//         color='primary'
//         onclick={routeChange}
//       >
//         Submit
//       </Button>
//     )
//   } else {
//     return (
//       <React.Fragment>
//         <Button href='/' variant='contained' color='primary'>
//           Submit
//         </Button>
//         <p>wrong</p>
//       </React.Fragment>
//     )
//   }
// }

function Submit () {
  let navigate = useNavigate()
  const routeChange = () => {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('loggedin', true)
      let path = '/profile'
      navigate(path)
    } else {
      alert('Invalid User')
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
  return (
    <Button variant='contained' color='primary' onClick={routeChange}>
      Submit
    </Button>
  )
}

export class MyApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Login: true,
      isLoggedIn: false,
      count: 0
    }
  }

  login_click () {
    this.setState({
      Login: true
    })
  }
  sign_in_click () {
    this.setState({
      Login: false
    })
  }
  username_change (e) {
    username = e.target.value
    console.log('u:' + username)
  }
  password_change (e) {
    password = e.target.value
    console.log('p:' + password)
  }

  //   handleSubmit e{
  //     e.preventDefault()
  //     const account = users.find(user => user.username === username)
  //     if (account && account.password === password) {
  //       setauthenticated(true)
  //       localStorage.setItem('authenticated', true)
  //     }
  //   }
  render () {
    if (localStorage.getItem('loggedin')) {
      return <Navigate to='/profile' />
    }
    if (this.state.Login) {
      return (
        <ThemeProvider theme={theme}>
          <Container>
            <Grid container spacing={2} padding={2}>
              <Grid Item xs={3}></Grid>
              <Grid item xs={3}>
                <div id='Button'>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() => this.login_click()}
                  >
                    Login
                  </Button>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div id='Button'>
                  <Button
                    variant='contained'
                    color='neutral'
                    onClick={() => this.sign_in_click()}
                  >
                    Sign-in
                  </Button>
                </div>
              </Grid>
              <Grid Item xs={3}></Grid>
            </Grid>
            <Stack spacing={2}>
              <TextField
                required
                label='User Name'
                onChange={this.username_change}
              ></TextField>
              <TextField
                required
                label='Password'
                onChange={this.password_change}
              ></TextField>
              <Submit />
            </Stack>
          </Container>
        </ThemeProvider>
      )
    } else {
      return (
        <ThemeProvider theme={theme}>
          <Container>
            <Grid container spacing={2}>
              <Grid Item xs={3}></Grid>
              <Grid item xs={3}>
                <div id='Button'>
                  <Button
                    variant='contained'
                    color='neutral'
                    onClick={() => this.login_click()}
                  >
                    Login
                  </Button>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div id='Button'>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() => this.sign_in_click()}
                  >
                    Sign-in
                  </Button>
                </div>
              </Grid>
              <Grid Item xs={3}></Grid>
              <Grid Item xs={12}></Grid>
            </Grid>
            <Stack spacing={2}>
              <FirstName />
              <LastName />
              <UserName />
              <Email />
              <Age />
              <ContactNumber />
              <Password />
              <Submit />
            </Stack>
          </Container>
        </ThemeProvider>
      )
    }
  }
}
