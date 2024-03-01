import { GifResponse } from './types'
import { getColumns } from './utils'

describe('getColumns', () => {
    it('returns data sliced into 4 columns', () => {
        const testData = [
            { id: '1', images: { original: { webp: 'test1' } } },
            { id: '2', images: { original: { webp: 'test2' } } },
            { id: '3', images: { original: { webp: 'test3' } } },
            { id: '4', images: { original: { webp: 'test4' } } },
        ]

        const result = getColumns(testData as GifResponse)

        expect(result).toEqual([
            [testData[0]],
            [testData[1]],
            [testData[2]],
            [testData[3]],
        ])
    })

    it('returns empty array when no data', () => {
        const result = getColumns(undefined)

        expect(result).toEqual([])
    })
})
