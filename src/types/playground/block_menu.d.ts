export class BlockMenu {
  _categoryData: CategoryData[]
  _generateCategoryView(categoryData: CategoryData[]): void
  _generateCategoryCode(category: string): void
  setMenu(): void
}

interface CategoryData {
  category: string
  blocks: string[]
  visible?: boolean
}
