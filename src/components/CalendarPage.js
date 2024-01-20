import React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './MyCalendar.css'; // Import the CSS file

const MyCalendar = ({ setSelectedDate,selectedDate  }) => {


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="DemoContainer">
        <DemoItem label="Pick a date">
          <DateCalendar className="DateCalendar" value={selectedDate} onChange={(value)=>{
            setSelectedDate(value)
          }} />
        </DemoItem>
      </div>
    </LocalizationProvider>
  );
};

export default MyCalendar;


