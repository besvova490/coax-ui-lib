import React from "react";

//elements
import { Button } from "../Button";

//interfaces
import { SocialButtonProps } from "../../../types/ElementsProps";

//assets
import AppleIcon from "../../../iconComponents/AppleIcon";

//styles
import styles from "../../../assets/scss/elements/Button.module.scss";


function AppleButton(props: SocialButtonProps): JSX.Element {

  const {
    className,
    icon = <AppleIcon/>,
    label = "Sign in with Apple"
  } = props;

  return <Button className={`${styles["btn-socials__apple"]} ${className}`} icon={icon} label={label} {...props}/>;
}


export { AppleButton };
