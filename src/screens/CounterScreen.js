import React, { useState } from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";

const CounterScreen = (prop) => {
    const [counter, setCounter] = useState(0);
    // let counter = 0;
    return (
        <View>
            <Button title='Increase'onPress={() => {
                setCounter(counter + 1)
            }} />
            <Button title='Decrease'onPress={() => {
                setCounter(counter - 1)
            }} />
            <Text>Current Count: {counter}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default CounterScreen;