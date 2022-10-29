import React from 'react';
import {CheckBox} from '@rneui/themed';
import {FieldValues, Path, PathValue, useController} from 'react-hook-form';
import {CustomCheckboxProps} from './types';
import {styles} from './styles';

export const CustomCheckbox = <T extends FieldValues>({
  name,
  control,
  rules,
  setValue,
  ...rest
}: CustomCheckboxProps<T>) => {
  const {field} = useController<T>({name, control, rules});

  return (
    <CheckBox
      checked={field.value}
      onPress={() => setValue(name, !field.value as PathValue<T, Path<T>>)}
      containerStyle={styles.container}
      textStyle={styles.label}
      {...rest}
    />
  );
};
