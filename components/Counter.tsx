import { useState } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default (): JSX.Element => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text style={styles.title}>Counter</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  title: {
    fontSize: 28,
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
