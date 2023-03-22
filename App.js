import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./component/login";
import Home from "./component/home";
import Reports from "./component/reports";
import Kpi from "./component/Kpi";
import EmployeeProject from "./component/EmployeeProject";
import Graph from "./component/Graph";
import KpiList from "./component/KpiList";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="Kpi" component={Kpi} />
        <Stack.Screen name="Reports" component={Reports} />
        <Stack.Screen name="Graph" component={Graph} />
        <Stack.Screen name="Employee Project" component={EmployeeProject} />
        <Stack.Screen name="Kpi List" component={KpiList} />


     

       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
