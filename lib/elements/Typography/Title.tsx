import React from "react";

//helpres
import { classNames } from "../../helpers/classNames";

//interface
import { TitleProps } from "../../types/TypographyProps";

//styles
import styles from "../../assets/scss/typography.module.scss";


function Title({ level, type, disabled, children, italic, strong, underline, className }: TitleProps): JSX.Element {

	const titleClassNames = classNames(
		className,
		{
			[styles["typography_disabled"]]: disabled,
			[styles["typography_danger"]]: type === "danger",
			[styles["typography_primary"]]: type === "primary",
			[styles["typography_success"]]: type === "success",
			[styles["typography_warning"]]: type === "warning",
			[styles["typography_info"]]: type === "info",
			[styles["typography_italic"]]: italic,
			[styles["typography_strong"]]: strong,
			[styles["typography_underline"]]: underline,
		}
	);

	switch(level) {
		case 1:
			return (<h1 className={`${styles["heading-regular-h1"]} ${titleClassNames}`}>{ children }</h1>);
		case 2:
			return (<h2 className={`${styles["heading-regular-h2"]} ${titleClassNames}`}>{ children }</h2>);
		case 3:
			return (<h3 className={`${styles["heading-regular-h3"]} ${titleClassNames}`}>{ children }</h3>);
		case 4:
			return (<h4 className={`${styles["heading-regular-h4"]} ${titleClassNames}`}>{ children }</h4>);
		case 5:
			return (<h5 className={`${styles["heading-regular-h5"]} ${titleClassNames}`}>{ children }</h5>);
		case 6:
			return (<h6 className={`${styles["heading-regular-h6"]} ${titleClassNames}`}>{ children }</h6>);
		default:
			return (<h1 className={`${styles["heading-regular-hero"]} ${titleClassNames}`}>{ children }</h1>);
	}
}

export default Title;
