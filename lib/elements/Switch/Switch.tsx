import React, { useState } from "react";
import classNames from "classnames";

//types
import { SwitchProps } from "../../types/ElementsProps";

//styles
import "../../assets/scss/elements/Switch.scss";


function Switch({ label, type = "normal", disabled = false, onChange }: SwitchProps) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    if (!disabled) {
      setChecked(!checked);
      onChange && onChange(!checked);
    }
  };

  const switchClassNames = classNames(
    "switch",
    {
      "switch_checked": checked,
      "switch_disabled": disabled,
      "switch_type-square": type === "square",
      "switch_type-material": type === "material",
      "switch_type-fluent": type === "fluent",
    }
  );

  return (
    <label className="switch__wrapper">
      <button className={switchClassNames} role="switch" onClick={handleChange}>
        <div className="switch__handle"/>
      </button>
      <span className="switch__label">{ label }</span>
    </label>
  );
}

export default Switch;
