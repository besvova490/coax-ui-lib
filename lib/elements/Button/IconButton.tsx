import React from "react";

//interfases
import { ButtonProps } from "../../types/ElementsProps";

//helpers
import { classNames } from "../../helpers/classNames";

//styles
import styles from "../../assets/scss/elements/Button.module.scss";


function IconButton(props: ButtonProps): JSX.Element {
  const {
    disabled,
    icon,
    className,
    href,
    onClick,
    type = "primary",
    size = "middle",
    shape = "round",
  } = props;

  const IconButtonClassNames = classNames(
    styles.btn,
    styles["btn-icon"],
    className,
    {
      [styles.btn_primary]: type === "primary",
      [styles.btn_default]: type === "default",
      [styles.btn_text]: type === "text",
      [styles.btn_square]: shape === "square",
      [styles.btn_circle]: shape === "circle",
      [styles.btn_round]: shape === "round",
      [styles.btn_disabled]: disabled,
      [styles["btn_size-small"]]: size === "small",
      [styles["btn_size-middle"]]: size === "middle",
      [styles["btn_size-large"]]: size === "large",
    }
  );

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (href && disabled) {
      e.preventDefault();
    }

    onClick && !disabled && onClick(e);
  };


  switch (true) {
    case !!href:
      return (
        <a className={IconButtonClassNames} onClick={handleClick}>
          {icon}
        </a>
      );
    default:
      return (
        <button className={IconButtonClassNames} disabled={disabled} onClick={handleClick}>
          {icon}
        </button>
      );

  }
}


export { IconButton };
