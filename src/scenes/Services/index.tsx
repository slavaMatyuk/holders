import React, {FC, useEffect, useReducer, useState} from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ServicesList} from '@components/ServicesList';
import {FilterPopup} from '@components/FilterPopup';
import {initialTypes} from '@constants/ServiceItemsTypes';
import {getServicesDataAction} from '@store/actions/manageService';
import {
  dataFromDbSelector,
  isLoadingSelector,
} from '@store/selectors/manageService';
import {FilterDataType} from './types';
import {styles} from './styles';
import {AppIcons} from '@assets/images';
import {THEME} from '@styles/theme';

export const Services: FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filter, dispatchFilter] = useReducer(
    (state: FilterDataType, updates: FilterDataType) => ({
      ...state,
      ...updates,
    }),
    initialTypes,
  );

  const loadingFromDb = useSelector(isLoadingSelector);
  const dataFromDb = useSelector(dataFromDbSelector);

  const dispatch = useDispatch();

  const saveFilterToAsyncStorage = async (data: FilterDataType) => {
    try {
      await AsyncStorage.setItem('FILTER', JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const getFilterFromAsyncStorage = async () => {
    try {
      const FilterSet = await AsyncStorage.getItem('FILTER');
      FilterSet && dispatchFilter(JSON.parse(FilterSet));
    } catch (error) {
      console.log(error);
    }
  };

  const handleVisibility = (isOpen: boolean) => {
    setIsFilterOpen(isOpen);
  };

  const handleFilterApply = (data: FilterDataType) => {
    dispatchFilter(data);
    saveFilterToAsyncStorage(data);
  };

  useEffect(() => {
    dispatch(getServicesDataAction.request());
  }, [dispatch]);

  useEffect(() => {
    getFilterFromAsyncStorage();
  }, []);

  return loadingFromDb ? (
    <View style={styles.activityIndicatorBox}>
      <ActivityIndicator size='large' />
    </View>
  ) : (
    <>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.filterButtonContainer}
        onPress={() => handleVisibility(true)}>
        <AppIcons.FilterIcon
          width={27}
          height={27}
          fill={THEME.PAGINATOR_DOT}
        />
      </TouchableOpacity>
      <ServicesList data={dataFromDb} filterData={filter} />
      <FilterPopup
        isOpen={isFilterOpen}
        handleVisibility={handleVisibility}
        data={filter}
        setData={handleFilterApply}
      />
    </>
  );
};
