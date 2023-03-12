import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svgr(), react()],
	server: {
		host: '0.0.0.0',
		port: 5000,
		open: true,
		origin: 'http://127.0.0.1:5000',
	},
	preview: {
		host: '0.0.0.0',
		port: 3333,
	},
})
