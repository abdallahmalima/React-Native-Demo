import { View } from 'react-native';
import Book from './Book';

export default function BookList({books,handleDeleteBook}) {
    return (
      <View>
      { books.map(book=>(
        <Book key={book.id} 
        book={book} 
        handleDeleteBook={handleDeleteBook}
        />
       ))}
      </View>
    );
  }