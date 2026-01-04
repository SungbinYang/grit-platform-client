import { RouterProvider } from 'react-router-dom';
import router from './router';
import type { FC } from 'react';

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
