import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = (prop) => {
    const [name, setName] = useState('');
    return (
        <View>
            <Text>Enter name</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue) }
            />
            <Text>{name}</Text>
            {name.length < 5 ? <Text>'aaa'</Text> : null}
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'white',
        borderWidth: 1
    }
});

export default TextScreen;