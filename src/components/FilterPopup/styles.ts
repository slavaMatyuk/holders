import {StyleSheet} from 'react-native';
import {THEME} from '@styles/theme';

export const styles = StyleSheet.create({
  outerBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.PRIMARY_HOVER,
  },
  scrollList: {
    backgroundColor: THEME.SECONDARY,
    width: '100%',
  },
  innerBox: {
    position: 'relative',
    backgroundColor: THEME.SECONDARY,
    width: '100%',
    height: 'auto',
  },
  closeModalButton: {
    position: 'absolute',
    right: 15,
    top: -70,
    fontSize: 60,
    color: THEME.DANGER,
  },
});
