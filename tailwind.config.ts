import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                'main-white': '#F3F3F3',
                'main-black': '#181717',
                'royal-blue': '#2429AF',
                'main-gray': '#606060',
            },
        },
    },
    plugins: [],
}
export default config
