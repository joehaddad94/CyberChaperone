import {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#00BFA4', // Customize the primary color
    },
  };
//   const onChangeSearch = query => setSearchQuery(query);

return (
    
        <Searchbar theme={{
            colors: {
                // primary:'#00BFA4',
                // elevation:'#00BFA4'
                outline: '#00BFA4'
            }
        }}
          placeholder="Search"
          value={searchQuery}
          mode='view'
          loading={false}
          style={styles.searchBar}
        />
  );
};

const styles = StyleSheet.create({
    container: {
       
    },
    searchBar: {
      justifyContent: 'center',
      alignItems: 'center', 
      width: '90%',
      height: 50,

    },
  });

export default SearchBar;
