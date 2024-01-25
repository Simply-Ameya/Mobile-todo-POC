import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import * as constants from './src/constants/constants';
import InputComponent from './src/constants/components/InputComponent/InputComponent';
import TodoList from './src/constants/components/TodoList/TodoList';

let todoList: string[] = [];

function App(): React.JSX.Element {
  const [count, setCount] = useState(0);
  const [editingItemIndex, setEditingItemIndex] = useState<number>(0);
  const [editingItem, setEditingItem] = useState<string>('');
  const [isEdit, setIsEdit] = useState(false);

  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const addTodo = (event: string) => {
    todoList.push(event);
    setCount(count + 1);
  };

  const editTodo = (event: number) => {
    setEditingItemIndex(event);
    setEditingItem(todoList[event]);
    setIsEdit(true);
  };

  const updateTodo = (event: string, index: number) => {
    const temp: string[] = [];
    todoList.forEach(each => temp.push(each));
    temp.splice(index, 1, event);
    todoList = temp;
    stopEditing();
  };

  const deleteTodo = (event: number) => {
    const temp: string[] = [];

    todoList.forEach(each => temp.push(each));
    temp.splice(event, 1);

    todoList = temp;
    setCount(count + 1);
  };

  const stopEditing = () => {
    setEditingItemIndex(0);
    setEditingItem('');
    setIsEdit(false);
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.applicationContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{constants.todoHeading}</Text>
        </View>

        <InputComponent
          addToDo={addTodo}
          updateTodo={updateTodo}
          editingItem={editingItem}
          editingIndex={editingItemIndex}
          isEdit={isEdit}
        />

        {isEdit ? (
          <View style={styles.cancelButtonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={stopEditing}>
              <Text style={styles.buttonText}>
                {constants.cancelEditButtonText}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}

        <TodoList
          todoList={todoList}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  applicationContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  headingContainer: {
    width: 375,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    fontWeight: '500',
    color: Colors.darker,
    marginTop: 30,
    marginBottom: 50,
  },
  cancelButtonContainer: {
    width: 375,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: 'blue',
    color: 'white',
    height: 40,
    width: 120,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
  },
});

export default App;
