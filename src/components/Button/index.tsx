import { ReactNode } from 'react'
import { PressableProps, View } from 'react-native'
import { colors } from 'src/Main/references'
import { Text } from '../Text'
import { Container, styles } from './styles'

type ButtonProps = {
  children: ReactNode
  disabled?: boolean
} & PressableProps

const Button = ({ children, disabled = false, ...props }: ButtonProps) => {
  return (
    <View style={styles.buttonWrapper}>
      <Container
        disabled={disabled}
        style={({ pressed }) => [pressed && styles.buttonActive]}
        {...props}
      >
        <Text weight='600' color={colors.light}>
          {children}
        </Text>
      </Container>
    </View>
  )
}

export default Button
