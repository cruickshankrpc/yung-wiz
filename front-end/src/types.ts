export interface ListDataProps {
  title: string;
  contentArr?: string[];
  fileUrl?: string;
  link?: string;
}

export interface ListProps {
  data?: ListDataProps[];
  isLoading?: boolean;
  isPending?: boolean;
  error?: boolean;
}

export interface WindowComponentProps {
  list?: any;
  content: any; //TODO
  width?: string;
  title: string;
  className?: string;
  modalId?: string;
  clickedItem?: any;
}
