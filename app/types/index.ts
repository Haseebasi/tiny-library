import type { ReactNode } from "react"

// Data Types
export interface Book {
    id: number;
    name: string;
    author: string;
    likes: number;
    image: string;
    category: string;
    dateAdded: string;
}

export type Category = {
    displayName: string
    slug: string
}

export type CategoriesData = {
    categories: Category[]
}

export type GetBooksParams = {
    category?: string
}

// Page Types
export type CategoryPageProps = {
    params: Promise<{
        categoryName: string
    }>
}

export type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>

export type BooksPageProps = {
    searchParams: {
        q?: string
    }
}

export type BookDetailPageProps = {
    params: Promise<{
        id: string
    }>
}

// Components Types
export type BookCardProps = {
    book: Book
}

export type BooksGridProps = {
    title: string
    books: Book[]
}

export type PillProps = {
    children: ReactNode
    className?: string
}

export type NavLinkProps = {
    href: string
    children: ReactNode
    isActive?: boolean
}