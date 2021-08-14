import React from "react";

//elements
import { IconButton } from "../IconButton";

//interfaces
import { IconButtonProps } from "../../../types/ElementsProps";

//assets
import GitLubIcon from "../../../iconComponents/GitLubIcon";

//styles
import styles from "../../../assets/scss/elements/Button.module.scss";


function IconGitLubButton(props: IconButtonProps): JSX.Element {

  const {
    className,
    icon = <GitLubIcon/>,
  } = props;

  return <IconButton className={`${styles["btn-socials__git-lub"]} ${className}`} icon={icon} {...props}/>;
}


export { IconGitLubButton };
