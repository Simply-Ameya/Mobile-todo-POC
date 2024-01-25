import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  todoListContainer: {
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  todoItemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingTop: 10,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingBottom: 10,
  },
  todoItem: {
    color: 'white',
    padding: 5,
    marginLeft: 10,
    width: 200,
  },
  editButtonContainer: {
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'green',
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  editButton: {color: 'white', fontWeight: '500'},
  deleteButtonContainer: {
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'red',
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    color: 'white',
    fontWeight: '500',
  },
});
