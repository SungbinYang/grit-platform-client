import { Link } from 'react-router-dom';
import type { FC } from 'react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm text-gray-500">
            © {currentYear} Grit Platform. All rights reserved.
          </p>

          <div className="mt-4 flex space-x-6 md:mt-0">
            <Link
              to="/terms"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              이용약관
            </Link>
            <Link
              to="/privacy"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              개인정보처리방침
            </Link>
            <Link
              to="/contact"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              문의하기
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
