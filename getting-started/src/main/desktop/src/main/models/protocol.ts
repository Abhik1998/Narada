import { protocol } from 'electron';
import { join } from 'path';
import { parse } from 'url';

protocol.registerSchemesAsPrivileged([
  {
    scheme: 'narada',
    privileges: {
      bypassCSP: true,
      secure: true,
      standard: true,
      supportFetchAPI: true,
      allowServiceWorkers: true,
      corsEnabled: false,
    }
  }
]);

export const registerProtocol = (session: Electron.Session) => {
  session.protocol.registerFileProtocol(
    'narada-error',
    (request, callback: any) => {
      const parsed = parse(request.url);

      if (parsed.hostname === 'network-error') {
        return callback({
          path: join(__dirname, '../static/pages/', `network-error.html`),
        });
      }
    },
    (error) => {
      if (error) console.error(error);
    },
  );

  if (process.env.NODE_ENV !== 'development') {
    session.protocol.registerFileProtocol(
      'narada',
      (request, callback: any) => {
        const parsed = parse(request.url);

        if (parsed.path === '/') {
          return callback({
            path: join(__dirname, `${parsed.hostname}.html`),
          });
        }

        callback({ path: join(__dirname, parsed.path) });
      },
      (error) => {
        if (error) console.error(error);
      },
    );
  }
};
