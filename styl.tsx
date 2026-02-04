import { StyleSheet } from "react-native";


const styl = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchInput:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10,
    gap:7,
  },
  dispscr:{
    flex:9,
  },
  header: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    width: "48%",
    marginBottom: 20,
  },
  poster: {
    width: "100%",
    height: 250,
    borderRadius: 14,
    backgroundColor:'#312f2feb',
    padding:3,
  },
  title: {
    color: "white",
    marginTop: 6,
    fontWeight: "600",
  },
  rating: {
    color: "#FACC15",
  },
  center: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styl