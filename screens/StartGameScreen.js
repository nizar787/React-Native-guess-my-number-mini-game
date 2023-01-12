import { View ,TextInput, StyleSheet, Alert ,KeyboardAvoidingView,useWindowDimensions,ScrollView} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import {useState} from "react"
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen ({onConfirmNumber}) {
    const [entredNumber , setEntredNumber] =useState("")
    const {width,height} =useWindowDimensions()
    function numberIputHandler(entredText){
        setEntredNumber(entredText)
    }
    function resetInputHandler(){
        setEntredNumber("")
    }

    function confirmInputHandler(){
        const chosenNumber =parseInt(entredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            //show alert!!
            Alert.alert("Invalid Number", "Number must be between 1 and 99",
            [{text :"Okay", style : "destructive",onPress : resetInputHandler}]
            )
            return;
        }
        onConfirmNumber(chosenNumber)
    }


    const marginTopDistance = height < 380 ? 30 : 100
    return (
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer , {marginTop :marginTopDistance}]} >
        <Title>Guess My Number</Title>
        <Card >
            <InstructionText>Enter Number</InstructionText>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false}
            onChangeText={numberIputHandler}
            value={entredNumber}
            />
            <View style={styles.btnsContainer} >
            <View style={styles.btnContainer}>
            <PrimaryButton onPress={resetInputHandler} >Reset</PrimaryButton>
            </View>
            <View style={styles.btnContainer}>
            <PrimaryButton onPress={confirmInputHandler} >Confirm</PrimaryButton>
            </View>
            </View>
        </Card>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
    );
}
// dimention api exute only once moving code to component function use useWindowDimensions
// const deviceHeight = Dimensions.get("window").height
const styles =StyleSheet.create({
screen:{
        flex : 1
    },
rootContainer :{
    flex :1,
    // marginTop :deviceHeight < 380 ? 30 : 100,
    alignItems : "center"
    },
numberInput :{
    height: 50,
    width: 50,
    fontSize : 32,
    borderBottomColor : Colors.accent500,
    borderBottomWidth : 2,
    color: Colors.accent500,
    marginVertical : 8,
    fontWeight :"bold",
    textAlign : "center"
},
btnsContainer :{
    flexDirection :"row"
},
btnContainer :{
    flex: 1
}
})

export default StartGameScreen;
