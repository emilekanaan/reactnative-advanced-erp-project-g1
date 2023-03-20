import react from "react";
import styles from "../styles";
import { Text, View, Dimensions, TextInput } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({ navigation }) {
  const { height, width } = Dimensions.get("window");

  return (
    <View style={styles.HomeContainer}>
      <View style={styles.bottomContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}   onPress={() => navigation.navigate('Kpi')}>
          Evaluate employee KPIs
          </Text>
         
        </View>
        <View style={styles.button}>
        <Text style={styles.buttonText}  onPress={() => navigation.navigate('Reports')}>
          Generate Reports
          </Text>
          </View>
      </View>
    </View>
  );
}
