import React from 'react';
import { View, TextInput, Button } from 'react-native';

const ToDoForm = ({ addTask }) => (
  <View>
    <TextInput placeholder="Enter task" />
    <Button title="Add Task" onPress={addTask} />
  </View>
);

export default ToDoForm;