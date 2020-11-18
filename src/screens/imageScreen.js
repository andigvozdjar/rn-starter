import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetail from "../components/imageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Andi" score={2} imageSource={require('../../assets/yellowfin_tuna.png')}/>
            <ImageDetail title="Andiaa" score={2} imageSource={require('../../assets/yellowfin_tuna.png')} />
            <ImageDetail title="2222" score={2} imageSource={require('../../assets/yellowfin_tuna.png')} />
            {/* <ImageDetail /> */}
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;


        // <FlatList 
        //     keyExtractor={friend => friend.name}
        //     data={friends} 
        //     renderItem={({ item }) => {
        //         return (
        //             <Text style={styles.textStyle}>{ item.name } - Age { item.age }</Text>
        //         )
                
        //     }}
        // />