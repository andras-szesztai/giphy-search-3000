import { useDebounce } from '@uidotdev/usehooks'
import useSWR from 'swr'

import { GifResponse } from './types'

import { API_KEY_PARAM } from '@/constants/request'

export type GifResultsProps = {
    searchValue: string
}

export const GiftResults = ({ searchValue }: GifResultsProps) => {
    const debouncedSearchTerm = useDebounce(searchValue, 500)
    const { data } = useSWR<{ data: GifResponse }>(
        debouncedSearchTerm
            ? `/gifs/search?${API_KEY_PARAM}&q=${debouncedSearchTerm}&limit=12&rating=pg-13`
            : null
    )
    return (
        <div className="grid flex-1 grid-cols-2 gap-4 overflow-y-auto md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
                <div className="grid gap-4 h-min" key={`${index}-column`}>
                    {data?.data.slice(index * 3, index * 3 + 3).map((gif) => (
                        <div
                            key={gif.id}
                            className="overflow-hidden rounded bg-electric-violet-200"
                        >
                            <img
                                className="object-center h-auto max-w-full"
                                src={gif.images.original.webp}
                                alt={gif.source}
                            />
                        </div>
                    ))}
                </div>
            ))}
            {/* {isLoading ? 'Loading...' : 'Results here'} */}
        </div>
    )
}
