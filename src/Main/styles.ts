import { Platform, StatusBar } from 'react-native'
import styled from 'styled-components/native'

const isAndroid = Platform.OS === 'android'
const androidStatusBarHeight = StatusBar.currentHeight

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${androidStatusBarHeight}px` : '0'};
`
