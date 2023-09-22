import React from "react";
import { View, StyleSheet } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';

interface SelectListProps {
    selectedValue: string | null;
    setSelectedValue: (value: string | null) => void;
}

const DropdownList: React.FC<SelectListProps> = ({
    selectedValue,
    setSelectedValue,
}) => {
  const data = [
    { key: '1', value: 'Mobiles', disabled: true },
    { key: '2', value: 'Appliances' },
    { key: '3', value: 'Cameras' },
    { key: '4', value: 'Computers', disabled: true },
    { key: '5', value: 'Vegetables' },
    { key: '6', value: 'Diary Products' },
    { key: '7', value: 'Drinks' },
  ];

  return (
    <View>
      <SelectList 
        data={data}
        save="value"
        setSelected={setSelectedValue}
        placeholder="Select User"
        boxStyles = {styles.boxStyles}
        inputStyles = {{}}
        dropdownStyles = {{}}
        dropdownItemStyles = {{}}
        dropdownTextStyles = {{}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    boxStyles: {
        backgroundColor: 'white',
        marginTop: 20,
    },
    dropdownStyles: {
        backgroundColor: 'white',
    }
});

export default DropdownList;
