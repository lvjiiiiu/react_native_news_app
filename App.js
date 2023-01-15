import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}/>
        <View style={styles.rightContainer}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    backgroundColor: 'red',
     width: 100,
  },
  rightContainer: {
    backgroundColor: 'blue',
    flex: 1,
  }
});
