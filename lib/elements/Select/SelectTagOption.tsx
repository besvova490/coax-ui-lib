import React from "react";

//elements
import { Checkbox } from "../Checkbox";

//interfaces
import { SelectTagOptionProps } from "../../types/ElementsProps";

//styles
import styles from "../../assets/scss/elements/Select.module.scss";


function SelectTagOption ({ label, value, disabled, checked, handleSelectTagOption }: SelectTagOptionProps): JSX.Element {


  return (
  <div
    className={`${styles["select__option-item"]} ${disabled ? styles["select__option-item_disabled"] : ""}`}
    onClick={e => !disabled && handleSelectTagOption(e, { value, label })}
  >
    <Checkbox label={`${label}`} checked={checked} disabled={disabled}/>
  </div>
  );
}

export default SelectTagOption;
