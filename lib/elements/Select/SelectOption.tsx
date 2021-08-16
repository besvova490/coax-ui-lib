import React from "react";

//interfaces
import { SelectOptionProps } from "../../types/ElementsProps";

//styles
import styles from "../../assets/scss/elements/Select.module.scss";


function SelectOption ({ label, value, disabled, handleSelectOption }: SelectOptionProps): JSX.Element {


  return (
  <div
    className={`${styles["select__option-item"]} ${disabled ? styles["select__option-item_disabled"] : ""}`}
    onClick={() => !disabled && handleSelectOption({ value, label })}
  >
    { label }
  </div>
  );
}

export default SelectOption;
