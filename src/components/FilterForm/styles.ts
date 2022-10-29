import {StyleSheet} from 'react-native';
import {THEME} from '@styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.PAGINATOR_DOT,
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  filterFormTitle: {
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '700',
    color: THEME.SECONDARY,
    padding: 16,
  },
  applyButtonText: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: '700',
    color: THEME.PAGINATOR_DOT,
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: THEME.APP_BG,
    margin: 18,
    padding: 10,
    borderRadius: 5,
  },
});
