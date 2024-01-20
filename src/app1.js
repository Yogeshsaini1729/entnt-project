import React, { useState } from 'react';
import AppointmentGrid from './components/AppointmentGrid';
import CalendarPage from './components/CalendarPage';
import './styles/styles.css';

const App1=()=>{
    const [showCalendar, setShowCalendar] = useState(false);
    return (
        <div>
        {!showCalendar ? (
       
          <AppointmentGrid setShowCalendar={setShowCalendar} />
        ) : (
         
          <CalendarPage setShowCalendar={setShowCalendar} />
        )}
      </div>
    )
}

export default App1;