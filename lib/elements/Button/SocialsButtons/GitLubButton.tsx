import React from "react";

//elements
import { Button } from "../Button";

//interfaces
import { SocialButtonProps } from "../../../types/ElementsProps";

//assets
import GitLubIcon from "../../../iconComponents/GitLubIcon";

//styles
import styles from "../../../assets/scss/elements/Button.module.scss";


function GitLubButton(props: SocialButtonProps): JSX.Element {

  const {
    className,
    icon = <GitLubIcon/>,
    label = "Continue with GitLub"
  } = props;

  return <Button className={`${styles["btn-socials__git-lub"]} ${className}`} icon={icon} label={label} {...props}/>;
}


export { GitLubButton };
