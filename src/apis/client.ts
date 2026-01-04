import axios, { AxiosError } from 'axios';
import {
  type ApiErrorResponse,
  ERROR_CODES,
  ERROR_MESSAGES,
  type ErrorCode,
} from '../types';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// 에러 메시지 가져오기
const getErrorMessage = (code: string): string => {
  return ERROR_MESSAGES[code as ErrorCode] || '알 수 없는 오류가 발생했습니다.';
};

// 로그인 페이지로 리다이렉트가 필요한 에러 코드
const REDIRECT_TO_LOGIN_CODES: readonly string[] = [
  ERROR_CODES.UNAUTHORIZED_RESOURCE_OWNER,
  ERROR_CODES.INVALID_TOKEN,
  ERROR_CODES.TOKEN_EXPIRED,
  ERROR_CODES.MISSING_TOKEN,
  ERROR_CODES.TOKEN_SIGNATURE_INVALID,
];

// 로그인 페이지로 리다이렉트가 필요한 에러인지 확인
const shouldRedirectToLogin = (code: string): boolean => {
  return REDIRECT_TO_LOGIN_CODES.includes(code);
};

// 응답 인터셉터
client.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiErrorResponse>) => {
    // 네트워크 에러
    if (!error.response) {
      console.error('네트워크 연결을 확인해주세요.');
      return Promise.reject(error);
    }

    const { status, data } = error.response;
    const errorCode = data?.code || '';
    const errorMessage = data?.message || getErrorMessage(errorCode);

    // 에러 로깅
    console.error(`[${status}] ${errorCode}: ${errorMessage}`);

    // 인증 오류 (401)
    if (status === 401) {
      if (shouldRedirectToLogin(errorCode)) {
        if (window.location.pathname !== '/login') {
          window.location.href = '/login';
        }
      }
    }

    // 권한 오류 (403)
    if (status === 403) {
      console.error(errorMessage);
    }

    // 리소스 없음 (404)
    if (status === 404) {
      console.error(errorMessage);
    }

    // 충돌 오류 (409)
    if (status === 409) {
      console.error(errorMessage);
    }

    // 데이터 처리 오류 (422)
    if (status === 422) {
      console.error(errorMessage);
    }

    // 서버 오류 (500)
    if (status >= 500 && status < 600) {
      console.error(errorMessage);
    }

    return Promise.reject(error);
  }
);

export default client;
