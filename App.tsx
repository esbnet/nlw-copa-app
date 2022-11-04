import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto"
import { StatusBar } from "expo-status-bar"
import { NativeBaseProvider } from "native-base"

import { Loading } from "./src/components/Loading"
import { AuthContextProvider } from "./src/contexts/AuthContext"
import { SignIn } from "./src/screens/SignIn"

import { THEME } from "./src/styles/theme"

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar style='inverted' translucent />
        {fontsLoaded ? <SignIn /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  )
}
