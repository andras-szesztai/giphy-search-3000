import { RequestFeedbackProps } from '@/components/atoms/RequestFeedback/RequestFeedback'

export type TrendingTermsProps = {
    onTermSelect: (term: string) => void
}

export type TrendingTermsContentProps = {
    data: string[] | undefined
} & TrendingTermsProps &
    Omit<RequestFeedbackProps, 'className'>
