# Project Documentation: Momentum Fitness Collective

## Overview

# Project Documentation: Momentum Fitness Collective

Welcome to the Momentum Fitness Collective project! This application is designed to manage appointments for a fitness collective. It includes features such as adding, editing, and deleting appointments. The user interface is built using React and the Material-UI library, and date picking functionality is implemented with the MUI X Date Picker.

## Live Demo

Explore the live demo of the Momentum Fitness Collective project [here](https://entnt-assignment-amber.vercel.app/).

## Project Structure

The project is organized into several components:

### 1. **AppointmentForm**

- **File Path:** `src/components/AppointmentForm.js`

This component handles the form for adding appointments. It utilizes Material-UI components and the MUI X Date Picker for date and time selection.

### 2. **AppointmentGrid**

- **File Path:** `src/components/AppointmentGrid.js`

The `AppointmentGrid` component displays a table of appointments, provides options for adding, editing, and deleting appointments. It interacts with the `AppointmentForm` component and uses local storage to persist appointment data.

### 3. **CalendarPage**

- **File Path:** `src/components/CalendarPage.js`

The `CalendarPage` component presents a date picker, implemented with MUI X Date Picker. It allows users to select a date, and the selected date is used to filter appointments displayed in the `AppointmentGrid` component.

### 4. **MyCalendar.css**

- **File Path:** `src/components/MyCalendar.css`

This CSS file styles the date picker presented in the `CalendarPage` component.

### 5. **Notification**

- **File Path:** `src/components/Notification.js`

The `Notification` component is a simple notification using Material-UI's Snackbar component, providing feedback for successful operations.

### 6. **editModal**

- **File Path:** `src/components/editModal.js`

The `editModal` component is a modal that enables users to edit appointment details. It utilizes Material-UI components and the MUI X Date Picker for date and time selection.

### 7. **App**

- **File Path:** `src/App.js`

The `App` component serves as the main entry point for the application. It orchestrates the layout using React and Material-UI's Box and Grid components.

## How to Run the Project

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## Usage

- Use the date picker in the `CalendarPage` component to select a date.
- Add appointments using the "Add Appointment" button in the `AppointmentGrid` component.
- View, edit, and delete appointments in the table displayed in the `AppointmentGrid` component.

## Notes

- Appointment data is persisted using local storage.
- Ensure all dependencies are installed before running the application.

Feel free to explore the code, and thank you for checking out the Momentum Fitness Collective project! If you have any questions or encounter issues, please don't hesitate to reach out .
