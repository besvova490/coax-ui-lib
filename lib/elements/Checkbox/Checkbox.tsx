import React, { useState, useEffect } from "react";

//types
import { CheckBoxProps } from "../../types/ElementsProps";

//helpers
import { classNames } from "../../helpers/classNames";

//assets
import CheckedIcon from "../../iconComponents/CheckedIcon";
import DecIcon from "../../iconComponents/DecIcon";
import SquareIcon from "../../iconComponents/SquareIcon";

//styles
import "../../assets/scss/elements/Checkbox.scss";


function Checkbox({ label, checked, value, onCheck, indeterminateType = "normal", disabled = false }: CheckBoxProps): JSX.Element {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  
  const handleChange = (e: React.FormEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsChecked(!isChecked);
    onCheck && onCheck({ checked: !isChecked, label, value });
  };

  const checkBoxClass = classNames(
    "checkbox__wrapper",
    {
      "checkbox__wrapper_checked": isChecked,
      "checkbox__wrapper_disabled": disabled,
      "checkbox__wrapper-square": indeterminateType === "square"
    }
  );

  const checkedIcon = {
    "square": <SquareIcon/>,
    "minus": <DecIcon/>,
    "normal": <CheckedIcon/>
  };


  return (
    <label className={checkBoxClass} onClick={handleChange}>
      <span className="checkbox">
        <input type="checkbox" className="checkbox__input" value={`${isChecked}`}/>
        <span className="checkbox__inner">{ checkedIcon[indeterminateType] }</span>
      </span>
      {
        label && <span className="checkbox__label">{ label }</span>
      }
    </label>
  );
}


export { Checkbox };
