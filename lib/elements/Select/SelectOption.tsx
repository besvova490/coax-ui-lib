import React from "react";

//interfaces
import { SelectOptionProps } from "../../types/ElementsProps";

//styles
import styles from "../../assets/scss/elements/Select.module.scss";


function SelectOption ({ label, value, handleSelectOption }: SelectOptionProps): JSX.Element {


  return <div className={styles["select__option-item"]} onClick={() => handleSelectOption({ value, label })}>{ label }</div>;
}

export default SelectOption;
