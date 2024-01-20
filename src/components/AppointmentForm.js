import React, { useState } from 'react';
// import { TextField, Button, Grid } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@material-ui/pickers';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const AppointmentForm = ({ onAddAppointmentm, isAdd, setIsAdd }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    location: '',
    date: ''
  });
  const [array, setArrary] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddAppointment = () => {
    const newAppointment = { date: new Date(), location: 'Gym' };
    setFormData({ ...formData, appointments: [...formData.appointments, newAppointment] });
  };

  const handleSave = () => {
    let retriveVlue = localStorage.getItem("all_appointment");
    retriveVlue = JSON.parse(retriveVlue);
    console.log(retriveVlue);
    console.log("debug");
    if (!retriveVlue) {
      localStorage.setItem('all_appointment', JSON.stringify([formData]));
    }
    else {
      localStorage.setItem('all_appointment', JSON.stringify([...retriveVlue, formData]));
    }
    setIsAdd(!isAdd);
  };

  return (

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <Grid container spacing={3} className="form">
          <Grid item xs={12}>
            <h2>Add Appointment</h2>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="First Name"
              name="firstName"
              fullWidth
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              name="lastName"
              fullWidth
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Location"
              name="location"
              fullWidth
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            {/* <DateTimePicker
          label="Select Date and Time"
          value={new Date()}
          onChange={(date) => console.log(date)}
          fullWidth
        /> */}
            <DateTimePicker style={{backgroundColor:'black'}}  onChange={(value) => { setFormData({ ...formData, date: value }) }} name="date" label="Basic date time picker" />
          </Grid>
          <Grid item xs={12}>
            <Button style={{backgroundColor:'black'}} sx={{ mr: 2 }} variant="contained" onClick={handleAddAppointment}>Add Appointment</Button>
            <Button style={{backgroundColor:'black'}}  sx={{ mx: 2 }} variant="contained" color="primary" onClick={handleSave}>Save</Button>
          </Grid>
        </Grid>

      </DemoContainer>
    </LocalizationProvider>
  );
};

export default AppointmentForm;
