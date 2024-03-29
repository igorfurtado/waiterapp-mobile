import { Platform } from 'react-native'
import { colors } from 'src/components/Main/view/references'
import styled from 'styled-components/native'

const isAndroid = Platform.OS === 'android'

export const Category = styled.TouchableOpacity`
  align-items: center;
  margin-left: 24px;
`

export const Icon = styled.View`
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.light};
  border-radius: 22px;
  margin-bottom: 8px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
  elevation: 2;
`
