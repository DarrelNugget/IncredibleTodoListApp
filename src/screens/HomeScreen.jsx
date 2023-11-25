import React from 'react';
import { View, Button, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <View>
        <Text>Your To-Do List and Form Components Here</Text>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </MainLayout>
  );
};

export default HomeScreen;