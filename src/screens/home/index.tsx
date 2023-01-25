import React from 'react';
import { styles } from'./styles';
import { Image, Text, View } from 'react-native';

import logo from '../../assets/logo.png';

export function Home() {
  return (
    <View style={styles.container}>
     <Image source={logo} />
    </View>
  );
}