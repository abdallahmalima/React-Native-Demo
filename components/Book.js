import {StyleSheet, Text, View,Button } from 'react-native';

export default function Book({book,handleDeleteBook}) {
    const {id,title,author,category}=book
    const deleteBook=(id)=>{
        handleDeleteBook(id);
    }
    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <Text>{author}</Text>
        <Text>{category}</Text>
        <Button
          title="Delete"
          onPress={() => deleteBook(id)} 
         />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      backgroundColor: '#eee',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:5,
      padding:19,
      borderRadius:19

    },
  });