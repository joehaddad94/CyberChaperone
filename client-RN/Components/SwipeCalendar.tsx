import { addDays, eachDayOfInterval, eachWeekOfInterval, subDays } from 'date-fns';
import { useState }from 'react';
import globalStyles from '../styles';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native'
import PagerView from 'react-native-pager-view';
import { format } from 'date-fns';
import { Animated } from 'react-native';



let isSelected;

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

const SwipeCalendar: React.FC = () => {

    const [selectedDate, setSelectedDate] = useState<Date | null>(null); 

    return (
        <PagerView style={styles.container}>
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
                        <Text style={isSelected ? styles.selectedText : null}>
                          {dayInitial}
                        </Text>
                        <Text style={isSelected ? styles.selectedText : null}>
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
// return (
//     <PagerView style={styles.container}>
//       {dates.map((week, i) => {
//         const monthName = format(week[0], 'MMMM yyyy');

//         return (
//           <View key={i}>
//             <Text style={styles.monthName}>{monthName}</Text>
//             <View style={styles.row}>
//               {week.map((day, j) => {
//                 const dayInitial = format(day, 'EEEEE');
//                 const dayDate = day.getDate();
//                 const dayText = dayDate < 10 ? `0${dayDate}` : `${dayDate}`;

//                 const isSelected =
//                   selectedDate && day.toDateString() === selectedDate.toDateString();

//                 // Create an Animated.Value for color interpolation
//                 const colorValue = new Animated.Value(isSelected ? 1 : 0);

//                 // Define initial and selected colors
//                 const initialColor = '#FFFFFF'; // Change to your initial color
//                 const selectedColor = '#00B69B'; // Change to your selected color

//                 // Interpolate between initial and selected colors
//                 const interpolatedColor = colorValue.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [initialColor, selectedColor],
//                 });

//                 return (
//                   <TouchableOpacity
//                     key={j}
//                     onPress={() => {
//                       setSelectedDate(isSelected ? null : day);
//                       // Animate the color transition
//                       Animated.timing(colorValue, {
//                         toValue: isSelected ? 0 : 1,
//                         duration: 200, // Adjust the duration as needed
//                         useNativeDriver: false,
//                       }).start();
//                     }}
//                   >
//                     <Animated.View
//                       style={[
//                         styles.day,
//                         isSelected ? styles.selectedDay : null,
//                         { backgroundColor: interpolatedColor }, // Apply the interpolated color
//                       ]}
//                     >
//                       <Text style={isSelected ? styles.selectedText : null}>
//                         {dayInitial}
//                       </Text>
//                       <Text style={isSelected ? styles.selectedText : null}>
//                         {dayText}
//                       </Text>
//                     </Animated.View>
//                   </TouchableOpacity>
//                 );
//               })}
//             </View>
//           </View>
//         );
//       })}
//     </PagerView>
//   );
// };

export default SwipeCalendar;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    day: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
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
      },

})