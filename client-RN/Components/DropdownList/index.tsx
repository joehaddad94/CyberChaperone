import React from "react";
import { View } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import { styles } from "./styles";

interface DropdownListProps {
  data: { key: string; value: string }[];
  selectedValue: string | null;
  setSelectedValue: (value: string | null) => void
}

const DropdownList: React.FC<DropdownListProps> = ({
  data,
  selectedValue,
  setSelectedValue,
}) => {
  return (
    <View>
      <SelectList
        data={data}
        save="value"
        setSelected={(value: string | null) => setSelectedValue(value)}
        placeholder="Select User"
        boxStyles={styles.boxStyles}
        inputStyles={{}}
        dropdownStyles={styles.dropdownStyles}
        dropdownItemStyles={{}}
        dropdownTextStyles={{}}
      />
    </View>
  );
};

export default DropdownList;
