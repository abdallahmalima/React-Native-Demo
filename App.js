
import { StyleSheet, View } from 'react-native';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import { useState,useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

export default function App() {
  const [books,setBooks]=useState([]);

  const formatedBooks = (response) => Object.entries(response.data).map((arr) => {
    const [id, [{ title, author }]] = arr;
    return { id, title, author };
  });

  const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/Zrcj4JcfSXPrxnZ25MX7/books`);
        setBooks(formatedBooks(response));
      } catch (error) {
        console.error(error);
      }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/Zrcj4JcfSXPrxnZ25MX7/books/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteBook=(id)=>{
    deleteBook(id)
    fetchData();
  }
  return (
    <View style={styles.container}>
      <BookList 
        handleDeleteBook={handleDeleteBook}
        books={books}
        />
      <BookForm 
       BASE_URL={BASE_URL}
       fetchData={fetchData}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical:19
  },
});
