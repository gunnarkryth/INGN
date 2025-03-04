import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'INGN App',
        short_name: 'INGN',
        description: 'A React-based boilerplate by Gunnar Christian Krüth.',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/react-logo.webp',
            sizes: '512x512',
            type: 'image/webp'
          }
        ]
      }
    })
  ]
})
