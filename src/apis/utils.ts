import { AxiosError } from 'axios';
import {
  type ApiErrorResponse,
  ERROR_MESSAGES,
  type ErrorCode,
} from '../types';

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof AxiosError) {
    const apiError = error.response?.data as ApiErrorResponse | undefined;

    if (apiError?.code) {
      return (
        ERROR_MESSAGES[apiError.code as ErrorCode] ||
        apiError.message ||
        '알 수 없는 오류가 발생했습니다.'
      );
    }

    if (apiError?.message) {
      return apiError.message;
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return '알 수 없는 오류가 발생했습니다.';
};

export const getErrorCode = (error: unknown): string | null => {
  if (error instanceof AxiosError) {
    const apiError = error.response?.data as ApiErrorResponse | undefined;
    return apiError?.code || null;
  }
  return null;
};
