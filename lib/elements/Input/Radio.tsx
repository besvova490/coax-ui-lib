import React, { useState } from "react";
import classNames from "classnames";

//styles
import styles from "../../assets/scss/elements/Radio.module.scss";


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
    styles["radio__wrapper"],
    {
      [styles["radio__wrapper_checked"]]: checked,
      [styles["radio__wrapper_disabled"]]: disabled,
    }
  );


  return (
    <label className={checkBoxClass} onClick={handleChange}>
      <span className={styles["radio"]}>
        <input type="radio" className={styles["radio__input"]} checked={checked}/>
        <span className={styles["radio__inner"]}>
          <span className={styles["radio__icon"]}/>
        </span>
      </span>
      <span className={styles["radio__label"]}>Test</span>
    </label>
  );
}

export default Radio;
