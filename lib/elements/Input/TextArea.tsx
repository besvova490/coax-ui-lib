import React from "react";
import classNames from "classnames";

//type
import { TextAreaProps } from "../../types/ElementsProps";

//styles
import "../../assets/scss/elements/Input.scss";


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
    "input input__textarea",
    className,
    {
      "input_no-border": !bordered,
      "input_disabled": disabled,
      "input_border-radius": borderRadius,
      "input_success": success,
      "input_error": error,
    }
  );

  return (
    <span className={"input__wrapper textarea__wrapper"}>
      { label && <span className={"input__label"}>{ label }</span> }
      <textarea
        className={classNamesList}
        placeholder={placeholder}
        value={defaultValue}
        disabled={disabled}
        {...rest}
      />
      {error && <span className={"input__error"}>{ error }</span>}
    </span>
  );
}


export default TextArea;
