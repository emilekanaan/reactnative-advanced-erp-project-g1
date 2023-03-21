import styles from "../styles";
import { Text, View, Dimensions, TextInput, Button, Platform } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { useState } from "react";

export default function Kpi() {


  const countries = ["Egypt", "Canada", "Australia", "Ireland"];
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };

 
  return (
    <View style={styles.HomeContainer}>
      <Text style={styles.textKpi}>Add Evaluation To Employee</Text>
      <View>
        <SelectDropdown
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          data={countries}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          defaultButtonText={'Select Kpi'}
        />
      </View>
      <View>
        <SelectDropdown
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          data={countries}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          defaultButtonText={'Select Employee'}

        />
      </View>
      <TextInput
        require
        placeholder="Evaluation"
        placeholderTextColor="white"
        style={styles.textInput}
      />
      <TextInput
        require
        placeholder="1999-02-02"
        placeholderTextColor="white"
        style={styles.textInput}
      />

    
    </View>
  );
}
