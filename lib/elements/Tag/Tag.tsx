import React, { useState, useEffect } from "react";

//assets
import CloseIcon from "../../iconComponents/CloseIcon";

//types
import { TagProps } from "../../types/ElementsProps";

//helpers
import { classNames } from "../../helpers/classNames";

//styles
import "../../assets/scss/elements/Tag.scss";


function Tag(props: TagProps): JSX.Element | null {
  const { disabled, label, onClose, className, closable = true, fill = true, visible = true } = props;

  const [display, setDisplay] = useState(visible);

  useEffect(() => setDisplay(visible), [visible]);

  const tagClassNames = classNames(
    "tag",
    className,
    {
      "tag_default": !fill,
      "tag_disabled": disabled
    }
  );

  if (!visible || !display) return null;

  const handleChange = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    setDisplay(!display);
    onClose && onClose();
  };

  return (
    <span className={tagClassNames}>
      { label }
      { closable && <CloseIcon className={"tag__icon"} onClick={handleChange}/> }
    </span>
  );
}

export { Tag };
