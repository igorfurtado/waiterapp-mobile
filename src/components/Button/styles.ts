import { Platform, StyleSheet } from 'react-native'
import { colors } from 'src/components/Main/view/references'
import styled from 'styled-components/native'

export const styles = StyleSheet.create({
  buttonWrapper: {
    overflow: 'hidden',
    borderRadius: 8
  },
  buttonActive: {
    opacity: Platform.OS === 'ios' ? 0.7 : 1
  },
  buttonDisabled: {
    backgroundColor: colors.disabled
  }
})

export const Container = styled.Pressable`
  align-items: center;
  justify-content: center;
  background: ${({ disabled }) =>
    !disabled ? colors.primary : colors.disabled};
  border-radius: 48px;
  padding: 14px 24px;
`
