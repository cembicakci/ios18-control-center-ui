import { StyleSheet, View } from 'react-native';

import ListElement from '@/components/list.element';
import mockData from '@/constants/mock.data';

import 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ListElement data={mockData} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center'
  }
})