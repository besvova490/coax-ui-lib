import React from "react";

//elements
import IconButton from "../IconButton";

//interfaces
import { IconButtonProps } from "../../../types/ElementsProps";

//assets
import GitHubIcon from "../../../iconComponents/GitHubIcon";

//styles
import styles from "../../../assets/scss/elements/Button.module.scss";


function IconGitHubButton(props: IconButtonProps): JSX.Element {

  const {
    className,
    icon = <GitHubIcon/>,
  } = props;

  return <IconButton className={`${styles["btn-socials__apple"]} ${className}`} icon={icon} {...props}/>;
}


export default IconGitHubButton;
