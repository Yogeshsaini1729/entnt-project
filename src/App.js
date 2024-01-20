import React, { useState } from 'react';
import AppointmentGrid from './components/AppointmentGrid'; // Update the path
import MyCalendar from './components/CalendarPage'; // Update the path
import './styles/styles.css';
import { Box, Grid } from '@mui/material';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);


  return (
    <>
    
      <Box sx={{ flexGrow: 1,  px:5, py:10 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
          <MyCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          </Grid>
          <Grid item xs={8}>
          <AppointmentGrid selectedDate={selectedDate} />
          </Grid>
          
        </Grid>
      </Box>
        

    </>
  );
};

export default App;

