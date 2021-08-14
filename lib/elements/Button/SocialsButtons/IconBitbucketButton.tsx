import React from "react";

//elements
import { IconButton } from "../IconButton";

//interfaces
import { IconButtonProps } from "../../../types/ElementsProps";

//assets
import BitbucketIcon from "../../../iconComponents/BitbucketIcon";

//styles
import styles from "../../../assets/scss/elements/Button.module.scss";


function IconBitbucketButton(props: IconButtonProps): JSX.Element {

  const {
    className,
    icon = <BitbucketIcon/>,
  } = props;

  return <IconButton className={`${styles["btn-socials__facebook"]} ${className}`} icon={icon} {...props}/>;
}


export { IconBitbucketButton };
