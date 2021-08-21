import React from "react";

//elements
import Button from "../Button";

//interfaces
import { SocialButtonProps } from "../../../types/ElementsProps";

//assets
import GoogleIconInColor from "../../../iconComponents/GoogleIconInColor";
import GoogleIcon from "../../../iconComponents/GoogleIcon";

//styles
import styles from "../../../assets/scss/elements/Button.module.scss";


function GoogleButton(props: SocialButtonProps): JSX.Element {

  const {
    className,
    icon = props.disabled ? <GoogleIcon/> : <GoogleIconInColor/>,
    label = "Sign in with Google"
  } = props;

  return <Button className={`${styles["btn-socials__google"]} ${className}`} icon={icon} label={label} {...props}/>;
}


export default GoogleButton;
