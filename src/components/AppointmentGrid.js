import React, { useEffect, useState } from 'react';
import AppointmentForm from './AppointmentForm';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dayjs from 'dayjs';
import EditModal from './editModal';
function changeDate(str) {
  console.log(str);
  let year = str.$y;
  let day = (str.$D < 10) ? `0${str.$D}` : str.$D;
  let month = ((str.$M + 1) < 10) ? `0${str.$M + 1}` : str.$M + 1;
  console.log(year, month, day);
  return `${year}-${month}-${day}`;
}
const AppointmentGrid = ({ setShowCalendar, selectedDate }) => {
  const [appointments, setAppointments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [notification, setNotification] = useState('');
  const [isAdd, setIsAdd] = useState(true);

  useEffect(() => {
    let retrieveValue = localStorage.getItem("all_appointment");
    retrieveValue = JSON.parse(retrieveValue);
    setAppointments(retrieveValue);
  }, [isAdd]);

  const myFunc = () => {
    setShowForm(true);
  };

  const handleAddAppointment = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
    setNotification('Appointment added successfully');
    setShowForm(false);
  };

  const handleDeleteAppointment = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    localStorage.setItem("all_appointment", JSON.stringify(updatedAppointments));
    setAppointments(updatedAppointments);
    setNotification('Appointment deleted successfully');
  };

  // Filter appointments based on the selected date
  const filteredAppointments = selectedDate
    ? appointments.filter((appointment) => dayjs(appointment.date).isSame(selectedDate, 'day'))
    : appointments;

  return (
    <div >
      <div style={{backgroundColor:'black'}}  className="header">
        <h1>Momentum Fitness Collective</h1>
        <button style={{backgroundColor:'yellow', color:'black'}} className="button" onClick={myFunc}>Add Appointment</button>
      </div>
      {showForm && <AppointmentForm isAdd={isAdd} setIsAdd={setIsAdd} onAddAppointment={handleAddAppointment} />}
      <TableContainer component={Paper} className="table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{backgroundColor:'black'}} >First Name</TableCell>
              <TableCell style={{backgroundColor:'black'}} >Last Name</TableCell>
              <TableCell style={{backgroundColor:'black'}} >Location</TableCell>
              <TableCell style={{backgroundColor:'black'}} >Appointments</TableCell>
              <TableCell style={{backgroundColor:'black'}} >Edit</TableCell>
              <TableCell style={{backgroundColor:'black'}} >Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments?.map((e, index) => {

              if (selectedDate) {
                console.log(selectedDate);
                let str = changeDate(selectedDate);
                console.log(e.date.slice(0, 10) == str);
                if (e.date.slice(0, 10) === str)
                  return <>
                    <TableRow key={index}>
                      <TableCell>{e.firstName}</TableCell>
                      <TableCell>{e.lastName}</TableCell>
                      <TableCell>{e.location}</TableCell>
                      <TableCell>{e.date}</TableCell>
                      <TableCell>
                        <EditModal index={index} isAdd={isAdd} setIsAdd={setIsAdd} />
                      </TableCell>
                      <TableCell><button onClick={() => handleDeleteAppointment(index)}>Delete</button></TableCell>
                    </TableRow>
                  </>
              }
              else {
                return <>
                  <TableRow key={index}>
                    <TableCell>{e.firstName}</TableCell>
                    <TableCell>{e.lastName}</TableCell>
                    <TableCell>{e.location}</TableCell>
                    <TableCell>{e.date}</TableCell>
                    <TableCell><EditModal index={index} isAdd={isAdd} setIsAdd={setIsAdd} /></TableCell>
                    <TableCell><button onClick={() => handleDeleteAppointment(index)}>Delete</button></TableCell>
                  </TableRow>
                </>
              }

            })}
          </TableBody>
        </Table>
      </TableContainer>
      {notification && <div className="notification">{notification}</div>}
    </div>
  );
};

export default AppointmentGrid;
