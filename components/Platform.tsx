import { Platform, Text, ScrollView } from 'react-native';

export default () => {
  return (
    <ScrollView>
      <Text>{JSON.stringify(Platform, undefined, 4)}</Text>
    </ScrollView>
  );
};
