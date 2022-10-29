import React, {FC} from 'react';
import {Text, View, Pressable} from 'react-native';
import {SubmitHandler, useForm} from 'react-hook-form';
import {FilterDataType} from '@scenes/Services/types';
import {CustomCheckbox} from '@components/CustomCheckbox';
import {TextValues} from '@constants/TextValues';
import {FilterFormProps} from './types';
import {styles} from './styles';

export const FilterForm: FC<FilterFormProps> = ({
  onClose,
  formData,
  setFormData,
}) => {
  const {control, handleSubmit, setValue} = useForm<FilterDataType>({
    defaultValues: formData,
  });

  const onSubmit: SubmitHandler<FilterDataType> = data => {
    setFormData(data);
    onClose();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.filterFormTitle}>{TextValues.FilterFormTitle}</Text>
      <View style={styles.checkboxContainer}>
        <CustomCheckbox
          name='all'
          title={TextValues.CheckAllItems}
          control={control}
          setValue={setValue}
        />
        <CustomCheckbox
          name='autoService'
          title={TextValues.DropdownLabelAuto}
          control={control}
          setValue={setValue}
        />
        <CustomCheckbox
          name='beauty'
          title={TextValues.DropdownLabelBeauty}
          control={control}
          setValue={setValue}
        />
        <CustomCheckbox
          name='education'
          title={TextValues.DropdownLabelEdu}
          control={control}
          setValue={setValue}
        />
        <CustomCheckbox
          name='finances'
          title={TextValues.DropdownLabelFinances}
          control={control}
          setValue={setValue}
        />
        <CustomCheckbox
          name='food'
          title={TextValues.DropdownLabelFood}
          control={control}
          setValue={setValue}
        />
        <CustomCheckbox
          name='hotel'
          title={TextValues.DropdownLabelHotel}
          control={control}
          setValue={setValue}
        />
        <CustomCheckbox
          name='mall'
          title={TextValues.DropdownLabelMall}
          control={control}
          setValue={setValue}
        />
        <CustomCheckbox
          name='pharmacy'
          title={TextValues.DropdownLabelPharmacy}
          control={control}
          setValue={setValue}
        />
        <CustomCheckbox
          name='sports'
          title={TextValues.DropdownLabelSports}
          control={control}
          setValue={setValue}
        />
        <CustomCheckbox
          name='store'
          title={TextValues.DropdownLabelStore}
          control={control}
          setValue={setValue}
        />
        <CustomCheckbox
          name='others'
          title={TextValues.DropdownLabelOthers}
          control={control}
          setValue={setValue}
        />
      </View>
      <Pressable
        onPress={handleSubmit(onSubmit)}
        style={styles.buttonContainer}>
        <Text style={styles.applyButtonText}>
          {TextValues.ApplyFilterButton}
        </Text>
      </Pressable>
    </View>
  );
};
