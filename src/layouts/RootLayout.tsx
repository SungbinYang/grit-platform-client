import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 추후 Header 추가 */}
      <main>
        <Outlet />
      </main>
      {/* 추후 Footer 추가 */}
    </div>
  );
};

export default RootLayout;
