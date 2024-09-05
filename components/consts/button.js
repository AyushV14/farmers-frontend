import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const COLORS = {
    white: '#FFF',
    dark: '#000',
    primary: '#4CAF50', // Changed to a shade of green
    secondary: '#C8E6C9', // Changed to a light green shade
    light: '#E5E5E5',
    grey: '#908e8c',
  };


const PrimaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const SecondaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{...style.btnContainer, backgroundColor: COLORS.white}}>
        <Text style={{...style.title, color: COLORS.primary}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  title: {color: '#FFF', fontWeight: 'bold', fontSize: 18},
  btnContainer: {
    backgroundColor: '#4CAF50',
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {PrimaryButton, SecondaryButton};