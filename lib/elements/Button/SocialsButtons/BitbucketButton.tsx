import React from "react";

//elements
import { Button } from "../Button";

//interfaces
import { SocialButtonProps } from "../../../types/ElementsProps";

//assets
import BitbucketIcon from "../../../iconComponents/BitbucketIcon";

//styles
import styles from "../../../assets/scss/elements/Button.module.scss";


function BitbucketButton(props: SocialButtonProps): JSX.Element {

  const {
    className,
    icon = <BitbucketIcon/>,
    label = "Continue with Bitbucket"
  } = props;

  return <Button className={`${styles["btn-socials__facebook"]} ${className}`} icon={icon} label={label} {...props}/>;
}


export { BitbucketButton };
