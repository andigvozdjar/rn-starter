import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = (prop) => {
    return (
        <View>
            <Image source={prop.imageSource}/>
            <Text>{prop.title}</Text>
            <Text>score - {prop.score}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ImageDetail;