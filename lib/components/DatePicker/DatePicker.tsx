import React, { useState, useEffect, useRef } from "react";
import moment from "moment";

//components
import Calendar from "../Calendar";

//helpres
import { classNames } from "../../helpers/classNames";

//interface
import { BaseCalendarProps } from "../../types/ElementsProps";

//assets
import CalendarIcon from "../../iconComponents/CalendarIcon";
import ClearIcon from "../../iconComponents/ClearIcon";

//styles
import styles from "../../assets/scss/components/DatePicker.module.scss";


function DatePicker(props: BaseCalendarProps) {
  const {
    allowClear,
    className,
    disabled,
    open,
    placeholder,
    onOpenChange,
    format,
    onChange,
    onClear,
  } = props;


  const [isOpen, setIsOpen] = useState(open);
  const [date, setDate] = useState<string>();
  const datePickerContainer = useRef(null);

  const handleOpen = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      onOpenChange(!isOpen);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (isOpen && datePickerContainer.current && !datePickerContainer.current.contains(event.target as Node)) {
        setIsOpen(false);
        onOpenChange(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleClear = (e:  React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    setDate("");
    onClear && onClear();
  };

  const datePickerClasNames = classNames(
    styles["date-picker"],
    className,
    {
      [styles["date-picker_disabled"]]: disabled,
    }
  );

  const onDateSelect = (value) => {
    setDate(moment(value).format(format || "MM/DD/YYYY"));
    setIsOpen(false);
    onChange && onChange(moment(value).format(format || "MM/DD/YYYY"));
  }


  return (
    <div className={datePickerClasNames} onClick={handleOpen} ref={datePickerContainer}>
      <input
        autoComplete={"false"}
        placeholder={placeholder || "Choose a date"}
        className={styles["date-picker__input"]}
        disabled={disabled}
        value={date}
      />
      <span className={styles["date-picker__icons"]}>
        {
          allowClear && date && !disabled && <ClearIcon className={styles["date-picker__clear-icon"]} onClick={handleClear}/>
        }
        <CalendarIcon className={styles["date-picker__calendar-icon"]}/>
      </span>
      { isOpen && <Calendar onSelect={onDateSelect} value={date ? moment(date).toDate() : ""}/> }
    </div>
  );
}


export default DatePicker;
