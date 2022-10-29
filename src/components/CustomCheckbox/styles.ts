import {StyleSheet} from 'react-native';
import {THEME} from '@styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.PRIMARY_HOVER,
    width: '43%',
    borderRadius: 5,
  },
  label: {
    color: THEME.SECONDARY,
    fontSize: 16,
  },
});
