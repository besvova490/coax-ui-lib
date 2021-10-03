import React, { useRef, useState, useEffect } from "react";
import classNames from "classnames";

//types
import { InputNumberProps } from "../../types/ElementsProps";

//assets
import DecIcon from "../../iconComponents/DecIcon";
import IncIcon from "../../iconComponents/IncIcon";

//styles
import styles from "../../assets/scss/elements/Input.module.scss";


function InputNumber(props: InputNumberProps) {
  const {
    className,
    value,
    disabled,
    success,
    error,
    label,
    defaultValue = 0,
    bordered = true,
    borderRadius = true,
    ...rest
  } = props;

  const [numberValue, setNumberValue] = useState(defaultValue);

  useEffect(() => {
    if (value || value === 0) setNumberValue(value);
    else setNumberValue(defaultValue);
  }, [value]);

  const inputRef = useRef<HTMLInputElement>(null);

  const classNamesList = classNames(
    styles["input"],
    styles["input__number"],
    className,
    {
      [styles["input_no-border"]]: !bordered,
      [styles["input_disabled"]]: disabled,
      [styles["input_border-radius"]]: borderRadius,
      [styles["input_success"]]: success,
      [styles["input_error"]]: error,
    }
  );

  const handleFocus = () => inputRef.current && inputRef.current.classList.add(styles["input_active"]);
  const handleBlur = () => inputRef.current && inputRef.current.classList.remove(styles["input_active"]);

  const onInc = () => setNumberValue(numberValue + 1);
  const onDec = () => setNumberValue(numberValue - 1);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setNumberValue(+e.currentTarget.value.replace(/[^0-9]/g, ""));
  };

  return (
    <span className={styles["input__wrapper"]}>
      { label && <span className={styles["input__label"]}>{ label }</span> }
      <span className={classNamesList} ref={inputRef}>
        <span
          className={styles["input__icon input__icon_prefix"]}
          onClick={onDec}
        >
          <DecIcon/>
        </span>
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={numberValue}
          disabled={disabled}
          onChange={handleChange}
          {...rest}
        />
        <span
          className={styles["input__icon input__icon_suffix"]}
          onClick={onInc}
        >
          <IncIcon/>
        </span>
      </span>
      {error && <span className={styles["input__error"]}>{ error }</span>}
    </span>
  );
}

export default InputNumber;
