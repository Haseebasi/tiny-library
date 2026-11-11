import ModelsGrid from "@/app/components/BooksGrid"
import type { BooksPageProps } from "@/app/types"
import { getBooks } from "@/app/lib/books"

export default async function Page() {
    const books = await getBooks()

    return (
        <>
            <ModelsGrid title="3D Models" books={books} />
        </>
    )
}
