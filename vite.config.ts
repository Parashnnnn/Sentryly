import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { WebSocketServer, WebSocket } from 'ws';

function meshRelayPlugin(): Plugin {
  const setupWebSocket = (httpServer: any) => {
    if (!httpServer) return;
    const wss = new WebSocketServer({ noServer: true });

    httpServer.on('upgrade', (request: any, socket: any, head: any) => {
      const url = new URL(request.url, `http://${request.headers.host}`);
      if (url.pathname === '/mesh-relay') {
        wss.handleUpgrade(request, socket, head, (ws) => {
          wss.emit('connection', ws, request);
        });
      }
    });

    wss.on('connection', (ws) => {
      ws.on('message', (data) => {
        // Broadcast packet to all other connected tactical nodes
        wss.clients.forEach((client) => {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(data);
          }
        });
      });
    });
  };

  return {
    name: 'mesh-relay-server',
    configureServer(server) {
      setupWebSocket(server.httpServer);
    },
    configurePreviewServer(server) {
      setupWebSocket(server.httpServer);
    }
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), meshRelayPlugin()],
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  preview: {
    host: '0.0.0.0',
    port: 5173
  },
  build: {
    outDir: 'dist',
    target: 'es2020',
    chunkSizeWarningLimit: 1200,
    assetsDir: 'assets',
    sourcemap: false
  }
});
