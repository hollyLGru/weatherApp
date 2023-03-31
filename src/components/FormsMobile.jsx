import { useState, useEffect } from 'react';
import '../App.css';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Mobile from '../components/Mobile'
// import axios from 'axios';


function FormsMobile({connected, setConnected}) {

  const theme = createTheme({
    palette: {
      neutral: {
        main: 'white',
        contrastText: '#fff',
      },
    },
  });
//   MAterial Ui Theme

  const [submitted, setSubmitted] = useState(false)
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: '',
    region: '',
    zip: ''
  })
//   sets value of forms as state 

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  // When a user enters their information, it will set the state to the value of what is typed in. 


  const handleSubmit = (e) => {
    setSubmitted(true);
    console.log(submitted);
    setConnected(false)
    // axios.post('ADDRESSTOENDPOINTHERE', {
    //   firstName: state.firstName,
    //   lastName: state.lastName,
    //   email: state.email,
    //   address: state.address,
    //   city:state.city,
    //   region: state.region,
    //   zip: state.zip
    // }).then(response=>{
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error)
    // })
    }
    // This is the post method I would use if the form were active. Since I do not have an endpoint, I just cancelled the 
    // text but I really wanted to give an example of how it were to look if this were a functional form. 
    // I do not know typescript, so I used axios to make the post request. 

  return (

    <div className="FormsMobile">
        <div style={{ backdropFilter: 'blur(16px)'}}>

      {submitted == false ?
      <div>
        <ThemeProvider theme={theme}>
        <div style={{ width: '90%', margin: 'auto', display: "flex", justifyConent: 'space eveninly', marginTop: "3%"}}>
          <TextField onChange={handleTextChange} value={state.firstName} color="neutral" sx={{m:1, width: '50%'}} id="standard-basic" label="First Name" variant="standard" />
          <TextField onChange={handleTextChange} value={state.lastName} color="neutral" sx={{m:1, width: '50%'}} id="standard-basic" label="Last Name" variant="standard" />
        </div>
        <div style={{ width: '90%', margin: 'auto', display: "flex", justifyConent: 'space eveninly', marginTop: "3%"}}>
          <TextField onChange={handleTextChange} value={state.email} color="neutral" id="standard-basic" label="Email Address" variant="standard"  sx={{m:1, width: '100%'}}/>
        </div>

        <div style={{ width: '90%',  margin: 'auto', marginTop: '10%'}}>
          <h3>Address:</h3>
          <TextField onChange={handleTextChange} value={state.address} color="neutral" id="standard-basic" label="Address" variant="standard"  sx={{m:1, width: '100%'}}/>
          <TextField onChange={handleTextChange} value={state.city} color="neutral" id="standard-basic" label="City" variant="standard" sx={{ m: 1, minWidth: "50%" }} />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label" color="neutral">State</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={state.region}
                label="State"
                onChange={handleTextChange}
                color="neutral"
              >
              <option value="">Select state</option>
                <MenuItem value="AL">Alabama</MenuItem>
                <MenuItem value="AK">Alaska</MenuItem>
                <MenuItem value="AZ">Arizona</MenuItem>
                <MenuItem value="AR">Arkansas</MenuItem>
                <MenuItem value="CA">California</MenuItem>
                <MenuItem value="CO">Colorado</MenuItem>
                <MenuItem value="CT">Connecticut</MenuItem>
                <MenuItem value="DE">Delaware</MenuItem>
                <MenuItem value="FL">Florida</MenuItem>
                <MenuItem value="GA">Georgia</MenuItem>
                <MenuItem value="HI">Hawaii</MenuItem>
                <MenuItem value="ID">Idaho</MenuItem>
                <MenuItem value="IL">Illinois</MenuItem>
                <MenuItem value="IN">Indiana</MenuItem>
                <MenuItem value="IA">Iowa</MenuItem>
                <MenuItem value="KS">Kansas</MenuItem>
                <MenuItem value="KY">Kentucky</MenuItem>
                <MenuItem value="LA">Louisiana</MenuItem>
                <MenuItem value="ME">Maine</MenuItem>
                <MenuItem value="MD">Maryland</MenuItem>
                <MenuItem value="MA">Massachusetts</MenuItem>
                <MenuItem value="MI">Michigan</MenuItem>
                <MenuItem value="MN">Minnesota</MenuItem>
                <MenuItem value="MS">Mississippi</MenuItem>
                <MenuItem value="MO">Missouri</MenuItem>
                <MenuItem value="MT">Montana</MenuItem>
                <MenuItem value="NE">Nebraska</MenuItem>
                <MenuItem value="NV">Nevada</MenuItem>
                <MenuItem value="NH">New Hampshire</MenuItem>
                <MenuItem value="NJ">New Jersey</MenuItem>
                <MenuItem value="NM">New Mexico</MenuItem>
                <MenuItem value="NY">New York</MenuItem>
                <MenuItem value="NC">North Carolina</MenuItem>
                <MenuItem value="ND">North Dakota</MenuItem>
                <MenuItem value="OH">Ohio</MenuItem>
                <MenuItem value="OK">Oklahoma</MenuItem>
                <MenuItem value="OR">Oregon</MenuItem>
                <MenuItem value="PA">Pennsylvania</MenuItem>
                <MenuItem value="RI">Rhode Island</MenuItem>
                <MenuItem value="SC">South Carolina</MenuItem>
                <MenuItem value="SD">South Dakota</MenuItem>
                <MenuItem value="TN">Tennessee</MenuItem>
                <MenuItem value="TX">Texas</MenuItem>
                <MenuItem value="UT">Utah</MenuItem>
                <MenuItem value="VT">Vermont</MenuItem>
                <MenuItem value="VA">Virginia</MenuItem>
                <MenuItem value="WA">Washington</MenuItem>
                <MenuItem value="WV">West Virginia</MenuItem>
                <MenuItem value="WI">Wisconsin</MenuItem>
                <MenuItem value="WY">Wyoming</MenuItem>
              </Select>
            </FormControl>
            <TextField color="neutral" onChange={handleTextChange} value={state.zip} id="standard-basic" label="Zip Code" variant="standard"  sx={{ m: 1, minWidth: '120' }} />
        </div> 
        <div style={{ width: '90%',  margin: 'auto', display: 'flex', justifyContent: 'space-evenly', marginTop: "5%"}}>
          <Button sx={{color: "white", border: "1pt solid white"}} theme={theme} onClick={handleSubmit} type="submit" variant="outlined">Submit</Button>
        </div>
        </ThemeProvider>
      </div>
      : 
        <Mobile/>
      }
      </div>
    </div>
  )
}

export default FormsMobile