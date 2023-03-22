import { DataTable } from 'react-native-paper';
import styles from '../styles';
import { Text, View, Dimensions, TextInput, Button, Platform } from "react-native";

export default function KpiList() {

    return(
        <View style={styles.HomeContainer}>
           <View style={styles.DataGrid}>
        <DataTable style={styles.dataTable}>
        <DataTable.Header>
          <DataTable.Title>Employee</DataTable.Title>
          <DataTable.Title >
            kpi
          </DataTable.Title>
          <DataTable.Title >Evaluation</DataTable.Title>
        </DataTable.Header>
    
        <DataTable.Row >
          <DataTable.Cell style={styles.rowData}>Employee 2</DataTable.Cell>
          <DataTable.Cell numeric>team work</DataTable.Cell>
          <DataTable.Cell numeric>1</DataTable.Cell>
        </DataTable.Row>
    
        <DataTable.Row >
          <DataTable.Cell style={styles.rowData}>Employee 2</DataTable.Cell>
          <DataTable.Cell numeric>team work</DataTable.Cell>
          <DataTable.Cell numeric>5</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row >
          <DataTable.Cell style={styles.rowData}>Employee 1</DataTable.Cell>
          <DataTable.Cell numeric>team work</DataTable.Cell>
          <DataTable.Cell numeric>10</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row >
          <DataTable.Cell style={styles.rowData}>Employee 5</DataTable.Cell>
          <DataTable.Cell numeric>team work</DataTable.Cell>
          <DataTable.Cell numeric>6</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row >
          <DataTable.Cell style={styles.rowData}>Employee 2</DataTable.Cell>
          <DataTable.Cell numeric>team work</DataTable.Cell>
          <DataTable.Cell numeric>4</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row >
          <DataTable.Cell style={styles.rowData}>Employee 3</DataTable.Cell>
          <DataTable.Cell numeric>team work</DataTable.Cell>
          <DataTable.Cell numeric>9</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row >
          <DataTable.Cell style={styles.rowData}>Employee 4</DataTable.Cell>
          <DataTable.Cell numeric>team work</DataTable.Cell>
          <DataTable.Cell numeric>8</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row >
          <DataTable.Cell style={styles.rowData}>Employee 5</DataTable.Cell>
          <DataTable.Cell numeric>team work</DataTable.Cell>
          <DataTable.Cell numeric>1</DataTable.Cell>
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
