import { ReactNode } from 'react'
import { ActivityIndicator, PressableProps, View } from 'react-native'
import { colors } from 'src/components/Main/references'
import { Text } from '../Text'
import { Container, styles } from './styles'

type ButtonProps = {
  children: ReactNode
  disabled?: boolean
  loading?: boolean
} & PressableProps

const Button = ({
  children,
  disabled = false,
  loading = false,
  ...props
}: ButtonProps) => {
  return (
    <View style={styles.buttonWrapper}>
      <Container
        disabled={disabled || loading}
        style={({ pressed }) => [pressed && styles.buttonActive]}
        {...props}
      >
        {!loading ? (
          <Text weight='600' color={colors.light}>
            {children}
          </Text>
        ) : (
          <ActivityIndicator color={colors.light} />
        )}
      </Container>
    </View>
  )
}

export default Button
