import React from "react";
import classNames from "classnames";

//type
import { TextAreaProps } from "../../types/ElementsProps";

//styles
import styles from "../../assets/scss/elements/Input.module.scss";


function TextArea(props: TextAreaProps) {
  const {
    label,
    defaultValue,
    placeholder,
    className,
    disabled,
    error,
    success,
    borderRadius = true,
    bordered = true,
    ...rest
  } = props;

  const classNamesList = classNames(
    styles["input"],
    styles["input__textarea"],
    className,
    {
      [styles["input_no-border"]]: !bordered,
      [styles["input_disabled"]]: disabled,
      [styles["input_border-radius"]]: borderRadius,
      [styles["input_success"]]: success,
      [styles["input_error"]]: error,
    }
  );

  return (
    <span className={`${styles["input__wrapper"]}  ${styles["textarea__wrapper"]}`}>
      { label && <span className={styles["input__label"]}>{ label }</span> }
      <textarea
        className={classNamesList}
        placeholder={placeholder}
        value={defaultValue}
        disabled={disabled}
        {...rest}
      />
      {error && <span className={styles["input__error"]}>{ error }</span>}
    </span>
  );
}


export default TextArea;
