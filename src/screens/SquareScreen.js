import React, { useReducer } from "react";
import { Text, StyleSheet, View, Image, Button, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const color_increment = 20;

const reducer = (state, action) => {
    
}
const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

    return (
        <View>
            <ColorCounter onIncrease={() => } onDecrease={() =>  } color="Red"/>
            <ColorCounter onIncrease={() => } onDecrease={() =>  } color="Blue"/>
            <ColorCounter onIncrease={() => } onDecrease={() =>  } color="Green"/>
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}/>
        </View>
    )
};

const styles = StyleSheet.create({
});

export default SquareScreen;