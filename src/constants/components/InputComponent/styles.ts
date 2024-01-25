import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  TextInputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  TextInput: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 5,
    width: 270,
  },
  UpdateTextInput: {
    borderWidth: 1,
    borderRadius: 5,
    width: 260,
    backgroundColor: 'white',
    marginLeft: 5,
  },
  ButtonContainer: {
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'blue',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    color: 'white',
    fontWeight: '500',
  },
});
