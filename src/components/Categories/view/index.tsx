import { FlatList } from 'react-native'
import { Text } from '../../Text'
import { ICategory } from '../model/data/category'
import useCategories from './hooks/useCategories'
import { Category, Icon } from './styles'

type CategoriesProps = {
  categories: ICategory[]
  onSelectCategory: ({
    categoryId,
    signal
  }: {
    categoryId: string
    signal?: AbortSignal | undefined
  }) => Promise<void>
}

export const Categories = ({
  categories,
  onSelectCategory
}: CategoriesProps) => {
  const { handleSelectCategory, selectedCategory } = useCategories()

  const onPressCategory = (categoryId: string) => {
    handleSelectCategory(categoryId)
    onSelectCategory({ categoryId })
  }

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
          <Category onPress={() => onPressCategory(category._id)}>
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
