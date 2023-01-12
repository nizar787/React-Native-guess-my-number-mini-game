import { View,Text, Pressable,StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({children,onPress})  {


    return (

        <View style={styles.btnOuterContainer} >
        <Pressable onPress={onPress} 
        android_ripple={{color : Colors.primary600}} 
        style={({pressed})=>
        pressed ? [styles.btnInnerContainer ,styles.pressed]
        : styles.btnInnerContainer}
        >
            <Text  style={styles.btnText}>{children}</Text>
        </Pressable>
        </View>

    );
}


const styles = StyleSheet.create({
btnOuterContainer :{
borderRadius :14,
margin: 4,
overflow: "hidden",
},
btnInnerContainer : {
    backgroundColor :Colors.primary500,
    paddingVertical : 8,
    paddingHorizontal :16,
    elevation : 2,
},
btnText :{
    color :"#fff",
    textAlign :"center",
},
pressed :{
    opacity: 0.75
}
});

export default PrimaryButton;
