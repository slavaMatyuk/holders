import {StyleSheet} from 'react-native';
import {THEME} from '@styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.APP_BG,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: THEME.PRIMARY,
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
  activityIndicatorBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  filterButtonContainer: {
    backgroundColor: THEME.APP_BG,
    height: 42,
    padding: 7,
    paddingHorizontal: 22,
    alignItems: 'flex-end',
  },
});
