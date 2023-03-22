
import { DataTable } from 'react-native-paper';
import styles from '../styles';
import { Text, View, Dimensions, TextInput, Button, Platform } from "react-native";

export default function EmployeeProject() {

    return(
        <View style={styles.HomeContainer}>
          <View style={styles.DataGrid}>
        <DataTable style={styles.dataTable}>
        <DataTable.Header>
          <DataTable.Title>Employee</DataTable.Title>
          <DataTable.Title>
            Project
          </DataTable.Title>
          <DataTable.Title >Role</DataTable.Title>
        </DataTable.Header>
    
        <DataTable.Row>
          <DataTable.Cell>Employee 1</DataTable.Cell>
          <DataTable.Cell numeric>Project 1</DataTable.Cell>
          <DataTable.Cell numeric>Backend</DataTable.Cell>
        </DataTable.Row>
    
        <DataTable.Row >
          <DataTable.Cell style={styles.rowData}>Employee 2</DataTable.Cell>
          <DataTable.Cell numeric>Project 2</DataTable.Cell>
          <DataTable.Cell numeric>FrontEnd</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Employee 3</DataTable.Cell>
          <DataTable.Cell numeric>Project 3</DataTable.Cell>
          <DataTable.Cell numeric>Designer</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Employee 4</DataTable.Cell>
          <DataTable.Cell numeric>Project 4</DataTable.Cell>
          <DataTable.Cell numeric>FrontEnd</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Employee 5</DataTable.Cell>
          <DataTable.Cell numeric>Project 5</DataTable.Cell>
          <DataTable.Cell numeric>Backend</DataTable.Cell>
        </DataTable.Row>
    
        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={(page) => {
            console.log(page);
          }}
          label="1-2 of 6"
        />
      </DataTable>
      </View>
      </View>
    );
}
