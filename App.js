import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,TextInput,Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  }
  return (
    <View style={styles.container}>
      <FlatList
  data={todos}
  renderItem={({ item }) => <Text>{item}</Text>}
  keyExtractor={(item, index) => index.toString()}
     />
      <TextInput
      placeholder='hellogit'
      value={newTodo}
      onChangeText={text => setNewTodo(text)}
    />
    <Button
      title="Add"
      onPress={addTodo}
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtContainer: {
  
    padding:19,
    backgroundColor:'blue',
    borderRadius:15,
    color:'#fff'
  },
});
