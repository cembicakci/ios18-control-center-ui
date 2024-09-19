import { StyleSheet, View } from 'react-native';

import ListElement from '@/components/list-element';
import mockData from '@/constants/mock.data';

import 'react-native-reanimated';

export default function RootLayout() {

  return (
    <View style={styles.container}>
      <ListElement data={mockData} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center'
  }
})