import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import Header from '../../Components/Header';
import DropdownList from '../../Components/DropdownList';
import globalStyles from '../../styles';
import PieChartComponent from '../../Components/PieChartComponent';
import { BASE_URL } from '../../react-native.config';
import { useAuth } from '../../ContextFiles/AuthContext';
import SwipeCalendar from '../../Components/SwipeCalendar';
import { styles } from './styles'
import { EmotionAverages, User } from '../../ParamTypes';
import BarChartComponent from '../../Components/BarChartComponent';

export default function DashboardScreen() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [emotionAverages, setEmotionAverages] = useState<EmotionAverages | null>(null);
  const [maxEmotions, setMaxEmotions] = useState<EmotionAverages | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const user = useAuth();

  useEffect(() => {
    fetchAllUsers();
  },[]);

  useEffect(() => {
    if (selectedUser && selectedDate) {
      console.log('Selected User ID:', selectedUser.id);
      console.log('Selected User Username:', selectedUser.username);
      console.log('Selected Date:', selectedDate);

      const analysisObject = {
        userId: selectedUser.id,
        timestamp: selectedDate.toISOString(),
      };
      console.log(analysisObject)
  
      fetchDataAnalysis(analysisObject);
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

  async function fetchDataAnalysis(data:any) {
    try {
      const authToken = user.user.token;
      const apiUrl = `${BASE_URL}/api/fetch_dashboard_analysis`;

      const response = await axios.post(apiUrl, data, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${authToken}`
        }
      });

      console.log (response.data.averageEmotions)
      setEmotionAverages(response.data.averageEmotions);
      console.log (response.data.maxEmotions)
      setMaxEmotions(response.data.maxEmotions);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={[globalStyles.backgroundImage, globalStyles.primaryColor]}>
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
      <ScrollView>
        <View style={styles.pieChartContainerWrapper}>
          <Text style={styles.chartTitle}>Average Emotion Distribution</Text>
          <View style={styles.pieChartContainer}>
            <PieChartComponent
              emotionAverages={emotionAverages}
            />
          </View>
        </View>
        <View style={styles.barChartContainerWrapper}>
          <Text style={styles.chartTitle}>Maximum Emotion Percentages</Text>
          <View style={styles.barChartContainer}>
            <View style = {styles.barChartSmallContainer}>
              <BarChartComponent
                maxEmotions={maxEmotions}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
