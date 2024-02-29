import React from 'react'
import ReactDOM from 'react-dom/client'
import { SWRConfig } from 'swr'

import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <SWRConfig
            value={{
                revalidateOnFocus: false,
                fetcher: (resource, init) =>
                    fetch(
                        `https://${
                            import.meta.env.VITE_GIPHY_API_URL
                        }${resource}`,
                        init
                    ).then((res) => res.json()),
            }}
        >
            <App />
        </SWRConfig>
    </React.StrictMode>
)
