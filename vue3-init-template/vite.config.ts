import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { createSvg } from './src/utils/svg'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    plugins: [
      vue(),
      createSvg('./src/assets/icons/'),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      },
      extensions: [".vue", ".js", ".json", ".ts"]
    },
    server: {
      host: '0.0.0.0',
      port: 8300,
      proxy: {
        '/api': {
          target: env.VITE_BASE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    define: {
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false,
    }
  })
}

