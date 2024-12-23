'use client';

import { Provider } from 'react-redux';
import { store } from '../state/store';
import '../app/globals.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
