export interface BaseTypography {
	children?: string | React.ReactNode;
	type?: "primary" | "success" | "warning" | "danger" | "info" | "secondary";
	disabled?: boolean;
	className?: string;
	italic?: boolean;
	strong?: boolean;
	underline?: boolean;
}

export interface TitleProps extends BaseTypography {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface TextProps extends BaseTypography {
	size?: "xxl" | "xl" | "l" | "m" | "s" | "xs";
	fontWeight?: "semibold" | "bold";
	delete?: boolean;
}

