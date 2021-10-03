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
  const {
    placeholder,
    disabled,
    options = [],
    onSelect,
    className,
    onOpen,
    onClose,
    onSearch,
    showSearch,
    style,
    searchFunc,
    fullWidth,
    size = "middle",
    prefixIcon,
    value = {},
  } = props;

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<SelectOptionProps>(value);
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

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const selectClassNames = classNames(
    className,
    styles["select"],
    {
      [styles["select_open"]]: open,
      [styles["select_disabled"]]: disabled,
    }
  );

  const selectWrapperClassNames = classNames(
    styles["select-wrapper"],
    styles[`select-wrapper_size-${size}`],
    {
      [styles["select-wrapper_full-width"]]: fullWidth,
    }
  );

  const handleSelectOption = value => {
    setSearchValue("");
    setSelectedValue(value);
    onSelect && onSelect(value);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
    onSearch && onSearch(e.target.value);
  }

  const filteredOptions = searchFunc
  ? searchFunc(searchValue, options)
  : options.filter(
    item => `${item.label}`.toLowerCase().includes(searchValue.toLowerCase())
  );

  const toggleSelecOptionsList = () => {
    if (disabled) return;

    setOpen(!open);
    if (!open && onOpen) onOpen();
    if (open && onClose) {
      inputRef.current && inputRef.current.blur();
      onClose();
      setSearchValue("");
    }
  };

  return (
    <div className={selectWrapperClassNames} onClick={toggleSelecOptionsList} ref={selectContainer}>
      <div className={selectClassNames} style={style}>
        {
          prefixIcon && <span className={styles["select__icon"]}>
              { prefixIcon }
            </span>
        }
        <div className={styles["select__selector"]}>
          {showSearch && (
          <span className={styles["select__selection-search"]}>
            <input
              ref={inputRef}
              value={searchValue}
              onChange={handleSearch}
              className={styles["select__selected-item"]}
            />
          </span>
          )}
          {
            !searchValue
              ? !!selectedValue && selectedValue.value
                ? <span className={styles["select__selection-item"]}>{ selectedValue.label || selectedValue.value }</span>
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
          ? filteredOptions.map(({value, label, disabled: sleectOptionDisabled}, index) => (
            <SelectOption key={index} value={value} label={label || value} disabled={sleectOptionDisabled} handleSelectOption={handleSelectOption}/>
          ))
          : <NoResults/>
        }
      </div>
    </div>
  );
}

export default SelectDefault;
