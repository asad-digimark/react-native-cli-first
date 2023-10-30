import { useState } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default (): JSX.Element => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        onPress={() => setCount(prev => prev - 1)}
        underlayColor="#ccc">
        <Text style={styles.btnText}>-</Text>
      </TouchableHighlight>
      <Text style={styles.btnText}>{count}</Text>
      <TouchableHighlight
        underlayColor="#ccc"
        style={styles.button}
        onPress={() => setCount(prev => prev + 1)}>
        <Text style={styles.btnText}>+</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: 'red',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 10,
    borderWidth: 1,
  },
  button: {
    width: 50,
    height: 50,
    fontSize: 30,
    borderRadius: 25,
    padding: 4,
    backgroundColor: 'pink',
  },
  btnText: {
    fontSize: 30,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
