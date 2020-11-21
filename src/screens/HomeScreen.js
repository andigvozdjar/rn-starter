import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
            <Text style={styles.text}>Test</Text>
            <Button
              onPress={() => { navigation.navigate('Components') }} 
              title='Go to components demo'
            />
            <Button
              onPress={() => { navigation.navigate('List') }} 
              title='Go to list demo'
            />
            <Button
              onPress={() => { navigation.navigate('image') }} 
              title='Go to image'
            />
            <Button
              onPress={() => { navigation.navigate('counter') }} 
              title='Go to counter'
            />
            <Button
              onPress={() => { navigation.navigate('color') }} 
              title='Go to color'
            />
            <Button
              onPress={() => { navigation.navigate('square') }} 
              title='Go to square'
            />
            <Button
              onPress={() => { navigation.navigate('text') }} 
              title='Go to text '
            />
            <Button
              onPress={() => { navigation.navigate('box') }} 
              title='Go to box '
            />
        </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;