import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "#4dedf5",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#16202a",
    letterSpacing: 0.5,
  },
  bottomContainer: {
    justifyContent: "center",
    height: height / 3,
  },
  textInput: {
    backgroundColor: "#4dedf570",
    height: 50,
    borderWidth: 1,
    borderColor: "#4dedf570",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    paddingLeft: 10,
    color: "white",
  },
  HomeContainer: {
    backgroundColor: "#16202a",
    flex: 1,
    justifyContent: "center",
  },
  form: {
    backgroundColor: "#4dedf570",
    height: 55,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  dropdownText:{
        color: "#4dedf570 ", 
        textAlign:"center"  
     
  },
  dropdown1BtnStyle:{
    backgroundColor: "#4dedf570",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
width: "88%",

  },
  dropdown1BtnTxtStyle: {color: 'white', textAlign: 'left'},
  dropdown1DropdownStyle: {backgroundColor: '#16202a'},
  dropdown1RowStyle: {backgroundColor: '#16202a', borderBottomColor: '#C5C5C5',marginHorizontal:5},
  dropdown1RowTxtStyle: {color: 'white', textAlign: 'center'},
  textKpi:{
    textAlign: 'center',
    color: 'white',
    fontSize:25
  }
  
});
export default styles;
