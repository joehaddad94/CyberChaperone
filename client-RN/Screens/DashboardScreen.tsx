import { ImageBackground, Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import {useState, useEffect} from 'react'
import Header from '../Components/Header'
import SwipeCalendar from '../Components/SwipeCalendar';
import DropdownList from '../Components/DropdownList'
import globalStyles from '../styles';
import PieChartComponent from '../Components/PieChartComponent';
import axios from 'axios';
import { BASE_URL } from '../react-native.config';
import { useAuth } from '../ContextFiles/AuthContext';

interface User {
  username: string;
  id: number;
}

export default function DashboardScreen() {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const [users, setUsers] = useState<User[]>([])
    const user = useAuth();

    useEffect(() => {
      fetchAllUsers();
    }, []);

    async function fetchAllUsers() {
      try {
          const authToken = user.user.token;
          const apiUrl = `${BASE_URL}/api/fetch_all_users`;

          const response = await axios.get(apiUrl, {
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json; charset=utf-8',
                  'Authorization': `Bearer ${authToken}`
              }
          });
          console.log(response.data)
          setUsers(response.data.users);
      } catch (error) {
          console.log(error);
      }
  }

    return(
        <ScrollView style={[globalStyles.backgroundImage,globalStyles.primaryColor]}>
            <Header 
                headerTitle={"Dashboard"}
                backgroundColor= '#00B69B'
            /> 
            <DropdownList
              data={users.map(user => ({ key: user.id.toString(), value: user.username }))}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
            <SwipeCalendar/>
            
            <View style={styles.chartContainerWrapper}>
        <View style={styles.chartContainer}>
          <PieChartComponent />
        </View>
      </View>
            
        </ScrollView>
        
        
    )
}

const styles = StyleSheet.create({
    chartContainerWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    chartContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
      width:350,
      borderRadius: 10,
      elevation: 5,
      borderWidth: 2,
    },
  })