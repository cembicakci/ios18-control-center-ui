import { StyleSheet, View } from 'react-native';

import ControlCenter from '@/components/control.center';
import ListElement from '@/components/list.element';
import mockData from '@/constants/mock.data';

import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <ListElement data={mockData} /> */}
      <ControlCenter />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdbdbd',
    justifyContent: 'center'
  }
})