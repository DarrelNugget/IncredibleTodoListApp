import React from 'react';
import { View, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  return (
    <MainLayout>
      <View>
        <Text>About Screen: App Name, Your Name, Current Date</Text>
      </View>
    </MainLayout>
  );
};

export default AboutScreen;