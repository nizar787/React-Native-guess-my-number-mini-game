import { View,StyleSheet, Alert, FlatList,useWindowDimensions } from 'react-native';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton'; 
import { useState,useEffect } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import { Ionicons} from "@expo/vector-icons"
import GuessLogItems from '../components/game/GuessLogItems';


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }
  
let minBoundry = 1
let maxBoundry = 100


const GameScreen = ({userNumber,onGameOver}) => {
    const {width,height} =useWindowDimensions()
    const initialGuess = generateRandomBetween(1,100 , userNumber)
    const [currentGuess,setCurrentGuess] = useState(initialGuess)
    const [guessRounds,setGuessRounds] =useState([initialGuess])
    let content = (
        <>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Card>
                    <InstructionText style={styles.instructionText} >Higher or Lower</InstructionText>
                    <View style={styles.btnsContainer} >
                    <View style={styles.btnContainer} >
                    <PrimaryButton onPress={guessHandler.bind(this , "lower")}>
                    <Ionicons name='md-remove' size={24} color="white" />
                    </PrimaryButton>
                    </View>
                    <View  style={styles.btnContainer}>
                    <PrimaryButton onPress={guessHandler.bind(this , "greater")}>
                    <Ionicons name='md-add' size={24} color="white" />
                    </PrimaryButton>
                    </View>
                    </View>
                </Card>
        </>
    )
    if (width>500) {
        content = (<>
            {/* <InstructionText style={styles.instructionText} >Higher or Lower</InstructionText> */}
            <View style={styles.btnContainerWide}>
            <View style={styles.btnContainer} >
                    <PrimaryButton onPress={guessHandler.bind(this , "lower")}>
                    <Ionicons name='md-remove' size={24} color="white" />
                    </PrimaryButton>
                    </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View  style={styles.btnContainer}>
                    <PrimaryButton onPress={guessHandler.bind(this , "greater")}>
                    <Ionicons name='md-add' size={24} color="white" />
                    </PrimaryButton>
                    </View>
            </View>

        </>)

    }
    useEffect(()=>{
    if (currentGuess === userNumber) {
        onGameOver(guessRounds.length)
    }
    },[currentGuess,userNumber,onGameOver])

    useEffect(()=>{
    minBoundry=1
    maxBoundry=100
        },[])

    function guessHandler (direction){
    // direction lower or higher
    if ((direction === "lower" && currentGuess< userNumber) || (direction === "greater" && currentGuess> userNumber)) {
        Alert.alert("Dont lie" ,"you know this is wrong" , [{text :"Sorry!",style : "cancel"}])
        return
    }
    if (direction === "lower") {
        maxBoundry = currentGuess
    } else {
        minBoundry = currentGuess + 1
    }
    console.log(minBoundry,maxBoundry);
    const newRndNumber = generateRandomBetween(minBoundry,maxBoundry,currentGuess)
    setCurrentGuess(newRndNumber)
    setGuessRounds(prev => [newRndNumber,...prev])
    }
    const guessRoundListLength =guessRounds.length
    return (
        <View style={styles.screen} >
            <Title>Opponent's guess</Title>
            {content}
            <View style={styles.listContainer}>
                {/* {guessRounds.map((guessRound)=> <Text key={guessRound}>{guessRound}</Text>)} */}
                <FlatList 
                data={guessRounds} 
                renderItem={(itemData)=> <GuessLogItems roundNumber={guessRoundListLength -itemData.index} guess={itemData.item}/> }
                keyExtractor={(item)=>item}
                /> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex : 1,
        padding: 40,
        alignItems : "center"
    },
    instructionText :{
    marginBottom : 12
    },
    btnsContainer :{
    flexDirection :"row"
    },
    btnContainer :{
    flex: 1
    },
    listContainer :{
        flex :1 ,
        padding: 16,
    },
    btnContainerWide :{
        flexDirection :"row",
        alignItems : "center"
    }
})

export default GameScreen;
