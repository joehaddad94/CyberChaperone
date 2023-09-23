import { addDays, eachDayOfInterval, eachWeekOfInterval, subDays } from 'date-fns';
import { useState }from 'react';
import globalStyles from '../styles';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native'
import PagerView from 'react-native-pager-view';
import { format } from 'date-fns';
import { Animated } from 'react-native';

let isSelected;

interface SwipeCalendarProps {
  selectedDate?: Date | null;
  setSelectedDate?: any;
}

const dates = eachWeekOfInterval(
    {
        start: subDays(new Date(), 14),
        end: addDays(new Date(), 14),
    },
    {
        weekStartsOn: 1,
    }
).map((cur) => {
    const allDays = eachDayOfInterval({
        start: cur,
        end: addDays(cur, 6)
    });

    return allDays;
});

const SwipeCalendar: React.FC<SwipeCalendarProps> = ({selectedDate, setSelectedDate}) => {

    return (
        <PagerView style={[styles.container,globalStyles.primaryColor]}>
          {dates.map((week, i) => {
            const monthName = format(week[0], 'MMMM yyyy');
    
            return (
              <View key={i}>
                <Text style={styles.monthName}>{monthName}</Text>
                <View style={styles.row}>
                  {week.map((day, j) => {
                    const dayInitial = format(day, 'EEEEE');
                    const dayDate = day.getDate();
                    const dayText = dayDate < 10 ? `0${dayDate}` : `${dayDate}`;
    
                    const isSelected =
                      selectedDate && day.toDateString() === selectedDate.toDateString();
    
                    return (
                      <TouchableOpacity
                        key={j}
                        style={[
                          styles.day,
                          isSelected ? styles.selectedDay : null,
                        ]}
                        onPress={() => setSelectedDate(isSelected ? null : day)}
                      >
                        <Text style={[
                          styles.colorWhite,
                          isSelected ? styles.selectedText : null]}>
                          {dayInitial}
                          </Text>
                        <Text style={[
                          styles.colorWhite,
                          isSelected ? styles.selectedText : null]}>
                          {dayText}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </PagerView>
      );
    };

export default SwipeCalendar;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    day: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    selectedDay: {
        borderColor: '#00B69B',
        backgroundColor: '#00B69B',
    },
    selectedText: {
        color: 'white',
  },
    monthName: {
        textAlign: 'center',
        fontSize: 18, 
        fontWeight: 'bold',
        marginVertical: 10,
        color: 'white'
      },
      colorWhite: {
        color: 'white'
      }

})