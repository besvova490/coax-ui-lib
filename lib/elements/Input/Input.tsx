import React, { useState, useEffect } from "react";
import classNames from "classnames";

//types
import { InputProps } from "../../types/ElementsProps";

//assets
import PasswordHidden from "../../iconComponents/PasswordHidden";
import PasswordVisible from "../../iconComponents/PasswordVisible";

//styles
import styles from "../../assets/scss/elements/Input.module.scss";


function Input(props: InputProps) {
  const {
    type,
    className,
    placeholder,
    disabled,
    success,
    error,
    label,
    prefix,
    suffix,
    maxLength,
    value,
    onChange,
    bordered = true,
    borderRadius = true,
    showMaxLength,
    fullWidth,
    size = "middle",
    defaultValue = "",
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => setInputValue(value ? value : defaultValue), [value]);

  const classNamesList = classNames(
    styles["input"],
    className,
    {
      [styles["input_no-border"]]: !bordered,
      [styles["input_disabled"]]: disabled,
      [styles["input_border-radius"]]: borderRadius,
      [styles["input_success"]]: success,
      [styles["input_error"]]: error,
      [styles["input_password"]]: type === "password"
    }
  );

  const wrapperClassNames = classNames(
    styles["input-wrapper"],
    styles[`input-wrapper_size-${size}`],
    {
      [styles["input-wrapper_full-width"]]: fullWidth,
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!maxLength) {
      setInputValue(e.currentTarget.value);
      onChange && onChange(e);
    }
    else if (e.currentTarget.value.length <= maxLength) {
      setInputValue(e.currentTarget.value);
      onChange && onChange(e);
    }
  };

  return (
    <span className={wrapperClassNames}>
      { label && <span className={styles["input__label"]}>{ label }</span> }
      <span className={classNamesList}>
        {type !== "password" && prefix && <span className={`${styles["input__icon"]} ${styles["input__icon_prefix"]}`}>{ prefix }</span>}
        <input
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          value={inputValue ? inputValue : defaultValue}
          disabled={disabled}
          onChange={handleChange}
          {...rest}
        />
        {type !== "password" && suffix && <span className={styles["input__icon input__icon_suffix"]}>{ suffix }</span>}
        {type === "password" && <span
          className={styles["input__show-password"]}
          onClick={() => setShowPassword(!showPassword)}
        >{!showPassword ? <PasswordHidden fill={"#B3B5BC"}/> : <PasswordVisible fill={"#B3B5BC"}/>}
        </span>}
      </span>
      <span className={styles["input__sub-section"]}>
        <span className={styles["input__error"]}>{ error }</span>
        { showMaxLength && <span className={styles["input__count-length"]}>{inputValue.length}/{maxLength}</span> }
      </span>
    </span>
  );
}

export default Input;
