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
  const [openAiAnalysisData, setOpenAiAnalysisData] = useState<String | null>(null)
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
      openAIAnalysis();
    } catch (error) {
      console.log(error);
    }
  }

  async function openAIAnalysis () {
    try {
      const apiUrl = `http://10.0.2.2:3000/api/openai`;
      console.log(apiUrl)
  
      const data = {
        'emotionAverages': emotionAverages,
        'maxEmotions': maxEmotions
      }
      console.log(data)

      if (isEmptyObject(emotionAverages) || isEmptyObject(maxEmotions)) {
        console.log('Emotion data is empty. Skipping API call.');
        return;
      }

      const response = await axios.post(apiUrl, data, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          }  
        });
        setOpenAiAnalysisData(response.data);
    } catch (error) {
      console.log('AI',error);
    }
  }

  function isEmptyObject(obj:any) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

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
            <View>
              <Text style={styles.chartTitle}>Overall Analysis</Text>
              <View style = {styles.analysisContainer}>
                <View style={styles.emptyAnalysisContainer}>
                  {openAiAnalysisData ? (
                    <Text style={styles.openAiAnalysis}>{openAiAnalysisData}</Text>
                  ) : (
                    <Text style={styles.emptyAnalysis}>No Analysis Ready</Text>
                  )}
                </View>
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