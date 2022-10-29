import {FilterDataType} from '@scenes/Services/types';
import {GetServiceDataResponse} from '@store/types';

export type Props = {
  data: GetServiceDataResponse[];
  filterData: FilterDataType;
};
