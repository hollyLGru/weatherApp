import { useState, useEffect } from 'react';
import '../App.css';
import TextField from '@mui/material/TextField';
import {createMuiTheme, ThemeProvider} from '@material-ui/core'

function Forms() {

  const styles = theme => ({
    textField: {
        width: '20%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: 'white'
    }
})
    styles()
  return (

    <div className="Forms">
      <div style={{ width: '70%', borderBottom: "1pt solid white", margin: 'auto'}}>
        <h1 style={{textAlign:"center", letterSpacing: '.2rem'}}>
          Request Information.
        </h1>
      </div>
      <div style={{ width: '70%', margin: 'auto'}}>
        <TextField  id="standard-basic" label="Standard" variant="standard" />
      </div>


    </div>
  )
}

export default Forms