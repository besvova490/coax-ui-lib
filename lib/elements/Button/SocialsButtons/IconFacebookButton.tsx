import React from "react";

//elements
import { IconButton } from "../IconButton";

//interfaces
import { IconButtonProps } from "../../../types/ElementsProps";

//assets
import FacebookIcon from "../../../iconComponents/FacebookIcon";

//styles
import styles from "../../../assets/scss/elements/Button.module.scss";


function IconFacebookButton(props: IconButtonProps): JSX.Element {

  const {
    className,
    icon = <FacebookIcon/>,
  } = props;

  return <IconButton className={`${styles["btn-socials__facebook"]} ${className}`} icon={icon} {...props}/>;
}


export { IconFacebookButton };
