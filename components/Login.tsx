import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <FormInput placeholder="Email" icon="user" keyboardType="email-address" />
      <FormInput placeholder="Password" icon="lock" secureTextEntry />
      <FormButton title="Login" backgroundColor="#2e64e5" color="#fff" />
      <FormButton title="Forgot Password" color="#2e64e5" />
      <FormButton title="Don't have an account? Create here" color="#2e64e5" />
    </View>
  );
};

const FormButton = ({ title, backgroundColor, color, ...rest }: any) => (
  <TouchableOpacity
    style={[styles.btnContainer, { backgroundColor }]}
    {...rest}>
    <Text style={[styles.btnText, { color }]}>{title}</Text>
  </TouchableOpacity>
);

const FormInput = ({ icon, ...rest }: any) => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  btnContainer: {
    height: windowHeight / 16,
    justifyContent: 'center',
    borderRadius: 8,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  input: {
    height: windowHeight / 16,
    flexDirection: 'row',
    paddingHorizontal: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    gap: 8,
  },
});
