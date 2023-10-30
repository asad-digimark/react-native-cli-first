import { Text, View, Button, Modal, StyleSheet } from 'react-native';
import { useState } from 'react';

export default () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <Modal transparent visible={show} animationType="slide">
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Hello Code Step by Step</Text>
            <Button title="close modal" onPress={() => setShow(false)} />
          </View>
        </View>
      </Modal>
      <Button
        title="open modal"
        onPress={() => {
          setShow(true);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: 'flex-end',
    padding: 16,
  },
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    maxWidth: '80%',
    backgroundColor: '#fff',
    padding: 16,
    gap: 12,
    alignItems: 'center',
    elevation: 5,
    shadowColor: 'black',
    borderRadius: 8,
    shadowOpacity: 1,
  },
  modalText: {
    fontSize: 24,
  },
});
