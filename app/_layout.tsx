import { StyleSheet, View } from 'react-native';
import 'react-native-reanimated';

import ControlCenter from '@/components/control.center';

import { StatusBar } from 'expo-status-bar';


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