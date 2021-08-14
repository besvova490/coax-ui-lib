import React from "react";

//elements
import { Button } from "../Button";

//interfaces
import { SocialButtonProps } from "../../../types/ElementsProps";

//assets
import GitHubIcon from "../../../iconComponents/GitHubIcon";

//styles
import styles from "../../../assets/scss/elements/Button.module.scss";


function GitHubButton(props: SocialButtonProps): JSX.Element {

  const {
    className,
    icon = <GitHubIcon/>,
    label = "Continue with GitHub"
  } = props;

  return <Button className={`${styles["btn-socials__apple"]} ${className}`} icon={icon} label={label} {...props}/>;
}


export { GitHubButton };
