import useSWR from 'swr'

import { TrendingTermsContentProps, TrendingTermsProps } from './types'

import { ClickableTag } from '@/components/atoms/ClickableTag/ClickableTag'
import { API_KEY_PARAM } from '@/constants/request'
import { cn } from '@/utils/styles'
import { RequestFeedback } from '@/components/atoms/RequestFeedback/RequestFeedback'

export const TrendingTermsContent = ({
    data,
    isLoading,
    isError,
    onTermSelect,
}: TrendingTermsContentProps) => (
    <div
        data-testid="trending-terms-container"
        className="flex flex-wrap items-center max-w-full gap-1"
    >
        <svg
            data-testid="trending-terms-icon"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('w-6 h-6 mr-1  fill-none stroke-picton-blue-500', {
                'stroke-carnation-400': isError,
            })}
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
        </svg>
        <RequestFeedback
            isError={isError}
            isLoading={isLoading}
            className="inline w-min"
        />
        {!isError &&
            !isLoading &&
            data?.slice(0, 5).map((term) => (
                <ClickableTag
                    key={term}
                    label={term}
                    onClick={() => {
                        onTermSelect(term)
                    }}
                />
            ))}
    </div>
)

export const TrendingTerms = ({ onTermSelect }: TrendingTermsProps) => {
    const { data, isLoading, error } = useSWR<{
        data: string[]
    }>(`/trending/searches?${API_KEY_PARAM}`)
    return (
        <TrendingTermsContent
            data={data?.data}
            isLoading={isLoading}
            isError={!!error}
            onTermSelect={onTermSelect}
        />
    )
}
