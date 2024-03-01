import { cn } from '@/utils/styles'

export type RequestFeedbackProps = {
    isError: boolean
    isLoading: boolean
    className?: string
}

export const RequestFeedback = ({
    isError,
    isLoading,
    className,
}: RequestFeedbackProps) => {
    if (!isLoading && !isError) return null
    return (
        <div className={cn('flex justify-center w-full', className)}>
            <p
                className={cn('font-light text-picton-blue-500', {
                    'text-carnation-400': isError,
                })}
            >
                {isError
                    ? 'Sorry, something went wrong while trying to fetch trending terms'
                    : 'Loading...'}
            </p>
        </div>
    )
}
