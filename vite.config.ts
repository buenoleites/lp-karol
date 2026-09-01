import { defineConfig, type Connect, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Espelha o nginx em dev/preview: `/gluteos` → `/gluteos/`.
 * Sem isso o dev server do Vite procura `gluteos.html`, não acha e cai no fallback SPA (`/index.html`),
 * abrindo a LP do Ultraformer no lugar da de glúteos.
 */
function trailingSlashRedirect(paths: string[]): Plugin {
  const handler: Connect.NextHandleFunction = (req, res, next) => {
    // Sem @types/node no projeto, `IncomingMessage` não expõe `url`; o cast local evita a dependência.
    const [pathname, query] = ((req as { url?: string }).url ?? '').split('?');
    if (paths.includes(pathname)) {
      res.statusCode = 301;
      res.setHeader('Location', `${pathname}/${query ? `?${query}` : ''}`);
      res.end();
      return;
    }
    next();
  };
  return {
    name: 'lp-trailing-slash-redirect',
    configureServer(server) {
      server.middlewares.use(handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler);
    },
  };
}

// Multi-page: `/` (Ultraformer) e `/gluteos/` (Harmonização Glútea) compartilham componentes e estilos.
export default defineConfig({
  plugins: [react(), trailingSlashRedirect(['/gluteos'])],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        gluteos: 'gluteos/index.html',
      },
    },
  },
});
