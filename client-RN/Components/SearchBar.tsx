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
    // <PaperProvider theme={theme}>
    //   <View style={styles.container}>
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
          loading={true}
        //   style={styles.searchBar}
        />
    //   </View>
    // </PaperProvider>
  );
};

const styles = StyleSheet.create({
    container: {
       
    },
    searchBar: {
        // flex:1,
        justifyContent: 'center',
      alignItems: 'center', 
      width: '80%',
    //   backgroundColor: '#00BFA4'
    },
  });

export default SearchBar;
