import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/index': 'http://localhost:5000',
      '/users': 'http://localhost:5000',
      '/notes': 'http://localhost:5000'
    }
  },
  plugins: [react()]
})
