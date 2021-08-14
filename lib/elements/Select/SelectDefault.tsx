import React, { useState, useRef, useEffect } from "react";

//components
import NoResults from "../../components/NoResults";

//elements
import SelectOption from "./SelectOption";

//helpers
import { classNames } from "../../helpers/classNames";

//types
import { SelectBaseProps, SelectOptionProps } from "../../types/ElementsProps";

//assets
import ArrowIcon from "../../iconComponents/ArrowIcon";
import LightningIcon from "../../iconComponents/LightningIcon";

//styles
import styles from "../../assets/scss/elements/Select.module.scss";


function SelectDefault(props: SelectBaseProps): JSX.Element {
  const { placeholder, disabled, options, onSelect, className, onOpen, onClose, onSearch, showSearch, style, searchFunc } = props;

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<SelectOptionProps>({});
  const [searchValue, setSearchValue] = useState<string>("");

  const selectContainer = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (open && selectContainer.current && !selectContainer.current.contains(event.target as Node)) {
        setOpen(false);
        onClose();
        setSearchValue("");
      }
    };

    if (open && inputRef.current) {
      inputRef.current.focus();
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const selectClassNames = classNames(
    className,
    styles.select,
    {
      [styles.select_open]: open,
      [styles["select_isables"]]: disabled,
    }
  );

  const handleSelectOption = value => {
    setSearchValue("");
    setSelectedValue(value);
    onSelect && onSelect(value);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.currentTarget.value);

  const filteredOptions = options.filter(
    item => item.value && `${item.value}`.toLowerCase().includes(searchValue.toLowerCase())
  );

  const toggleSelecOptionsList = () => {
    setOpen(!open);
    if (!open && onOpen) onOpen();
    if (open && onClose) {
      onClose();
      setSearchValue("");
    }
  };


  return (
    <div className={styles["select__wrapper"]} onClick={toggleSelecOptionsList} ref={selectContainer}>
      <div className={selectClassNames} style={style}>
        <span className={styles["select__icon"]}>
          <LightningIcon/>
        </span>
        <div className={styles["select__selector"]}>
          <span className={styles["select__selection-search"]}>
            <input
              ref={inputRef}
              value={searchValue}
              onChange={handleSearch}
              className={styles["select__selected-item"]}
            />
          </span>
          {
            !searchValue
              ? selectedValue
                ? <span className={styles["select__selection-item"]}>{ selectedValue.label }</span>
                : <span className={styles["select__selection-placeholder"]}>{ placeholder }</span>
              : null
          }
        </div>
        <span className={styles["select__icon-arrow"]}>
          <ArrowIcon direction={open ? "bottom" : "top"}/>
        </span>
      </div>
      <div className={`${styles["select__options"]} ${open ? styles["select__options_open"]: ""}`}>
        {
          filteredOptions.length
          ? filteredOptions.map(({value, label}, index) => (
            <SelectOption key={index} value={value} label={label} handleSelectOption={handleSelectOption}/>
          ))
          : <NoResults/>
        }
      </div>
    </div>
  );
}

export default SelectDefault;
