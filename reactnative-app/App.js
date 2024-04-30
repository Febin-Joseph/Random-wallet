import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'rsubmodule'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi, just click on the button</Text>
      <Button />
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
});
