import * as React from 'react'
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
// npm

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

class MyApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Login: true
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
  render () {
    if (this.state.Login) {
      return (
        <ThemeProvider theme={theme}>
          <Container>
            <Grid container spacing={2}>
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
              <UserName />
              <Password />
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

// export default function MyApp() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }

//----------------------------------------------------------------
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
