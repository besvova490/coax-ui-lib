import React from "react";
import { useRef, useContext } from "react";
import { useDay } from "@datepicker-react/hooks";
import DatepickerContext from "./CalendarContext";
import moment from "moment";

//helpers
import { classNames } from "../../helpers/classNames";

//styles
import styles from "../../assets/scss/components/DatePicker.module.scss";


function CalendarDay({ dayLabel, date, currentMonth }) {
  const dayRef = useRef(null);
  const {
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover
  } = useContext(DatepickerContext);
  const {
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate,
    onClick,
    onKeyDown,
    onMouseEnter,
    tabIndex
  } = useDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    dayRef
  });

  const className = classNames(
    styles["date-picker__date-cell-inner"],
    {
      [styles["date-picker__date-cell-inner_current-month"]]: currentMonth,
      [styles["date-picker__date-cell-inner_holiday"]]: ["Sat", "Sun"].includes(moment(date).format("ddd")),
    }
  );

  const classNameCell = classNames(
    styles["date-picker__date-cell"],
    {
      [styles["date-picker__date-cell_active"]]: isSelected || isSelectedStartOrEnd,
    }
  );


  return (
    <button
      className={classNameCell}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      tabIndex={tabIndex}
      ref={dayRef}
    >
      <span
        className={className}
        >{ dayLabel }</span>
    </button>
  );
}

export default CalendarDay;
