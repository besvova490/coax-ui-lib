import React from "react";

//components
import { Preloader } from "../../components/Preloader";

//helpers
import { classNames } from "../../helpers/classNames";

//types
import { ButtonProps } from "../../types/ElementsProps";

//styles
import styles from "../../assets/scss/elements/Button.module.scss";


function Button (props: ButtonProps): JSX.Element {
  const {
    children,
    label,
    disabled,
    fullWidth,
    icon,
    iconRight,
    loading,
    className,
    href,
    onClick,
    size = "middle",
    type = "primary",
    shape = "round",
    ...rest
  } = props;

  const classNameList = classNames(
    styles.btn,
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
      [styles["btn_full-width"]]: fullWidth,
      [styles["btn_with-icon"]]: icon,
    },
  );

  const preloaderColor = type === "primary" ? "#FFF" : "#3265F6";

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (href && disabled) {
      e.preventDefault();
    }

    onClick && !disabled && onClick(e);
  };

  const renderButtonContent = () => {
    return (
      <>
        { icon && !iconRight && <span role="img" className={`${styles.btn__icon} ${styles.btn__icon_left}`}>{ icon }</span> }
        {
          (label || children) &&
          (
            <span className={styles.btn__label}>
              { children ? children : label }
            </span>
          )
        }
        { icon && iconRight && <span role="img" className={`${styles.btn__icon} ${styles.btn__icon_right}`}>{ icon }</span> }
      </>
    );
  };

  switch (true) {
    case !!href:
      return (
        <a className={classNameList} {...rest} href={href} onClick={handleClick}>
          {
            loading
              ? <Preloader color={preloaderColor} boxHeight={20}/>
              : renderButtonContent()
          }
        </a>
      );
    default:
      return (
        <button className={classNameList} disabled={disabled} {...rest} onClick={handleClick}>
          {
            loading
              ? <Preloader color={preloaderColor} boxHeight={20}/>
              : renderButtonContent()
          }
        </button>
      );
  }
}

export { Button };
