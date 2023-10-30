import React, { useState } from "react";
import {
  CalendarCell,
  CalendarDay,
  CalendarContainer,
  CalendarHeader,
  LineInHeader,
  CalendarTable,
  CalendarWeekName,
  CalendarTitle,
  ButtonIcon,
} from "./Calendar.styled";
import {
  generateCalendar,
  handleNextMonth,
  handlePrevMonth,
} from "./generateCalendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Calendar = ({ setSelectedDate }) => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [current, setCurrent] = useState("");
  const calendar = generateCalendar(year, month);

  const handleDateClick = (day) => {
    setCurrent(day);
    const selectedDate = new Date(year, month, day);
    setSelectedDate(selectedDate);
  };
  return (
    <CalendarContainer>
      <CalendarHeader>
        <ButtonIcon
          onClick={() => handlePrevMonth(setYear, setMonth, month, year)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </ButtonIcon>
        <CalendarTitle>
          {`${
            new Date(year, month)
              .toLocaleString("en-US", {
                month: "long",
              })
              .charAt(0)
              .toUpperCase() +
            new Date(year, month)
              .toLocaleString("en-US", {
                month: "long",
              })
              .slice(1)
          }  ${year} `}
        </CalendarTitle>

        <ButtonIcon
          onClick={() => handleNextMonth(setYear, setMonth, month, year)}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </ButtonIcon>
      </CalendarHeader>
      <LineInHeader />
      <CalendarTable>
        <thead>
          <CalendarWeekName>
            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
              <CalendarDay key={day}>{day}</CalendarDay>
            ))}
          </CalendarWeekName>
        </thead>
        <tbody>
          {calendar.map((week, rowIndex) => (
            <tr key={rowIndex}>
              {week.map((cell, cellIndex) => (
                <CalendarCell
                  key={cellIndex}
                  day={cell.day}
                  prevMonth={cell.prevMonth}
                  weekend={cell.weekend}
                  current={current === cell.day}
                  today={
                    cell.day &&
                    year === today.getFullYear() &&
                    month === today.getMonth() &&
                    cell.day === today.getDate()
                  }
                  lastMonth={cell.prevMonth && cell.day !== today.getDate()}
                  onClick={() =>
                    cell.day && handleDateClick(cell.day, today.month)
                  }
                >
                  {cell.day && cell.day}
                </CalendarCell>
              ))}
            </tr>
          ))}
        </tbody>
      </CalendarTable>
    </CalendarContainer>
  );
};

export default Calendar;
