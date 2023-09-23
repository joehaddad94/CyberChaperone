import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import axios from 'axios';
import Header from '../Components/Header';
import DropdownList from '../Components/DropdownList';
import globalStyles from '../styles';
import PieChartComponent from '../Components/PieChartComponent';
import { BASE_URL } from '../react-native.config';
import { useAuth } from '../ContextFiles/AuthContext';
import SwipeCalendar from '../Components/SwipeCalendar';
import { addDays, subDays } from 'date-fns';
import { useFocusEffect } from '@react-navigation/native';

interface User {
  username: string;
  id: number;
}

export default function DashboardScreen() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [users, setUsers] = useState<User[]>([]);
  const user = useAuth();
  

  useEffect(() => {
    console.log("entered")
    fetchAllUsers();
  },[]);

  useEffect(() => {
    const authToken = user.user.token;
    if (selectedUser && selectedDate) {
      const isInitialDate = selectedDate.toDateString() === new Date().toDateString();
      const adjustedDate = isInitialDate ? selectedDate : addDays(selectedDate, 1);
      console.log('Selected User ID:', selectedUser.id);
      console.log('Selected User Username:', selectedUser.username);
      console.log('Selected Date:', adjustedDate);
      console.log(authToken)
    }
  }, [selectedUser, selectedDate]);

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

      setUsers(response.data.users);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView style={[globalStyles.backgroundImage, globalStyles.primaryColor]}>
      <Header headerTitle={"Dashboard"} backgroundColor="#00B69B" />
      <DropdownList
        data={users.map(user => ({ key: user.id.toString(), value: user.username }))}
        selectedValue={selectedUser ? selectedUser.username : null}
        setSelectedValue={(value: string | null) => {
          const selected = users.find((u) => u.username === value) || null;
          setSelectedUser(selected);
        }}
      />
      <SwipeCalendar 
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        />
      <View style={styles.chartContainerWrapper}>
        <View style={styles.chartContainer}>
          <PieChartComponent />
        </View>
      </View>
    </ScrollView>
  );
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
    width: 350,
    borderRadius: 10,
    elevation: 5,
    borderWidth: 2,
  },
});
