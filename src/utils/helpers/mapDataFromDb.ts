import {FilterDataType} from '@scenes/Services/types';
import {GetServiceDataResponse} from '@store/types';

export type ServiceCategory = {
  categoryTitle: string;
  data: GetServiceDataResponse[];
};

const filterDataFromDb = (
  dataWithCategories: ServiceCategory[],
  filteredTypes: FilterDataType,
): ServiceCategory[] => {
  if (
    Object.values(filteredTypes).includes(true) &&
    filteredTypes.all === false
  ) {
    return dataWithCategories
      .filter(({categoryTitle}) => filteredTypes[categoryTitle])
      .map(({categoryTitle, data}) => ({
        categoryTitle,
        data,
      }));
  } else {
    return dataWithCategories.map(({data, categoryTitle}) => ({
      categoryTitle,
      data,
    }));
  }
};

export const mapDataFromDb = (
  data: GetServiceDataResponse[],
  filterData: FilterDataType,
) => {
  const dataWithCategoryTitles = data.reduce((arr, item) => {
    const index = arr.findIndex(
      category => category.categoryTitle === item.type,
    );
    if (index >= 0) {
      arr[index].data.push(item);
    } else {
      arr.push({
        categoryTitle: item.type,
        data: [item],
      });
    }
    return arr;
  }, [] as ServiceCategory[]);

  return filterDataFromDb(dataWithCategoryTitles, filterData);
};
