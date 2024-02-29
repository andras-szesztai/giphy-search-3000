type SearchInputProps = {
    value: string
    onChange: (value: string) => void
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => (
    <div className="flex w-full">
        <input
            className="flex-1 px-4 py-4 text-lg font-light rounded-l md:py-5 md:text-xl focus-visible:outline-none placeholder:text-black"
            placeholder="Search all the GIFs there is..."
            value={value}
            onChange={(e) => {
                onChange(e.target.value)
            }}
        />
        <div className="relative flex items-center justify-center w-16 h-full rounded-r bg-spring-green-500">
            {!!value && (
                <button
                    className="absolute p-1 transition-colors duration-200 -translate-y-1/2 rounded-full bg-electric-violet-400 -left-12 top-1/2 focus-visible:outline-none focus-visible:bg-electric-violet-500 hover:bg-electric-violet-500"
                    onClick={() => {
                        onChange('')
                    }}
                >
                    <span className="sr-only">Clear search</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 stroke-electric-violet-900 fill-none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </button>
            )}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 stroke-spring-green-900 fill-none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
            </svg>
        </div>
    </div>
)
