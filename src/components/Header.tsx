import { type FC, useState } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="text-xl font-bold text-gray-900">
          Grit Platform
        </Link>

        <nav className="hidden space-x-8 md:flex">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            홈
          </Link>
          <Link to="/mentors" className="text-gray-600 hover:text-gray-900">
            멘토 찾기
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">
            소개
          </Link>
        </nav>

        <div className="hidden items-center space-x-4 md:flex">
          <Link to="/login" className="text-gray-600 hover:text-gray-900">
            로그인
          </Link>
          <Link
            to="/signup"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            회원가입
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 md:hidden"
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <nav className="border-t border-gray-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col space-y-4 text-center">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              홈
            </Link>
            <Link
              to="/mentors"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              멘토 찾기
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              소개
            </Link>
            <hr className="border-gray-200" />
            <Link
              to="/login"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              로그인
            </Link>
            <Link
              to="/signup"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              회원가입
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
