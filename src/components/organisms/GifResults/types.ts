export type GifResponse = {
    id: string
    images: {
        original: {
            webp: string
        }
    }
    alt_text: string
}[]

export type GifResultsProps = {
    searchValue: string
}

export type GifResultsContentProps = {
    data: GifResponse | undefined
    isLoading: boolean
    isError: boolean
}
