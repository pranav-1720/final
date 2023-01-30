import TextField from '@mui/material/TextField'

function FirstName () {
  return <TextField required label='First Name'></TextField>
}

function LastName () {
  return <TextField required label='Last Name'></TextField>
}

function UserName () {
  return <TextField required label='User Name'></TextField>
}

function Email () {
  return <TextField required label='Email'></TextField>
}

function Age () {
  return <TextField required label='Age'></TextField>
}

function ContactNumber () {
  return <TextField required label='Contact Number'></TextField>
}

function Password () {
  return <TextField required label='Password'></TextField>
}
export { FirstName, LastName, UserName, Email, Age, ContactNumber, Password }
