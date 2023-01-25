import React from 'react';
import { styles } from'./styles';
import { Text, View } from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}> Nome do Evento </Text>
      <Text style={styles.eventDate}> Data do Evento </Text>
    </View>
  );
}