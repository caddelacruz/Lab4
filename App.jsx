/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native';
 
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';


function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  // Part 1: 2.create a function named addTask that will handle adding new tasks to the list and Part 3. 1. implement the addTask function to update the state of tasks
  const addTask = (taskText) => {
    if (!taskText.trim()) return;

    if (tasks.includes(taskText)) {
      Alert.alert('${taskText} already exists!');
    }else{
      setTasks([...tasks, taskText]);
      
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ToDoList tasks={tasks} /> {/* Pass tasks as props */}
        <ToDoForm addTask={addTask} /> {/* Part1 : 3.Pass the addTask function as a prop to the ToDoForm component */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
});

export default App;
