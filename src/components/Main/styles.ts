import { Platform, StatusBar } from 'react-native'
import styled from 'styled-components/native'
import { colors } from './references'

const isAndroid = Platform.OS === 'android'
const androidStatusBarHeight = StatusBar.currentHeight

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${isAndroid ? `${androidStatusBarHeight}px` : '0'};
  background: ${colors['light-1']};
`

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`

export const MenuContainer = styled.View`
  flex: 1;
`

export const FooterContainer = styled.SafeAreaView``

export const Footer = styled.View`
  min-height: 110px;
  padding: 16px 24px;
  background-color: ${colors.light};
`
