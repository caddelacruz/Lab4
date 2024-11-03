// ToDoForm.jsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

// Part 1: 5. Destructure the addTask function passed from the App component
function ToDoForm({addTask}) {
    const [taskText, setTaskText] = React.useState(''); // Part 2: 1. inside the form's input field, use the useState hook to manage the local state of the input field

    const handleAddTask = () => {
        if (taskText.trim()) {
        addTask(taskText); 
        setTaskText(''); 
        }
    };
  return (
    <View style={styles.form}>
    {/* Part 2: 2. Implement the necessary props and event handling for the input field to update the taskText state as the user types */}
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      
      <Button title="Add Task" onPress={() => addTask(taskText)}/> {/*Part 2: 3.Inside the form's <Button> component, implement the onPress event to call the addTask function with the taskText as an argument */}
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'white', 
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2, 
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginRight: 5,
    borderRadius: 5, 
  },
  button: {
    width: 60,
    height: 30,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 0, 
  },
  buttonText: {
    color: 'white', 
    fontSize: 14, 
  },
});


export default ToDoForm;
