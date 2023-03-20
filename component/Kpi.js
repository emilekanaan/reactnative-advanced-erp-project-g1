import styles from "../styles";
import { Text, View, Dimensions, TextInput } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useState } from "react";
import DateField from 'react-native-datefield';

export default function Kpi() {
  const { height, width } = Dimensions.get("window");
  const [selected, setSelected] = useState("");
  const data = [
    { key: "1", value: "Mobiles" },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers" },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

  return (
    <View style={styles.HomeContainer}>
      <View >
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
         
          save="value"
          inputStyles={styles.dropdownText}
          boxStyles={styles.form}
        />
      </View>
      <View >
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
         
          save="value"
          inputStyles={styles.dropdownText}
          boxStyles={styles.form}
        />
      </View>
      <TextInput
          require
          placeholder="Email"
          placeholderTextColor="white"
          style={styles.textInput}
        
        
        />
          <TextInput
          require
          placeholder="Date"
          placeholderTextColor="white"
          style={styles.textInput}
        
        
        />
     


    </View>
  );
}
