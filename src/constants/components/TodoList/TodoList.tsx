//react & react-native imports
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React from 'react';

//constant variables
import * as constants from '../../constants';

//interfaces
import {TodoListProps} from '../../../interfaces/TodoListProps.interface';

//styles
import {styles} from './styles';

const TodoList = ({todoList, editTodo, deleteTodo}: TodoListProps) => {
  const editItem = (event: number) => {
    editTodo(event);
  };

  const deleteItem = (event: number) => {
    deleteTodo(event);
  };

  return (
    <>
      {todoList?.length > 0 && (
        <SafeAreaView style={styles.todoListContainer}>
          {/* <FlatList
            data={todoList}
            renderItem={({item, index}) => (
              <View style={styles.todoItemContainer}>
                <Text style={styles.todoItem}>{index + '.  ' + item}</Text>
                <TouchableOpacity
                  style={styles.editButtonContainer}
                  onPress={() => editItem(index)}>
                  <Text style={styles.editButton}>
                    {constants.editButtonText}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deleteButtonContainer}
                  onPress={() => deleteItem(index)}>
                  <Text style={styles.deleteButton}>
                    {constants.deleteButtonText}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item}
          /> */}
          {todoList?.map((eachItem, index) => (
            <View key={index}>
              <View style={styles.todoItemContainer}>
                <Text style={styles.todoItem}>{index + '.  ' + eachItem}</Text>
                <TouchableOpacity
                  style={styles.editButtonContainer}
                  onPress={() => editItem(index)}>
                  <Text style={styles.editButton}>
                    {constants.editButtonText}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deleteButtonContainer}
                  onPress={() => deleteItem(index)}>
                  <Text style={styles.deleteButton}>
                    {constants.deleteButtonText}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </SafeAreaView>
      )}
    </>
  );
};

export default TodoList;
