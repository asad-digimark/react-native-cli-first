import { View, StatusBar } from 'react-native';

export default () => {
  return (
    <View>
      <StatusBar
        backgroundColor="red"
        hidden={false}
        barStyle="default" // default | light-content | dark-content
      />
    </View>
  );
};
