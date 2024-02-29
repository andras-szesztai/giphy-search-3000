import { useState } from 'react'

import { SearchInput } from './components/molecules/SearchInput/SearchInput'
import { TrendingTerms } from './components/molecules/TrendingTerms/TrendingTerms'

function App() {
    const [searchValue, setSearchValue] = useState('')
    return (
        <main className="px-8 py-6 gap-5 relative items-center w-screen h-[calc(100dvh)] md:px-16 md:py-12 bg-black flex flex-col md:gap-10">
            <h1 className="text-2xl font-medium text-center text-white select-none md:text-5xl ">
                let's gif this party started
            </h1>
            <div className="flex flex-col w-full gap-3 md:gap-5 md:w-1/2">
                <SearchInput
                    value={searchValue}
                    onChange={(value) => {
                        setSearchValue(value)
                    }}
                />
                <TrendingTerms />
            </div>
        </main>
    )
}

export default App
