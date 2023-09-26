import {useState} from 'react';
import { Searchbar, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { styles } from './styles';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#00BFA4',
    },
  };

return (
    
        <Searchbar theme={{
            colors: {
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

export default SearchBar;
