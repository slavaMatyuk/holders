import React, {FC} from 'react';
import {Modal, Pressable, ScrollView, Text, View} from 'react-native';
import {FilterForm} from '@components/FilterForm';
import {FilterPopupProps} from './types';
import {styles} from './styles';
import {TextValues} from '@constants/TextValues';

export const FilterPopup: FC<FilterPopupProps> = ({
  isOpen,
  handleVisibility,
  data,
  setData,
}) => {
  const closeModal = () => {
    handleVisibility(false);
  };

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={isOpen}
      onRequestClose={closeModal}>
      <View style={styles.outerBox}>
        <View style={styles.innerBox}>
          <Pressable onPress={closeModal}>
            <Text style={styles.closeModalButton}>
              {TextValues.RemovePhoto}
            </Text>
          </Pressable>
          <ScrollView style={styles.scrollList}>
            <FilterForm
              onClose={closeModal}
              formData={data}
              setFormData={setData}
            />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
