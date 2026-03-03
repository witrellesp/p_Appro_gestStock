import Kind from "#models/kind";

export async function getMenu() {
  
  const kinds = await Kind.query()
  .preload('categories')
  .orderBy('kind_name', 'asc')

  return kinds
  
}