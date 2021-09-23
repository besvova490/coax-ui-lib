import { ReactNode } from "react";


export interface TabsProps {
  children: Array<ReactNode>;
  activeKey?: number;
  defaultActiveKey?: number;
  onChange?: (activeKey: string | number) => void; 
};

export interface PanesProps {
  children: ReactNode;
  tab: string | ReactNode;
  disabled?: boolean;
};