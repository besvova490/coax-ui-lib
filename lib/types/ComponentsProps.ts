import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

export type TableRow = {[key:string]: string | number | boolean | undefined};

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

export interface TableProps {
  children: ReactNode;
  dataSource: Array<TableRow>;
  fullWidth?: boolean;
}

export interface TableColumnProps {
  title?: string;
  dataIndex?: string;
  className?: string;
  width?: string;
  render?: (rowObj: TableRow) => JSX.Element;
}

export interface PaginationProps {
  className?: string;
  disabled?: boolean;
  onChange?: (page: number) => void;
  pagesList: Array<number>;
  current?: number;
}

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  disabled?: boolean;
  rating: number;
  onRatingChange?: (rating: number) => void;
}
