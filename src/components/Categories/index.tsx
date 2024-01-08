import { FlatList } from 'react-native'
import { categories } from 'src/mocks/categories'
import { Text } from '../Text'
import { Category, Icon } from './styles'

export const Categories = () => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      contentContainerStyle={{ paddingRight: 24 }}
      keyExtractor={(category) => category._id}
      renderItem={({ item: category }) => (
        <Category>
          <Icon>
            <Text>{category.icon}</Text>
          </Icon>

          <Text size={14} weight='600'>
            {category.name}
          </Text>
        </Category>
      )}
    />
  )
}

export default Categories
