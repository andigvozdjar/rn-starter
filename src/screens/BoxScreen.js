import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const BoxScreen = (prop) => {
    return (
        <View style={styles.vievStyle}>
            <Text style={styles.textOneStyle}>Child 1</Text>
            <Text style={styles.textTwoStyle}>Child 2</Text>
            <Text style={styles.textThreeStyle}>Child 3</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    vievStyle: {
        borderWidth: 3,
        borderColor: 'green',
        height: 300,
        borderRadius: 10
        // justifyContent: "space-around",
        // flexDirection: "row",
        // height: 200,
        // alignItems: "flex-end"
        
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // padding: 6,
        margin: 10,
        flex: 2,
        // alignSelf:  ovo overridea align items of parenta
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'yellow',
        // padding: 10,
        margin: 10,
        flex: 2,
        position: 'absolute',
        // fontSize: 20,
        ...StyleSheet.absoluteFillObject
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // padding: 10,
        margin: 10,
        flex: 4
    }
});

export default BoxScreen;