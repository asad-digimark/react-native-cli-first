import { View, Text, Button } from 'react-native';
export function HomeScreen(props) {
  const { params } = props.route;
  if (params) console.warn('We are again at ' + params?.screen + ' page');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Details"
        onPress={() => props.navigation.navigate('Details')}
      />
    </View>
  );
}

export function DetailsScreen(props) {
  const { params } = props.route;
  if (params) console.warn('We are again at ' + params?.screen + ' page');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          props.navigation.push('Details', {
            screen: 'details',
          })
        }
      />
      <Button
        title="Back"
        color="red"
        onPress={() => props.navigation.goBack()}
      />
      <Button
        title="Home"
        color="gray"
        onPress={() =>
          props.navigation.push('Home', {
            screen: 'home',
          })
        }
      />
      <Button
        title="Go to Home Top"
        color="green"
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  );
}
