import { useState } from 'react';
import { ActivityIndicator, View, Button, StyleSheet } from 'react-native';

export default () => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="green" animating={show} />
      <Button
        title="Show Loader"
        onPress={() => {
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 2000);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
});
