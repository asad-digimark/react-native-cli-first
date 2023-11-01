import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native';
const height = Dimensions.get('window').height / 16;

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>
      <FormInput placeholder="Email" icon="user" keyboardType="email-address" />
      <FormInput placeholder="Password" icon="lock" secureTextEntry />
      <FormInput placeholder="Confirm Password" icon="lock" secureTextEntry />
      <FormButton title="Sign Up" backgroundColor="#2e64e5" color="#fff" />
      <Text style={{ textAlign: 'center' }}>
        By registering, you confirm that you accept our Terms of service and
        Privacy Policy
      </Text>
      <FormButton
        title="Sign In with Google"
        icon="google"
        backgroundColor="orange"
      />
      <FormButton
        title="Sign In with Facebook"
        icon="facebook"
        backgroundColor="skyblue"
      />
      <FormButton title="Have an account? Sign In" color="#2e64e5" />
    </View>
  );
};

const FormInput = ({ icon = '', ...rest }) => {
  return (
    <View style={styles.input}>
      {icon && (
        <AntDesign name={icon} size={24} style={{ alignSelf: 'center' }} />
      )}
      <TextInput
        {...rest}
        style={{
          flex: 1,
          fontSize: 16,
        }}
      />
    </View>
  );
};

const FormButton = ({ title, icon, backgroundColor, color, ...rest }: any) => (
  <TouchableOpacity
    style={[styles.btnContainer, { backgroundColor }]}
    {...rest}>
    {icon && (
      <FontAwesome name={icon} size={24} style={{ alignSelf: 'center' }} />
    )}
    <Text style={[styles.btnText, { color }]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  btnContainer: {
    height,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  btnText: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  input: {
    height,
    flexDirection: 'row',
    paddingHorizontal: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    gap: 8,
  },
});
