import {
  FieldValues,
  UseControllerProps,
  UseFormSetValue,
} from 'react-hook-form';
import {CheckBoxProps} from '@rneui/themed';

export type CustomCheckboxProps<T extends FieldValues> = {
  setValue: UseFormSetValue<T>;
} & Omit<CheckBoxProps, 'checked'> &
  UseControllerProps<T>;
