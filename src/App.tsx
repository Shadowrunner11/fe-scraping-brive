import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { Suspense } from 'react';

import { AuthProvider } from 'react-auth-kit';
import { LoadingScreen } from './components/LoadingScreen';
import { ColorModeWrapper } from './components/ColorContext';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={client}>
      <ColorModeWrapper>
        <AuthProvider authType={'localstorage'} authName={'_auth'}>
          <Suspense fallback={<LoadingScreen />}>
            <RouterProvider router={routes} />
          </Suspense>
        </AuthProvider>
      </ColorModeWrapper>
    </QueryClientProvider>
  );
}

export default App;
