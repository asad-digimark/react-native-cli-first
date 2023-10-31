import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';

const colors = [
  'btnPrimary',
  'btnSecondary',
  'btnSuccess',
  'btnWarning',
  'btnError',
];

export default () => {
  return (
    <View style={styles.container}>
      {colors.map(btnStyle => (
        <TouchableHighlight
          onPress={() => {}}
          underlayColor="#fff"
          style={[styles.btn, styles[btnStyle]]}>
          <Text style={styles.btnText}>{btnStyle}</Text>
        </TouchableHighlight>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'gray',
    flex: 1,
    gap: 16,
  },
  btn: {
    backgroundColor: '#bbb',
    padding: 10,
    borderRadius: 10,
    elevation: 10,
    shadowColor: 'black',
    shadowOpacity: 1,
  },
  btnText: {
    fontSize: 24,
    textAlign: 'center',
  },
  btnPrimary: {
    backgroundColor: 'blue',
  },
  btnSecondary: {
    backgroundColor: '#ccc',
  },
  btnSuccess: {
    backgroundColor: 'green',
  },
  btnWarning: {
    backgroundColor: 'gold',
  },
  btnError: {
    backgroundColor: 'red',
  },
});
