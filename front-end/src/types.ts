import { JSX } from "react";

export interface ListDataProps {
  title: string;
  contentArr?: string[];
  fileUrl?: string;
  link?: string;
  audioUrl?: string;
}

export interface ListProps {
  data?: ListDataProps[];
  isLoading?: boolean;
  isPending?: boolean;
  error?: boolean;
}

export interface WindowComponentProps {
  list?: any;
  children: JSX.Element;
  width?: string;
  title: string;
  className?: string;
  clickedItem?: ListDataProps;
}
