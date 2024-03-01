import { RequestFeedbackProps } from '@/components/atoms/RequestFeedback/RequestFeedback'

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
} & Omit<RequestFeedbackProps, 'className'>
