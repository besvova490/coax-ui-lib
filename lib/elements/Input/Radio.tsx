import React, { useState } from "react";
import classNames from "classnames";

//styles
import "../../assets/scss/elements/Radio.scss";


type Props = {
  disabled?: boolean;
};


function Radio({ disabled }: Props) {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.FormEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setChecked(!checked);
  };

  const checkBoxClass = classNames(
    "radio__wrapper",
    {
      "radio__wrapper_checked": checked,
      "radio__wrapper_disabled": disabled,
    }
  );


  return (
    <label className={checkBoxClass} onClick={handleChange}>
      <span className="radio">
        <input type="radio" className="radio__input" checked={checked}/>
        <span className="radio__inner"><span className="radio__icon"/></span>
      </span>
      <span className="radio__label">Test</span>
    </label>
  );
}

export default Radio;
