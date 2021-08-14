import React from "react";

//elements
import { IconButton } from "../IconButton";

//interfaces
import { IconButtonProps } from "../../../types/ElementsProps";

//assets
import GoogleIconInColor from "../../../iconComponents/GoogleIconInColor";
import GoogleIcon from "../../../iconComponents/GoogleIcon";

//styles
import styles from "../../../assets/scss/elements/Button.module.scss";


function IconGoogleButton(props: IconButtonProps): JSX.Element {

  const {
    icon = props.disabled ? <GoogleIcon/> : <GoogleIconInColor/>,
    className,
  } = props;

  return <IconButton className={`${styles["btn-socials__google"]} ${className}`} icon={icon} {...props}/>;
}


export { IconGoogleButton };
