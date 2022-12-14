import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts
} from "@expo-google-fonts/roboto"

import { StatusBar } from "expo-status-bar"
import { NativeBaseProvider } from "native-base"

import { Loading } from "./src/components/Loading"
import { Routes } from './src/routes'

import { THEME } from "./src/styles/theme"

import { AuthContextProvider } from './src/contexts/AuthContext'

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
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  )
}
