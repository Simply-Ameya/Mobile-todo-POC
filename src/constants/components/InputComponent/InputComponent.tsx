//react & react-native imports
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useState, useRef, MutableRefObject} from 'react';

//constant variables
import * as constants from '../../constants';

//interfaces
import {InputComponentProps} from '../../../interfaces/InputComponentProps.interface';

//styles
import {styles} from './styles';

const InputComponent = ({
  addToDo,
  updateTodo,
  editingItem,
  editingIndex,
  isEdit,
}: InputComponentProps) => {
  const [searchText, setSearchText] = useState<string>('');

  const inputRef = useRef() as MutableRefObject<TextInput>;

  useEffect(() => {
    setSearchText(editingItem);
    if (isEdit) inputRef.current.focus();
  }, [editingItem, isEdit]);

  const buttonText = isEdit
    ? constants.updateButtonText
    : constants.addButtonText;

  const buttonClicked = () => {
    if (searchText && addToDo && !isEdit) addToDo(searchText);
    else if (isEdit) updateTodo(searchText, editingIndex);
    setSearchText('');
  };

  return (
    <View style={styles.TextInputContainer}>
      {/* autoFocus not working as intended. WHY? */}
      <TextInput
        ref={inputRef}
        placeholder={isEdit ? 'Update task.....' : 'Type task....'}
        style={styles.TextInput}
        value={searchText}
        autoFocus={isEdit}
        onChangeText={(text: string) => {
          setSearchText(text);
        }}
      />

      <TouchableOpacity style={styles.ButtonContainer} onPress={buttonClicked}>
        <Text style={styles.Button}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputComponent;
