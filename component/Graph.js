import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "react-native-chart-kit";
import styles from "../styles";
import {
  Text,
  View,
  Dimensions,
  TextInput,
  Button,
  Platform,
} from "react-native";
export default function Graph() {
  return (
    <View style={styles.HomeContainer}>
   <Text style={styles.textKpi}>Develop and practice coaching skills</Text>
   <View style={styles.charts}>
      <LineChart
        data={{
          labels: ["emp1", "emp2", "emp3", "emp4", "emp5", "emp5"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width-20} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: "#4dedf570",
          backgroundGradientFrom: "#4dedf570",
          backgroundGradientTo: "#4dedf570",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      </View>
      <Text style={styles.textKpi}>Complete an advanced technical course to upgrade skills</Text>
      <View style={styles.charts}>
      <LineChart
        data={{
          labels: ["emp1", "emp2", "emp3", "emp4", "emp5", "emp5"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width-20} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      </View>
    </View>
  );
}
