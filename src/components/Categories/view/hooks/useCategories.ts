import { useCallback, useState } from 'react'

const useCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const handleSelectCategory = useCallback((categoryId: string) => {
    setSelectedCategory((currentValue) =>
      currentValue === categoryId ? '' : categoryId
    )
  }, [])

  return {
    selectedCategory,
    handleSelectCategory
  }
}

export default useCategories
