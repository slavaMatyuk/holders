import {DropdownPickerItem} from '@components/DropdownPicker/types';
import {TextValues} from '@constants/TextValues';
import {FilterDataType} from '@scenes/Services/types';

export const serviceItemsTypes: DropdownPickerItem[] = [
  {label: TextValues.DropdownLabelAuto, value: 'autoService'},
  {label: TextValues.DropdownLabelHotel, value: 'hotel'},
  {label: TextValues.DropdownLabelFood, value: 'food'},
  {label: TextValues.DropdownLabelSports, value: 'sports'},
  {label: TextValues.DropdownLabelFinances, value: 'finances'},
  {label: TextValues.DropdownLabelBeauty, value: 'beauty'},
  {label: TextValues.DropdownLabelMall, value: 'mall'},
  {label: TextValues.DropdownLabelStore, value: 'store'},
  {label: TextValues.DropdownLabelEdu, value: 'education'},
  {label: TextValues.DropdownLabelPharmacy, value: 'pharmacy'},
  {label: TextValues.DropdownLabelOthers, value: 'others'},
];

export const initialTypes: FilterDataType = {
  all: false,
  autoService: true,
  beauty: true,
  education: true,
  finances: true,
  food: true,
  hotel: true,
  mall: true,
  pharmacy: true,
  sports: true,
  store: true,
  others: true,
};
