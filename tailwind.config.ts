import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { primary: '#2563EB', secondary: '#10B981', background: '#F8FAFC' } } },
  plugins: [],
}
export default config
