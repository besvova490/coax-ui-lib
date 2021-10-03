import React from "react";

//elements
import Button from "../Button";

//interfaces
import { SocialButtonProps } from "../../../types/ElementsProps";

//assets
import FacebookIcon from "../../../iconComponents/FacebookIcon";

//styles
import styles from "../../../assets/scss/elements/Button.module.scss";


function FacebookButton(props: SocialButtonProps): JSX.Element {

  const {
    className,
    icon = <FacebookIcon/>,
    label = "Continue with Facebook"
  } = props;

  return <Button className={`${styles["btn-socials__facebook"]} ${className}`} icon={icon} label={label} {...props}/>;
}


export default FacebookButton;
