export type TrendingTermsProps = {
    onTermSelect: (term: string) => void
}

export type TrendingTermsContentProps = {
    data: string[] | undefined
    isLoading: boolean
    isError: boolean
} & TrendingTermsProps
