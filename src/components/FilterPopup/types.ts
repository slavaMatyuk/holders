import {FilterDataType} from '@scenes/Services/types';

export type FilterPopupProps = {
  isOpen: boolean;
  handleVisibility: (isOpen: boolean) => void;
  data: FilterDataType;
  setData: (data: FilterDataType) => void;
};
