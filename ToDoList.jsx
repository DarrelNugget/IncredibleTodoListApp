import React from 'react';
import { ScrollView, Text } from 'react-native';


const ToDoList = ({ tasks }) => (
  <ScrollView>
    {tasks.map((task, index) => (
      <Text key={index}>{task}</Text>
    ))}
  </ScrollView>
);

function ToDoList({ tasks }) {
    return (
      <ScrollView>
        {tasks.map((task, index) => (
          <Text key={index} style={styles.sectionTitle}>
            {task}
          </Text>
        ))}
      </ScrollView>
    );
  }

export default ToDoList;