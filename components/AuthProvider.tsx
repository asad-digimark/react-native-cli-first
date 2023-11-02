import { createContext, useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import AuthNavigationStack from './AuthNavigationStack';
import StackNavigation from './Stack Navigation';

export const AuthContext = createContext(null);

export default () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return auth().onAuthStateChanged(() => setUser(user));
  }, []);

  console.warn(user);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          return await auth().signInWithEmailAndPassword(email, password);
        },
        register: async (email, password) => {
          return await auth().createUserWithEmailAndPassword(email, password);
        },
      }}>
      <AuthNavigationStack />
      {/* <StackNavigation /> */}
    </AuthContext.Provider>
  );
};
