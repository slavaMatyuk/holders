import {StyleSheet} from 'react-native';
import {THEME} from '@styles/theme';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    backgroundColor: THEME.APP_BG,
  },
  drawerItem: {
    backgroundColor: THEME.INACTIVE,
    marginVertical: 10,
  },
  label: {
    color: THEME.PAGINATOR_DOT,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
