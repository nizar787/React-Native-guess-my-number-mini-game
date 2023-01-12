import { StyleSheet, Text, View,Platform } from "react-native"
import Colors from "../../constants/colors"


function Title({children}) {
  return (
    <View>
        <Text style={styles.title}>{children}</Text>
    </View>
  )
}
const styles = StyleSheet.create({

    title :{
        fontFamily : "open-sans-bold",
        fontSize : 24,
        textAlign :"center" ,
        color: Colors.white,
        borderColor : Colors.white,
        // borderWidth :Platform.OS === "android" ? 2 : 0,
        borderWidth :Platform.select({ios:0,android:2}),
        padding: 12,
        minWidth : "80%",
        width : 300
    }
})
export default Title