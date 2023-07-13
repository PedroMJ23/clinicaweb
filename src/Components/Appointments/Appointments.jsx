import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const AppointmentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 200px) ;
  background-color: white;
  color: black;
`;

const AppointmentsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: black;
  border-radius: 8px;
`;

const AppointmentsInput = styled.input`
  padding: 10px;
  border-radius: 4px;
`;

const AppointmentsSelect = styled.select`
  padding: 10px;
  border-radius: 4px;
`;

const AppointmentsButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: darkblue;
  color: white;
  cursor: pointer;
`;

const AppointmentsResult = styled.p`
  margin-top: 20px;
  font-weight: bold;
`;

const Appointments = () => {
  const [username, setUsername] = useState("");
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleDayChange = (date) => {
    setSelectedDay(date);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSpecialtyChange = (e) => {
    setSelectedSpecialty(e.target.value);
  };

  const generateTimeOptions = () => {
    const startTime = moment().hour(9).minute(0);
    const endTime = moment().hour(18).minute(0);
    const timeOptions = [];

    while (startTime.isBefore(endTime)) {
      timeOptions.push(startTime.format("h:mm A"));
      startTime.add(15, "minutes");
    }

    return timeOptions;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedDay || moment(selectedDay).isSameOrBefore(moment().startOf("day"))) {
      // Fecha no seleccionada o fecha igual o anterior al día actual
      return;
    }

    if (!moment(selectedDay).isBetween(moment().startOf("isoWeek"), moment().endOf("isoWeek"), "day")) {
      // Fecha seleccionada no es de lunes a viernes
      return;
    }

    const appointmentInfo = {
      username,
      day: selectedDay.toLocaleDateString(undefined, { day: "numeric", month: "numeric", year: "numeric" }),
      time: selectedTime,
      specialty: selectedSpecialty,
    };
    console.log(appointmentInfo);

    setSubmittedData(appointmentInfo);
    // lógica para enviar los datos del turno al servidor
  };

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6; // 0: domingo, 6: sábado
  };

  return (
    <AppointmentsContainer>
      <AppointmentsForm onSubmit={handleSubmit}>
        <h2>Appointments</h2>
        <AppointmentsInput
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <AppointmentsSelect value={selectedSpecialty} onChange={handleSpecialtyChange}>
          <option value="">Select a specialty</option>
          <option value="Laboratory">Laboratory</option>
          <option value="Traumatology">Traumatology</option>
          <option value="Cardiogram">Cardiogram</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Dentistry">Dentistry</option>
          <option value="Gastroenterology">Gastroenterology</option>
          <option value="Psychiatry">Psychiatry</option>
        </AppointmentsSelect>
        <DatePicker
          selected={selectedDay}
          onChange={handleDayChange}
          filterDate={isWeekday}
          minDate={moment().add(1, "day").toDate()}
          dateFormat="dd/MM/yyyy"
        />
        <select value={selectedTime} onChange={handleTimeChange}>
          <option value="">Select a time</option>
          {generateTimeOptions().map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <AppointmentsButton type="submit">Submit</AppointmentsButton>
      </AppointmentsForm>
      {submittedData && (
        <AppointmentsResult>
          Username: {submittedData.username}, Specialty: {submittedData.specialty}, Date: {submittedData.day}, Time:
          {submittedData.time}
        </AppointmentsResult>
      )}
    </AppointmentsContainer>
  );
};

export default Appointments;
