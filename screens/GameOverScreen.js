import { Image, StyleSheet, Text, View , ScrollView ,useWindowDimensions } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title"
import Colors from "../constants/colors";


export default function GameOverScreen({roundsNumber,userNumber,onStartNewGame}) {
  const {width,height} =useWindowDimensions()
  let imageSize =300
  if (width<380) {
    imageSize = 150
  }
  if (height<400) {
    imageSize = 80
  }
  const imageStyle = {
    width : imageSize,
    height : imageSize,
    borderRadius : imageSize/ 2
  }
  return (
    <ScrollView style={styles.screen}>
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={[styles.imageContainer,imageStyle]} >
      <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <View>
        <Text style={styles.summaryText} >
        Your Phone needed 
        <Text style={styles.heighlight}> {roundsNumber} </Text> Number to guess Number 
        <Text style={styles.heighlight}> {userNumber} </Text>. 
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame} >Start New Game</PrimaryButton>
    </View>
    </ScrollView>
  )
}

// const deviceWidth =Dimensions.get("window").width
const styles = StyleSheet.create({
  screen :{
  flex :1
  }, 
  rootContainer :{
  flex: 1,
  padding: 24,
  justifyContent : "center",
  alignItems :"center"
  },
  imageContainer :{
    // width: deviceWidth <380 ? 150 : 300,
    // height: deviceWidth <380 ? 150 : 300,
    // borderRadius : deviceWidth <380 ? 75 : 150,
    borderWidth : 2,
    borderColor : Colors.primary500,
    margin : 36,
    overflow: "hidden",
  },
  image :{
    width: "100%",
    height: "100%",
  },
  summaryText :{
    fontFamily :"open-sans",
    fontSize :24,
    textAlign : "center",
    marginVertical :24
  },
  heighlight :{
    fontFamily :"open-sans-bold",
    color:  Colors.white
  }
})