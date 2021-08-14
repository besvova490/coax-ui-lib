import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";

//elements
import Checkbox from "../Checkbox/Checkbox";
import Tag from "../Tag";

//types
import { SelectProps } from "../../types/ElementsProps";

//assets
import ArrowIcon from "../../iconComponents/ArrowIcon";
import LightningIcon from "../../iconComponents/LightningIcon";

//styles
import "../../assets/scss/elements/Select.scss";

const options = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
];


function SelectDefault(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Array<any>>(options);

  const selectContainer = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (open && selectContainer.current && !selectContainer.current.contains(event.target as Node)) {
        setOpen(false);
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
    "select",
    {
      "select_open": open,
    }
  );

  const handleSelectOption = (value: string) => {
    setSelectedValue(value);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);

    const filteredOptions = options.filter(
      item => item.label.toLowerCase().includes(e.currentTarget.value.toLowerCase())
    );

    setFilteredData(filteredOptions);
  };


  return (
    <div className="select__wrapper" onClick={() => setOpen(!open)} ref={selectContainer}>
      <div className={selectClassNames}>
        <span className="select__icon">
          <LightningIcon/>
        </span>
        <div className="select__selector">
          <span className="select__selection-search">
            <input
              ref={inputRef}
              value={searchValue}
              onChange={handleSearch}
              className="select__selected-item"
            />
          </span>
          {
            !searchValue
              ? selectedValue
                ? <span className="select__selection-item">{ selectedValue }</span>
                : <span className="select__selection-placeholder">Test</span>
              : null
          }
        </div>
        <span className="select__icon-arrow">
          <ArrowIcon direction={open ? "bottom" : "top"}/>
        </span>
      </div>
      <div className={`select__options ${open ? "select__options_open" : ""}`}>
        {
          filteredData.map(item => (
            <div key={item.value} className="select__option-item" onClick={() => handleSelectOption(item.value)}>{ item.label }</div>
          ))
        }
      </div>
    </div>
  );
}

export default SelectDefault;
