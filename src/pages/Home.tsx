import type { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Grit Platform</h1>
        <p className="mt-4 text-lg text-gray-600">
          멘토링 서비스에 오신 것을 환영합니다
        </p>
      </div>
    </div>
  );
};

export default Home;
