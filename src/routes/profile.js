import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Container } from '@mui/system'
import { Avatar, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
function createData (Info, Data) {
  return {
    Info,
    Data,
    history: [
      {
        date: 'Bhav'
      },
      {
        date: 'Apoorv'
      },
      {
        date: 'Divij'
      }
    ]
  }
}

function createData1 (Info, Data) {
  return {
    Info,
    Data,
    history: [
      {
        date: 'Bhav'
      },
      {
        date: 'Apoorv'
      },
      {
        date: 'Divij'
      },
      {
        date: 'Vishna'
      }
    ]
  }
}

function Row (props) {
  const { row } = props
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align='left'>{row.Info}</TableCell>
        <TableCell align='right'>{row.Data}</TableCell>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h6' gutterBottom component='div'>
                History
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableBody>
                  {row.history.map(historyRow => (
                    <TableRow key={historyRow.date}>
                      <TableCell component='th' scope='row'>
                        {historyRow.date}
                      </TableCell>
                      <TableCell>
                        <Button>Remove</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

function Row1 (props) {
  const { row } = props
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align='left'>{row.Info}</TableCell>
        <TableCell align='right'>{row.Data}</TableCell>
      </TableRow>
    </React.Fragment>
  )
}

const rows = [createData('Followers', 3), createData1('Following', 4)]
const rows1 = [
  createData('First Name', 'admin'),
  createData('Last Name', 'admin'),
  createData('User Name', 'admin'),
  createData('Email', 'admin@DASSTASGOATED.com'),
  createData('Age', 16),
  createData('Contact number', 1234567890)
]

function Logout () {
  let navigate = useNavigate()
  const routeChange = () => {
    localStorage.removeItem('loggedin')
    let path = '/'
    navigate(path)
  }
  return (
    <Button variant='contained' color='primary' onClick={routeChange}>
      Logout
    </Button>
  )
}

export function Profile () {
  return (
    <Container>
      <Avatar>A</Avatar>
      <TableContainer component={Paper}>
        <Table aria-label='collapsible table'>
          <TableBody>
            {rows1.map(row => (
              <Row1 key={row.name} row={row} />
            ))}
          </TableBody>
          <TableBody>
            {rows.map(row => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Logout />
    </Container>
  )
}
