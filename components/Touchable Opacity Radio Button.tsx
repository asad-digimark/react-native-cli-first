import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const items = ['JAVA', 'PHP', 'NODE', 'SQL'];

export default () => {
  const [selected, setSelected] = useState(-1);
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity
          style={styles.radioBtn}
          onPress={() => setSelected(index)}>
          <View style={styles.radio}>
            {selected === index && <View style={styles.innerCircle} />}
          </View>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#fdfdfd',
  },
  radioBtn: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  radio: {
    height: 30,
    width: 30,
    borderWidth: 2,
    borderColor: '#d34d2d',
    borderRadius: 15,
    padding: 4,
  },
  innerCircle: {
    flex: 1,
    backgroundColor: '#d34d2d',
    borderRadius: 12,
  },
  text: {
    fontSize: 30,
    color: '#d34d2d',
  },
});
