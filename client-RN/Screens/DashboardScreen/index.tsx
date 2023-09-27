import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
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

const emptyStateImg = require('../../assets/images/empty-data.png')

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

      const analysisObject = {
        userId: selectedUser.id,
        timestamp: selectedDate.toISOString(),
      };
  
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

      setEmotionAverages(response.data.averageEmotions);
      const MaxEmotionsData = response.data
      setMaxEmotions(MaxEmotionsData.maxEmotions);
    } catch (error) {
      console.log(error);
    }
  }

  const emptyStateView = (
    <View style={globalStyles.container}>
      <Image
        source={emptyStateImg}
      />
    </View>
  );

  return (
    <View style={[globalStyles.backgroundImage, globalStyles.primaryColor]}>
      <Header headerTitle={"Dashboard"} backgroundColor="#00B69B" />
      <View style = {styles.dropdownList}>
        <DropdownList
          data={users.map((user) => ({ key: user.id.toString(), value: user.username }))}
          selectedValue={selectedUser ? selectedUser.username : null}
          setSelectedValue={(value: string | null) => {
            const selected = users.find((u) => u.username === value) || null;
            setSelectedUser(selected);
          }}
        />
      </View>
      <SwipeCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      {emotionAverages || maxEmotions ? (
        <ScrollView>
          <View style={styles.pieChartContainerWrapper}>
            <Text style={styles.chartTitle}>Average Emotion Distribution</Text>
            <View style={styles.pieChartContainer}>
              <PieChartComponent emotionAverages={emotionAverages} />
            </View>
          </View>
          <View style={styles.barChartContainerWrapper}>
            <Text style={styles.chartTitle}>Maximum Emotion Percentages</Text>
            <View style={styles.barChartContainer}>
              <View style={styles.barChartSmallContainer}>
                <BarChartComponent maxEmotions={maxEmotions} />
              </View>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View style={[globalStyles.container, styles.emptyStateImgContainer]}>
          <Image
            source={emptyStateImg}
            resizeMode='cover'
            style={styles.emptyStateImg}
          />
        </View>
      )}
    </View>
  );
  
}