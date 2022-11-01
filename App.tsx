import {
  Roboto_400Regular, Roboto_500Medium,
  Roboto_700Bold, useFonts
} from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';

import { Loading } from './src/components/Loading';
import { SignIn } from './src/screens/SignIn';

import { THEME } from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_500Medium,
    Roboto_700Bold
  })

  return (
    < NativeBaseProvider theme={THEME}>
      <StatusBar style="inverted" translucent />
      {fontsLoaded ? <SignIn /> : <Loading />}
    </NativeBaseProvider>
  );
}
