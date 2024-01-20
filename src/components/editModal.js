import { Box, Button, Modal, TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
function isValid(formData) {
    if (formData.firstName && formData.lastName && formData.location && formData.date) return true;
    return false;
}
export default function EditModal({ isAdd, setIsAdd, index }) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: undefined,
        lastName: undefined,
        location: undefined,
        date: undefined
    })
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const submit = () => {
        if (isValid(formData) == false) {
            alert('Please enter valid info');
            return;
        }
        console.log(formData);
        let retriveData = localStorage.getItem('all_appointment');
        retriveData = JSON.parse(retriveData);
        retriveData[index] = formData;
        localStorage.setItem('all_appointment', JSON.stringify(retriveData));
        setIsAdd(!isAdd);
        setOpen(false);
        setFormData({
            firstName: undefined,
            lastName: undefined,
            location: undefined,
            date: undefined
        })
    }
    return <>
        <Button onClick={handleOpen}>Edit</Button>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400 }} >
                    <TextField sx={{ my: 2 }}

                        label="First Name"
                        name="firstName"
                        fullWidth
                        onChange={handleInputChange}
                    />
                    <TextField sx={{ my: 2 }}
                        label="Last Name"
                        name="lastName"
                        fullWidth
                        onChange={handleInputChange}
                    />
                    <TextField sx={{ my: 2 }}
                        label="Location"
                        name="location"
                        fullWidth
                        onChange={handleInputChange}
                    />
                    <DateTimePicker sx={{ my: 2, width: '100%' }} onChange={(value) => { setFormData({ ...formData, date: value }) }} name="date" label="Basic date time picker" />
                    <Button sx={{ my: 2, width: '100%' }} onClick={submit} variant="contained">Submit</Button>
                </Box>
            </Modal>
        </LocalizationProvider>
    </>
}