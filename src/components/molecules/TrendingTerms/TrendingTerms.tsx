import useSWR from 'swr'

import { TrendingTermTag } from '../../atoms/TrendingTermTag/TrendingTermTag'
import { API_KEY_PARAM } from '../../../constants/request'

export const TrendingTerms = () => {
    const { data } = useSWR<{
        data: string[]
    }>(`/trending/searches?${API_KEY_PARAM}`)
    // Fetch, show loading pills
    // Show pills if success
    // Show error message if error
    return (
        <div className="flex items-center w-full gap-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-1 stroke-picton-blue-500 fill-none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
            </svg>
            {data?.data.slice(0, 5).map((term) => (
                <TrendingTermTag term={term} onClick={() => {}} />
            ))}
        </div>
    )
}
