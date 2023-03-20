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
  }
});
export default styles;
