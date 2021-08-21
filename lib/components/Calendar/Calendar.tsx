import React, { useState } from "react";
import { useDatepicker, START_DATE } from "@datepicker-react/hooks";

//context
import DatepickerContext from "./CalendarContext";

//components
import DatePickerMonth from "./CalendarMonth";

//styles
import styles from "../../assets/scss/components/DatePicker.module.scss";


function Calendar({ onSelect, value }) {
  const [state, setState] = useState({
    focusedInput: START_DATE
  });
  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonths,
    goToNextMonths
  } = useDatepicker({
    startDate: value,
    endDate: value,
    focusedInput: state.focusedInput,
    numberOfMonths: 1,
    onDatesChange: (data) => {
      setState({
        ...state
      });
      onSelect(data.startDate);
    }
  });

  return (
    <DatepickerContext.Provider
      value={{
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover
      }}
    >
        <div className={styles["date-picker__dropdown-wrapper"]}>
          {activeMonths.map(month => (
            <DatePickerMonth
              key={`${month.year}-${month.month}`}
              year={month.year}
              month={month.month}
              firstDayOfWeek={firstDayOfWeek}
              goToPreviousMonths={goToPreviousMonths}
              goToNextMonths={goToNextMonths}
            />
          ))}
        </div>
    </DatepickerContext.Provider>
  );
}

export default Calendar;