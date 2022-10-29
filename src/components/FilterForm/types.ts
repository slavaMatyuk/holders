import {FilterDataType} from '@scenes/Services/types';

export type FilterFormProps = {
  onClose: () => void;
  formData: FilterDataType;
  setFormData: (data: FilterDataType) => void;
};
