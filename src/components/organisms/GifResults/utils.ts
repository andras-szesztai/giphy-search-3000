import { GifResponse } from './types'

export const getColumns = (data: GifResponse | undefined) => {
    if (!data) return []
    const columns = data.reduce<GifResponse[]>((acc, gif, index) => {
        const columnIndex = index % 4
        if (!acc[columnIndex]) {
            acc[columnIndex] = []
        }
        acc[columnIndex].push(gif)
        return acc
    }, [])
    return columns
}
