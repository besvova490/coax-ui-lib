import React from "react";

//elements
import { IconButton } from "../IconButton";

//interfaces
import { IconButtonProps } from "../../../types/ElementsProps";

//assets
import AppleIcon from "../../../iconComponents/AppleIcon";

//styles
import styles from "../../../assets/scss/elements/Button.module.scss";


function IconAppleButton(props: IconButtonProps): JSX.Element {

  const {
    className,
    icon = <AppleIcon/>,
  } = props;

  return <IconButton className={`${styles["btn-socials__apple"]} ${className}`} icon={icon} {...props}/>;
}


export { IconAppleButton };
