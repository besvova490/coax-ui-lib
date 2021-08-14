import React from "react";


export type PreloaderProps = {
  color?: string;
  width?: number;
  height?: number;
  boxHeight?: number;
};


type CheckBoxOnClickProps = {
  checked: boolean,
  value: string | number | undefined,
  label: string | React.ReactNode | undefined
};

export type CheckBoxProps = {
  checked?: boolean;
  label?: string | React.ReactNode;
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
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface ButtonProps extends IconButtonProps {
  label?: string;
  fullWidth?: boolean;
  iconRight?: boolean;
  loading?: boolean;
}

export type TextAreaProps = {
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

export type SwitchProps = {
  label?: string;
  disabled?: boolean;
  type?: "normal" | "square" | "material" | "fluent";
  onChange?: (value: boolean) => void,
};

export type SearchProps = {
  className?: string;
  allowClear?: boolean;
  placeholder?: string;
  searchIconPosition?: "left" | "right";
};

export type InputNumberProps = {
  className?: string;
  defaultValue?: number;
  value?: number;
  bordered?: boolean;
  disabled?: boolean;
  borderRadius?: boolean;
  success?: boolean;
  label?: string | React.ReactNode;
  error?: string | React.ReactNode;
};

export type InputProps = {
  value?: string,
  type?: string,
  className?: string,
  placeholder?: string,
  defaultValue?: string,
  bordered?: boolean,
  disabled?: boolean,
  borderRadius?: boolean,
  success?: boolean,
  maxLength?: number,
  showMaxLength?: boolean,
  onChange?: (value: string) => void,
  label?: string | React.ReactNode,
  error?:string | React.ReactNode,
  prefix?: string | React.ReactNode,
  suffix?: string | React.ReactNode,
};

export type SelectProps = {
  mode?: "normal" | "tag"
};

export type TagProps = {
  label?: string;
  fill?: boolean;
  visible?: boolean;
  disabled?: boolean;
  closable?: boolean;
  className?: string;
  onClose?: () => void;
};
