import React from "react";

//helpres
import { classNames } from "../../helpers/classNames";

//interface
import { TextProps } from "../../types/TypographyProps";

//styles
import styles from "../../assets/scss/typography.module.scss";


function Title(props: TextProps): JSX.Element {
	const { size = "m", fontWeight, type, disabled, children, italic, strong, underline, className, delete: del } = props;

	const titleClassNames = classNames(
		className,
		styles[`paragraph-regular-${size}`],
		{
			[styles["typography_disabled"]]: disabled,
			[styles[`typography_${type}`]]: !!type,
			[styles["typography_italic"]]: italic,
			[styles["typography_strong"]]: strong,
			[styles["typography_strong"]]: strong,
			[styles["paragraph-bold"]]: fontWeight === "bold",
			[styles["paragraph-semibold"]]: fontWeight === "semibold",
		}
	);

	switch(true) {
		case !!strong:
			return (<strong className={titleClassNames}>{ children }</strong>);
		case !!italic:
			return (<i className={titleClassNames}>{ children }</i>);
		case !!underline:
			return (<u className={titleClassNames}>{ children }</u>);
		case !!del:
			return (<del className={titleClassNames}>{ children }</del>);
		default:
			return (<p className={titleClassNames}>{ children }</p>);
	}
}

export default Title;
