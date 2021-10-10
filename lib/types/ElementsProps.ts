import React, { DetailedHTMLProps, HTMLAttributes } from "react";


export interface PreloaderProps {
  color?: string;
  width?: number;
  height?: number;
  boxHeight?: number;
};


interface CheckBoxOnClickProps {
  checked: boolean;
  value: string | number | undefined;
  label: string | React.ReactNode | undefined;
};

export interface CheckBoxProps {
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  value?: string | number;
  onCheck?: ({ checked, value, label }: CheckBoxOnClickProps) => void;
  indeterminateType?: "square" | "minus" | "normal";
};

export interface SocialButtonProps {
  icon?: React.ReactNode;
  href?: string;
  disabled?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  label?: string;
  fullWidth?: boolean;
  loading?: boolean;
  shape?: "square" | "round";
}

export interface IconButtonProps {
  children?: string | React.ReactNode;
  icon?: React.ReactNode;
  type?: "primary" | "default" | "text";
  shape?: "square" | "circle" | "round";
  size?: "small" | "middle" | "large";
  href?: string;
  disabled?: boolean;
  className?: string;
  htmlType?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface ButtonProps extends IconButtonProps {
  label?: string;
  fullWidth?: boolean;
  iconRight?: boolean;
  loading?: boolean;
}

export interface TextAreaProps {
  className?: string;
  placeholder?: string;
  defaultValue?: string;
  bordered?: boolean;
  disabled?: boolean;
  borderRadius?: boolean;
  success?: boolean;
  label?: string | React.ReactNode;
  error?: string | React.ReactNode;
};

export interface SwitchProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  type?: "normal" | "square" | "material" | "fluent";
  onChange?: (value: boolean) => void,
};

export interface SearchProps {
  className?: string;
  allowClear?: boolean;
  placeholder?: string;
  searchIconPosition?: "left" | "right";
};

export interface InputBaseProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, | "size" |"prefix"> {
  className?: string;
  bordered?: boolean;
  disabled?: boolean;
  borderRadius?: boolean;
  success?: boolean;
  label?: string | React.ReactNode;
  error?: string | React.ReactNode;
}

export interface InputNumberProps extends InputBaseProps {
  defaultValue?: number;
  value?: number;
};

export interface InputProps extends InputBaseProps {
  value?: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  fullWidth?: boolean;
  maxLength?: number;
  showMaxLength?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prefix?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
  size?: "small" | "middle" | "large";
};

export interface SelectOptionProps {
  disabled?: boolean;
  value?: string | number;
  label?: string | number | React.ReactNode;
  handleSelectOption?: ({ value, label }: { value?: string | number, label?: string | number | React.ReactNode }) => void;
};

export interface SelectTagOptionProps extends SelectOptionProps {
  handleSelectTagOption?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, { value, label }: { value?: string | number, label?: string | number | React.ReactNode }) => void;
  checked?: boolean;
};

export interface SelectBaseProps {
  placeholder?: string;
  disabled?: boolean;
  options?: Array<SelectOptionProps>;
  onSelect?: (value: SelectOptionProps) => void;
  className?: string;
  onOpen?: () => void;
  onClose?: () => void;
  onSearch?: (searchWords: string) => void;
  showSearch?: boolean,
  size?: "small" | "middle" | "large";
  fullWidth?: boolean;
  style?: Record<string, unknown>,
  prefixIcon?: React.ReactNode;
  value?: SelectOptionProps,
  defaultValue?: SelectOptionProps,
  searchFunc?: (searchWords: string, options: Array<SelectOptionProps>) => Array<SelectOptionProps>;
}

export interface SelectProps extends SelectBaseProps {
  mode?: "normal" | "tag";
  [key: string]: any;
};


export interface TagProps {
  label?: string;
  fill?: boolean;
  visible?: boolean;
  disabled?: boolean;
  closable?: boolean;
  className?: string;
  onClose?: () => void;
};


export interface NoResultsProps {
  searchWords?: string;
  className?: string;
};


export interface BaseCalendarProps {
  allowClear?: boolean;
  className?: string;
  disabled?: boolean;
  open?: boolean;
  placeholder?: string;
  style?: Record<string, unknown>;
  onOpenChange?: (isOpen: boolean) => void;
  format?: string;
  onChange?: (date: string) => void;
  onClear?: () => void;
}
