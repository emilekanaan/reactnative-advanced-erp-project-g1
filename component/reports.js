import styles from "../styles";
import {
  Text,
  View,
  Dimensions,
  TextInput,
  Button,
  Platform,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Reports({navigation}) {
  return (
    <View style={styles.HomeContainer}>
      <View style={styles.bottomContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('Employee Project')}> Employee project report</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('Kpi List')}> KPI list with current values</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('Graph')}>Graph</Text>
        </View>
      </View>
    </View>
  );
}
