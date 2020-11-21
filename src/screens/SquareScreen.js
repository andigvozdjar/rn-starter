import React, { useReducer } from "react";
import { StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const color_increment = 40;

const reducer = (state, action) => {
    switch(action.type) {
        case 'change_red':
            return (state.red + action.payload > 255 || state.red + action.payload < 0) ? state : {...state, red: state.red + action.payload};
        case 'change_green':
            return (state.green + action.payload > 255 || state.green + action.payload < 0) ? state : {...state, green: state.green + action.payload};
        case 'change_blue':
            return (state.blue + action.payload > 255 || state.blue + action.payload < 0) ? state : {...state, blue: state.blue + action.payload};
    }
}
const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter onIncrease={() => dispatch({ type: 'change_red', payload: color_increment })} onDecrease={() => dispatch({ type: 'change_red', payload: -color_increment }) } color="Red"/>
            <ColorCounter onIncrease={() => dispatch({ type: 'change_blue', payload: color_increment })} onDecrease={() => dispatch({ type: 'change_blue', payload: -color_increment }) } color="Blue"/>
            <ColorCounter onIncrease={() => dispatch({ type: 'change_green', payload: color_increment })} onDecrease={() => dispatch({ type: 'change_green', payload: -color_increment }) } color="Green"/>
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}/>
        </View>
    )
};

const styles = StyleSheet.create({
});

export default SquareScreen;