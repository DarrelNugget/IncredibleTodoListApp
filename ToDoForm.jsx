import React from 'react';
import { View, TextInput, Button } from 'react-native';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  return (
    <form>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={() => {
        addTask(taskText);
        setTaskText('');
      }} />
    </form>
  );
}


export default ToDoForm;