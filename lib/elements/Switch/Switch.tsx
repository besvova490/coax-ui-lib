import React, { useState } from "react";
import classNames from "classnames";

//types
import { SwitchProps } from "../../types/ElementsProps";

//styles
import styles from "../../assets/scss/elements/Switch.module.scss";


function Switch({ label, type = "normal", disabled = false, onChange, className }: SwitchProps) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    if (!disabled) {
      setChecked(!checked);
      onChange && onChange(!checked);
    }
  };

  const switchClassNames = classNames(
    styles["switch"],
    className,
    {
      [styles["switch_checked"]]: checked,
      [styles["switch_disabled"]]: disabled,
      [styles["switch_type-square"]]: type === "square",
      [styles["switch_type-material"]]: type === "material",
      [styles["switch_type-fluent"]]: type === "fluent",
    }
  );

  return (
    <label className={styles["switch__wrapper"]}>
      <button className={switchClassNames} role="switch" onClick={handleChange}>
        <div className={styles["switch__handle"]}/>
      </button>
      <span className={styles["switch__label"]}>{ label }</span>
    </label>
  );
}

export default Switch;
