import { View,Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

export default function GuessLogItems({guess,roundNumber}) {
  return (
    <View style={styles.listItems} >
    <Text style={styles.itemText}>#{roundNumber}</Text>
    <Text style={styles.itemText}>oponent's guess:{guess} </Text>
    </View>
  )
}
const styles =StyleSheet.create({
    listItems:{
        borderColor :Colors.primary800,
        borderWidth : 1,
        borderRedius : 40 ,
        padding: 12,
        marginVertical : 10,
        backgroundColor : Colors.accent500,
        flexDirection :"row",
        justifyContent :"space-between",
        width: "100%",
        elevation :4,
        borderRadius : 8
    },
    itemText :{
        fontFamily : "open-sans"
    }
})