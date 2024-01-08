import { FlatList } from 'react-native'
import { categories } from 'src/mocks/categories'
import { Text } from '../Text'
import useCategories from './hooks/useCategories'
import { Category, Icon } from './styles'

export const Categories = () => {
  const { handleSelectCategory, selectedCategory } = useCategories()

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      contentContainerStyle={{ paddingRight: 24 }}
      keyExtractor={(category) => category._id}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategory === category._id

        return (
          <Category onPress={() => handleSelectCategory(category._id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
            </Icon>

            <Text size={14} weight='600' opacity={isSelected ? 1 : 0.5}>
              {category.name}
            </Text>
          </Category>
        )
      }}
    />
  )
}

export default Categories
