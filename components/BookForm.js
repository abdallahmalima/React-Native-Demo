import { useState } from 'react';
import { Text, View,Button,TextInput,StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';
import axios from 'axios';


export default function BookForm({fetchData,BASE_URL}) {
    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    const [category,setCategory]=useState('');

    const addBook = async (book) => {
        try {
          const response = await axios.post(`${BASE_URL}/Zrcj4JcfSXPrxnZ25MX7/books`, book);
          fetchData();

        } catch (error) {
          console.error(error);
        }
      };

    const resetForm=()=>{
        setTitle('')
        setAuthor('') 
        setCategory('')
    }

    const handleAddBook=()=>{
    addBook({item_id:uuid.v4(),title,author,category});
    resetForm();
    }
    
    return (
      <View>
        <Text>Add Todo</Text>
        <TextInput
      style={styles.textInput}
      value={title}
      onChangeText={text => setTitle(text)}/>
      <TextInput
      style={styles.textInput}
      value={author}
      onChangeText={text => setAuthor(text)}/>
      <TextInput
      style={styles.textInput}
      value={category}
      onChangeText={text => setCategory(text)}/>
      <Button
          title="Add"
          onPress={handleAddBook}
         />
      </View>
      
    );
  }

  const styles = StyleSheet.create({
    textInput: {
        height: 29,
        width: 195,
         borderColor: 'gray',
          borderWidth: 1,
         marginVertical:5, 
         borderRadius:5

    },
  });