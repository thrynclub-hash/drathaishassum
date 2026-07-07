import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        quemSomos: resolve(__dirname, 'quem-somos.html'),
        procedimentos: resolve(__dirname, 'procedimentos.html'),
        contato: resolve(__dirname, 'contato.html'),
        pRestauracao: resolve(__dirname, 'procedimentos/restauracao.html'),
        pCanal: resolve(__dirname, 'procedimentos/canal.html'),
        pOrtodontia: resolve(__dirname, 'procedimentos/ortodontia.html'),
        pFacetas: resolve(__dirname, 'procedimentos/facetas.html'),
        pProtese: resolve(__dirname, 'procedimentos/protese.html'),
        pImplantes: resolve(__dirname, 'procedimentos/implantes.html'),
        pCoroas: resolve(__dirname, 'procedimentos/coroas.html'),
        pLimpeza: resolve(__dirname, 'procedimentos/limpeza-dentaria.html'),
        pProteseImplante: resolve(__dirname, 'procedimentos/protese-sobre-implante.html'),
        pHarmonizacao: resolve(__dirname, 'procedimentos/harmonizacao-facial.html'),
        pTerapiaNeural: resolve(__dirname, 'procedimentos/terapia-neural.html'),
        pClareamento: resolve(__dirname, 'procedimentos/clareamento-dental.html'),
      },
    },
  },
})
