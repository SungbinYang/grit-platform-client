import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
