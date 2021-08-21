import React from "react";

export const datepickerContextDefaultValue = {
  focusedDate: null,
  isDateFocused: (date: Date) => false,
  isDateSelected: (date: Date) => false,
  isDateHovered: (date: Date) => false,
  isDateBlocked: (date: Date) => false,
  isFirstOrLastSelectedDate: (date: Date) => false,
  onDateFocus: (date: Date) => {},
  onDateHover: (date: Date) => {},
  onDateSelect: (date: Date) => {}
};

export default React.createContext(datepickerContextDefaultValue);