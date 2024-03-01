import { useDebounce } from '@uidotdev/usehooks'
import useSWR from 'swr'

import { GifResponse, GifResultsContentProps, GifResultsProps } from './types'
import { getColumns } from './utils'

import { API_KEY_PARAM } from '@/constants/request'
import { RequestFeedback } from '@/components/atoms/RequestFeedback/RequestFeedback'

export const GifResultsContent = ({
    data,
    isLoading,
    isError,
}: GifResultsContentProps) => (
    <div
        className="grid flex-1 w-full grid-cols-2 gap-2 overflow-y-auto md:gap-4 md:grid-cols-4"
        data-testid="gif-results-container"
    >
        <RequestFeedback
            isError={isError}
            isLoading={isLoading}
            className="col-span-2 md:col-span-4"
        />
        {!isError &&
            !isLoading &&
            getColumns(data).map((column, columnIndex) => (
                <div
                    className="grid w-full gap-2 md:gap-4 h-min"
                    key={`${columnIndex}-column`}
                >
                    {column.map((gif) => (
                        <div
                            key={gif.id}
                            className="overflow-hidden border rounded min-h-20 border-gorse-500"
                        >
                            <img
                                className="object-center w-full h-auto "
                                src={gif.images.original.webp}
                                alt={gif.alt_text}
                            />
                        </div>
                    ))}
                </div>
            ))}
    </div>
)

export const GiftResults = ({ searchValue }: GifResultsProps) => {
    const debouncedSearchTerm = useDebounce(searchValue, 500)
    const { data, error, isLoading } = useSWR<{ data: GifResponse }>(
        debouncedSearchTerm
            ? `/gifs/search?${API_KEY_PARAM}&q=${debouncedSearchTerm}&limit=12&rating=pg-13`
            : null
    )
    return (
        <GifResultsContent
            data={data?.data}
            isLoading={isLoading}
            isError={!!error}
        />
    )
}
