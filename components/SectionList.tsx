import { View, SectionList, Text, StyleSheet } from 'react-native';

const users = [
  {
    id: 1,
    name: 'a',
    data: ['one', 'two', 'three'],
  },
  {
    id: 2,
    name: 'b',
    data: ['one', 'two', 'three'],
  },
  {
    id: 3,
    name: 'c',
    data: ['one', 'two', 'three'],
  },
  {
    id: 4,
    name: 'd',
    data: ['one', 'two', 'three'],
  },
  {
    id: 1,
    name: 'a',
    data: ['one', 'two', 'three'],
  },
  {
    id: 2,
    name: 'b',
    data: ['one', 'two', 'three'],
  },
  {
    id: 3,
    name: 'c',
    data: ['one', 'two', 'three'],
  },
  {
    id: 4,
    name: 'd',
    data: ['one', 'two', 'three'],
  },
];

export default (): JSX.Element => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={users}
        renderItem={({ item }) => {
          return <Text style={styles.item}>{item}</Text>;
        }}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.name} </Text>
        )}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#333',
  },
  list: {},
  header: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  item: {
    marginLeft: 8,
    fontSize: 20,
    color: 'white',
    textTransform: 'capitalize',
  },
});
