import { StyleSheet, ImageBackground,SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Colors from './constants/colors';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {StatusBar} from "expo-status-bar"

export default function App() {
  const [userNumber ,setUserNumber] =useState()
  const [gameIsOver,setGameIsOver] = useState(true)
  const [guessRounds,setGuessRounds] =useState(0)

 const [fontsLoaded] = useFonts({
    "open-sans" : require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold" : require("./assets/fonts/OpenSans-Bold.ttf")
  })

  if (!fontsLoaded) {
    return <AppLoading  />
  }
  
  function startGameHandler (pickedNumber){
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  function gameOverHandler(numberOfRounds){
    setGameIsOver(true)
    setGuessRounds(numberOfRounds)
  }

  function startNewGameHandler(){
    // user number is not truthy go back to starting screen:
    setUserNumber(null)
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onConfirmNumber={startGameHandler} />
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen  userNumber={userNumber} roundsNumber={guessRounds} 
    onStartNewGame={startNewGameHandler} />
  }


  return (
    <>
    <StatusBar style='light'/>
    <LinearGradient colors={[Colors.primary800, Colors.primary600]} style={styles.AppContainer}>
      <ImageBackground 
      source={require("./assets/background.jpg")} 
      resizeMode="cover"
      style={styles.AppContainer}
      imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.AppContainer}>{screen}</SafeAreaView>
    </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
AppContainer :{
  flex: 1,
},
backgroundImage :{
  opacity: 0.35
}
});
