import { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { Text } from 'react-native-paper';

export default () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleSubmit = async () => {
    try {
      const res = await fetch('http://10.0.2.2:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      });
      const data = await res.text();
      Alert.alert('Success = ', data);
    } catch (error) {
      Alert.alert('Error', error.toString());
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        gap: 12,
      }}>
      <Text style={styles.heading}>Add new user</Text>
      <TextInput
        onChangeText={v => setState(prev => ({ ...prev, name: v }))}
        inputMode="text"
        value={state.name}
        style={styles.input}
        placeholder="Name"
      />
      <TextInput
        onChangeText={v => setState(prev => ({ ...prev, email: v }))}
        inputMode="email"
        value={state.email}
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        onChangeText={v => setState(prev => ({ ...prev, password: v }))}
        inputMode="text"
        value={state.password}
        secureTextEntry
        style={styles.input}
        placeholder="Password"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontStyle: 'italic',
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#ccc',
    borderRadius: 10,
    padding: 8,
  },
});
