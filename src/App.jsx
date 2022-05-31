import AppRoutes from './routes';
import { AppStoreProvider } from './store';

function App() {
  return (
    <AppStoreProvider>
      <AppRoutes />
    </AppStoreProvider>
  );
}

export default App;
