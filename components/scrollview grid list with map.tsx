import { View, Text, StyleSheet, ScrollView } from 'react-native';

const data = [...Array(30).keys()];

export default (): JSX.Element => {
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 28,
        }}>
        Grid of List
      </Text>
      <View style={styles.listContainer}>
        {data.map((item, i) => (
          <ListItem key={i} item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

const ListItem = ({ item }) => {
  return <Text style={styles.itemText}>{item} </Text>;
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'grey',
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 8,
    borderWidth: 2,
    paddingBottom: 32,
  },
  itemText: {
    height: 100,
    width: 100,
    fontSize: 24,
    color: 'black',
    backgroundColor: 'yellow',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 1.5,
    borderRadius: 16,
  },
});
