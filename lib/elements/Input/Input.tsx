import React, { useState, useEffect } from "react";
import classNames from "classnames";

//types
import { InputProps } from "../../types/ElementsProps";

//assets
import PasswordHidden from "../../iconComponents/PasswordHidden";
import PasswordVisible from "../../iconComponents/PasswordVisible";

//styles
import "../../assets/scss/elements/Input.scss";


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
    showMaxLength = false,
    defaultValue = "",
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => setInputValue(value ? value : defaultValue), [value]);

  const classNamesList = classNames(
    "input",
    className,
    {
      "input_no-border": !bordered,
      "input_disabled": disabled,
      "input_border-radius": borderRadius,
      "input_success": success,
      "input_error": error,
      "input_password": type === "password"
    }
  );

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (!maxLength) {
      setInputValue(e.currentTarget.value);
      onChange && onChange(e.currentTarget.value);
    }
    else if (e.currentTarget.value.length <= maxLength) {
      setInputValue(e.currentTarget.value);
      onChange && onChange(e.currentTarget.value);
    }
  };

  return (
    <span className={"input__wrapper"}>
      { label && <span className={"input__label"}>{ label }</span> }
      <span className={classNamesList}>
        {type !== "password" && prefix && <span className={"input__icon input__icon_prefix"}>{ prefix }</span>}
        <input
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          value={inputValue ? inputValue : defaultValue}
          disabled={disabled}
          onChange={handleChange}
          {...rest}
        />
        {type !== "password" && suffix && <span className={"input__icon input__icon_suffix"}>{ suffix }</span>}
        {type === "password" && <span
          className={"input__show-password"}
          onClick={() => setShowPassword(!showPassword)}
        >{!showPassword ? <PasswordHidden fill={"#B3B5BC"}/> : <PasswordVisible fill={"#B3B5BC"}/>}
        </span>}
      </span>
      <span className="input__sub-section">
        <span className={"input__error"}>{ error }</span>
        { showMaxLength && <span className="input__count-length">{inputValue.length}/{maxLength}</span> }
      </span>
    </span>
  );
}

export default Input;
