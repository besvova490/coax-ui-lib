import React from "react";
import { useMonth } from "@datepicker-react/hooks";
import DatePickerDay from "./CalendarDay";
import moment from "moment";

//assets
import CircleIcon from "../../iconComponents/CircleIcon";

//styles
import styles from "../../assets/scss/components/DatePicker.module.scss";

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


function CalendarMonth({ year, month, firstDayOfWeek, goToPreviousMonths, goToNextMonths }) {
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek
  });

  const weeks = [];

  const firstWeek = days.slice(0, 7);
  const firstDayIndex = firstWeek.findIndex(item => item);
  const lastIndex = weekDays.findIndex(item => item === moment(days[days.length - 1].date).format("dddd"));
  const prevMonthDays = [];
  const nexMonthDays = [];

  for (let i = firstDayIndex; i > 0; i--) {
    const date = moment(monthLabel, "MMM YYYY").subtract(i, "days");
    prevMonthDays.push({
      date: date.toDate(),
      dayLabel: date.format("DD"),
      prevMonth: true,
    });
  }

  for (let i = 1; i < 7 - lastIndex; i++) {
    const date = moment(days[days.length - 1].date).add(i, "days");
    nexMonthDays.push({
      date: date.toDate(),
      dayLabel: date.format("DD"),
      nextMonth: true,
    });
  }

  const correctDays = [...prevMonthDays, ...days.slice(firstDayIndex,), ...nexMonthDays];
  
  for (let i = 0; i <= days.length; i += 7) {
      weeks.push(correctDays.slice(i, i + 7));
  }


  return (
    <div className={styles["date-picker__dropdown"]} onClick={e => e.stopPropagation()}>
      <div className={styles["date-picker__dropdown-header"]}>
        <div className={`${styles["date-picker__prev-month"]} ${styles["date-picker__arrow"]}`}>
          <CircleIcon onClick={goToPreviousMonths}/>
        </div>  
        <span className={styles["date-picker__dropdown-header-month"]}>{ monthLabel }</span>  
        <div className={`${styles["date-picker__next-month"]} ${styles["date-picker__arrow"]}`}>
          <CircleIcon onClick={goToNextMonths}/>
        </div>  
      </div>
      <table className={styles["date-picker__dropdown-content"]}>
        <thead>
          <tr>
            {
              weekdayLabels.map((dayLabel: string, index) => (
                <td key={index}>
                  <div className={styles["date-picker__dropdown-sub-header-cell"]}>{ dayLabel }</div>
                </td>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            weeks.map((weekDays, index) => (
              <tr key={index}>
                {
                  weekDays.map((day, indexDay) => (
                    <td key={indexDay}>
                        <DatePickerDay
                          date={day.date}
                          key={day.date}
                          dayLabel={day.dayLabel}
                          currentMonth={!day.prevMonth && !day.nextMonth}
                        />
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default CalendarMonth;
