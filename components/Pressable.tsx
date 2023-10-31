import { View, Text, Pressable, StyleSheet } from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.btn}
        onPress={() => console.warn('pressed')}
        onLongPress={() => console.warn('long pressed')}
        onPressIn={() => console.warn('press in')}
        onPressOut={() => console.warn('press out')}>
        <Text style={styles.btnText}>Pressable</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#444',
    padding: 16,
    borderRadius: 12,
  },
  btnText: {
    color: 'white',
    fontSize: 24,
  },
});
