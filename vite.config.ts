import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve:{
    alias:[
      {find:'@',replacement:'/src'},
      {find:'@assets',replacement:'/src/assets'},
      {find:'@images',replacement:'/src/assets/images'},
      {find:'@components',replacement:'/src/components'},
      {find:'@pages',replacement:'/src/pages'},
      {find:'@styles',replacement:'/src/styles'},
      {find:'@utils',replacement:'/src/utils'},
      {find:'@hooks',replacement:'/src/hooks'},
      {find:'@services',replacement:'/src/services'},
    ]
  }
})
