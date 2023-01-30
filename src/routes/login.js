import { Button } from 'bootstrap'
import { useState } from 'react'
import * as React from 'react'
import ReactDOM from 'react-dom/client'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/system'
import Avatar from '@mui/material/Avatar'
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
import { Submit } from './buttons.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// function UserName () {
//   return (
//     <TextField
//       required
//       label='User Name'
//       onChange={e => setusername(e.target.value)}
//     ></TextField>
//   )
// }

// function Password () {
//   return (
//     <TextField
//       required
//       label='Password'
//       onChange={e => setpassword(e.target.value)}
//     ></TextField>
//   )
// }

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

const Login = () => {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem('authenticated') || false)
  )
  const users = [{ username: 'Jane', password: 'testpassword' }]
  const handleSubmit = e => {
    e.preventDefault()
    const account = users.find(user => user.username === username)
    if (account && account.password === password) {
      setauthenticated(true)
      localStorage.setItem('authenticated', true)
    }
  }
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
            // onChange={e => setusername(e.target.value)}
          ></TextField>
          return{' '}
          <TextField
            required
            label='Password'
            // onChange={e => setpassword(e.target.value)}
          ></TextField>
          <Button onClick={handleSubmit}>Submit</Button>
        </Stack>
      </Container>
    </ThemeProvider>
  )
}
export default Login
