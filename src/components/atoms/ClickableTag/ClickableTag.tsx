type ClickableTagProps = {
    label: string
    onClick?: () => void
}

export const ClickableTag = ({ label, onClick }: ClickableTagProps) => (
    <button
        onClick={onClick}
        className="px-2 py-1 text-sm font-medium transition-colors duration-200 border border-none rounded whitespace-nowrap w-min focus-visible:outline-none focus-visible:bg-picton-blue-600 hover:bg-picton-blue-600 bg-picton-blue-500 text-picton-blue-950 "
    >
        {label}
    </button>
)
