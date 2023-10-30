import { View, Text, FlatList, StyleSheet } from 'react-native';

const data = ['cpp', 'java', 'python', 'orange'];

export default (): JSX.Element => {
  return (
    <View>
      <Text
        style={{
          fontSize: 28,
        }}>
        FlatList
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <ListItem item={item} />;
        }}
        keyExtractor={item => item}
        style={styles.listContainer}
      />
    </View>
  );
};

const ListItem = ({ item }) => {
  return <Text style={styles.itemText}>{item} </Text>;
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'grey',
  },
  itemText: {
    fontSize: 18,
    color: 'white',
    textTransform: 'capitalize',
    borderBottomWidth: 1,
    padding: 8,
  },
});
