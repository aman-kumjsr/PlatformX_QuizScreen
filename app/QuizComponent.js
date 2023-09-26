import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Button,
  TextInput,
  Alert,
} from 'react-native';

import React, {useState} from 'react';

const image = {
  uri: 'https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg',
};

const QuizComponent = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.imageShadow}>
          <View style={styles.textContainer}>
            <Text
              style={[
                {
                  fontSize: 28,
                  fontWeight: '500',
                  top: 156,
                  lineHeight: 38,
                  textAlign: 'center',
                },
                styles.textContainer,
              ]}>
              7 Wonders
            </Text>
            <Text
              style={[
                {
                  fontSize: 16,
                  fontWeight: '400',
                  top: 243,
                  lineHeight: 26,
                  textAlign: 'center',
                },
                styles.textContainer,
              ]}>
              Which monument is the India's Seven wonder?
            </Text>
          </View>
          <View style={styles.options}>
            <View style={styles.optionItem}>
              <Text>Taj Mahal</Text>
            </View>
            <View style={styles.optionItem}>
              <Text>Qutub Minar</Text>
            </View>
            <View style={styles.optionItem}>
              <Text>Jantar mantar</Text>
            </View>
          </View>
        </View>

        {/* <Text style={styles.text}>Hello world</Text> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  imageShadow: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 20,
  },
  textContainer: {
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
  },
  options: {
    top: 392,
    border: 1,
  },
  optionItem: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    borderWidth: 2,
    borderColor: '#fff',
    marginVertical: 10,
  },
});

export default QuizComponent;
