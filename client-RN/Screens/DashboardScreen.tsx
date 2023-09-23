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

interface User {
  username: string;
  id: number;
}

export default function DashboardScreen() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const user = useAuth();

  useEffect(() => {
    fetchAllUsers();
  }, []);

  useEffect(() => {
    if (selectedUser) {
      console.log('Selected User ID:', selectedUser.id);
      console.log('Selected User Username:', selectedUser.username);
    }
  }, [selectedUser]);

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
      <SwipeCalendar/>
      <View style = {styles.chartContainerWrapper}>
        <View style = {styles.chartContainer}>
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
