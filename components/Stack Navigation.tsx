import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, DetailsScreen } from './Navigation';

const Stack = createNativeStackNavigator();

export default (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home Screen Title',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 30,
            },
          }}
          initialParams={{ screen: 'This is first time loading' }}
        />
        <Stack.Screen name="Details">
          {props => <DetailsScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
