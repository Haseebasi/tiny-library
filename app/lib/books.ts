import booksData from "../data/books.json"
import type { Book, GetBooksParams } from "../types"

export async function getBooks({ category }: GetBooksParams = {}): Promise<Book[]> {
  // This is where you'd write code to fetch the list
  // of models from a database. We're mocking that with
  // our JSON array of data in models.json for now.
  let filteredModels = [...booksData]
  if (category) {
    filteredModels = booksData.filter(
      (model: Book) => model.category === category
    )
  }
  return filteredModels
}

export async function getBookById(id: string | number): Promise<Book> {
  // These functions don't technically need to be async functions,
  // but we're planning for the future when they'll be fetching
  // from a real data source.
  const foundModel = booksData.find(
    (model: Book) => model.id.toString() === id.toString()
  )
  if (!foundModel) {
    throw new Error(`Model with id ${id} not found`)
  }
  return foundModel
}