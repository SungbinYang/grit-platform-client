export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

export interface ApiErrorResponse {
  status: number;
  code: string;
  message: string;
}

export const ERROR_CODES = {
  // 클라이언트 오류 (400)
  INVALID_REQUEST_PARAMETER: 'C400-01',
  INVALID_REQUEST_BODY: 'C400-02',
  MISSING_REQUIRED_FIELD: 'C400-03',
  INVALID_INPUT_FORMAT: 'C400-04',
  DATA_INTEGRITY_VIOLATION: 'C400-05',
  REQUEST_SIZE_EXCEEDED: 'C400-06',
  UNSUPPORTED_MEDIA_TYPE: 'C400-07',

  // 인증 오류 (401)
  UNAUTHORIZED_RESOURCE_OWNER: 'A401-01',
  INVALID_TOKEN: 'A401-02',
  TOKEN_EXPIRED: 'A401-03',
  INVALID_CREDENTIALS: 'A401-04',
  MISSING_TOKEN: 'A401-05',
  TOKEN_SIGNATURE_INVALID: 'A401-06',

  // 권한 오류 (403)
  INVALID_RESOURCE_OWNER: 'A403-01',
  INSUFFICIENT_PERMISSIONS: 'A403-02',
  ACCESS_LIMIT_EXCEEDED: 'A403-03',

  // 리소스 오류 (404)
  NOT_FOUND_RESOURCE: 'R404-01',
  ENDPOINT_NOT_FOUND: 'R404-02',

  // 메소드 오류 (405)
  INVALID_REQUEST_METHOD: 'M405-01',

  // 충돌 오류 (409)
  RESOURCE_CONFLICT: 'C409-01',
  CONCURRENT_MODIFICATION: 'C409-02',
  VERSION_CONFLICT: 'C409-03',
  DUPLICATE_RESOURCE: 'C409-04',

  // 데이터 처리 오류 (422)
  UNPROCESSABLE_REQUEST: 'C422-01',
  VALIDATION_FAILED: 'C422-02',
  BUSINESS_RULE_VIOLATION: 'C422-03',

  // 서버 오류 (500)
  SERVER_ERROR: 'S500-01',
  DATABASE_ERROR: 'S500-02',
  EXTERNAL_API_ERROR: 'S500-03',
  UNEXPECTED_ERROR: 'S500-04',
  FILE_PROCESSING_ERROR: 'S500-05',
  INTEGRATION_ERROR: 'S500-06',

  // 서비스 사용 불가 오류 (503)
  SERVICE_UNAVAILABLE_NOW: 'S503-01',
  MAINTENANCE_MODE: 'S503-02',
  RATE_LIMIT_EXCEEDED: 'S503-03',

  // 게이트웨이 오류 (504)
  TIMEOUT: 'G504-01',
} as const;

export type ErrorCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES];

// 에러 메시지 매핑
export const ERROR_MESSAGES: Record<ErrorCode, string> = {
  // 클라이언트 오류 (400)
  [ERROR_CODES.INVALID_REQUEST_PARAMETER]: '유효하지 않은 요청 파라미터입니다.',
  [ERROR_CODES.INVALID_REQUEST_BODY]: '유효하지 않은 요청 본문입니다.',
  [ERROR_CODES.MISSING_REQUIRED_FIELD]: '필수 필드가 누락되었습니다.',
  [ERROR_CODES.INVALID_INPUT_FORMAT]: '입력 형식이 올바르지 않습니다.',
  [ERROR_CODES.DATA_INTEGRITY_VIOLATION]: '데이터 무결성 위반이 발생했습니다.',
  [ERROR_CODES.REQUEST_SIZE_EXCEEDED]: '요청 크기가 제한을 초과했습니다.',
  [ERROR_CODES.UNSUPPORTED_MEDIA_TYPE]: '지원하지 않는 미디어 타입입니다.',

  // 인증 오류 (401)
  [ERROR_CODES.UNAUTHORIZED_RESOURCE_OWNER]: '로그인이 필요합니다.',
  [ERROR_CODES.INVALID_TOKEN]: '유효하지 않은 인증 토큰입니다.',
  [ERROR_CODES.TOKEN_EXPIRED]: '인증이 만료되었습니다. 다시 로그인해주세요.',
  [ERROR_CODES.INVALID_CREDENTIALS]: '잘못된 로그인 정보입니다.',
  [ERROR_CODES.MISSING_TOKEN]: '인증 토큰이 제공되지 않았습니다.',
  [ERROR_CODES.TOKEN_SIGNATURE_INVALID]: '토큰 서명이 유효하지 않습니다.',

  // 권한 오류 (403)
  [ERROR_CODES.INVALID_RESOURCE_OWNER]: '해당 리소스를 처리할 권한이 없습니다.',
  [ERROR_CODES.INSUFFICIENT_PERMISSIONS]:
    '해당 작업을 수행할 권한이 부족합니다.',
  [ERROR_CODES.ACCESS_LIMIT_EXCEEDED]: '접근 제한 횟수를 초과했습니다.',

  // 리소스 오류 (404)
  [ERROR_CODES.NOT_FOUND_RESOURCE]: '요청한 리소스를 찾을 수 없습니다.',
  [ERROR_CODES.ENDPOINT_NOT_FOUND]: '요청한 엔드포인트를 찾을 수 없습니다.',

  // 메소드 오류 (405)
  [ERROR_CODES.INVALID_REQUEST_METHOD]: '유효하지 않은 HTTP 요청 메소드입니다.',

  // 충돌 오류 (409)
  [ERROR_CODES.RESOURCE_CONFLICT]: '리소스 충돌이 발생했습니다.',
  [ERROR_CODES.CONCURRENT_MODIFICATION]:
    '동시 수정으로 인한 충돌이 발생했습니다.',
  [ERROR_CODES.VERSION_CONFLICT]: '리소스 버전 충돌이 발생했습니다.',
  [ERROR_CODES.DUPLICATE_RESOURCE]: '이미 존재하는 리소스입니다.',

  // 데이터 처리 오류 (422)
  [ERROR_CODES.UNPROCESSABLE_REQUEST]: '요청을 처리할 수 없습니다.',
  [ERROR_CODES.VALIDATION_FAILED]: '데이터 유효성 검사에 실패했습니다.',
  [ERROR_CODES.BUSINESS_RULE_VIOLATION]: '비즈니스 규칙 위반이 발생했습니다.',

  // 서버 오류 (500)
  [ERROR_CODES.SERVER_ERROR]: '서버 오류가 발생했습니다.',
  [ERROR_CODES.DATABASE_ERROR]: '데이터베이스 오류가 발생했습니다.',
  [ERROR_CODES.EXTERNAL_API_ERROR]: '외부 API 호출 중 오류가 발생했습니다.',
  [ERROR_CODES.UNEXPECTED_ERROR]: '예상치 못한 오류가 발생했습니다.',
  [ERROR_CODES.FILE_PROCESSING_ERROR]: '파일 처리 중 오류가 발생했습니다.',
  [ERROR_CODES.INTEGRATION_ERROR]: '외부 시스템 연동 중 오류가 발생했습니다.',

  // 서비스 사용 불가 오류 (503)
  [ERROR_CODES.SERVICE_UNAVAILABLE_NOW]:
    '서비스를 일시적으로 사용할 수 없습니다.',
  [ERROR_CODES.MAINTENANCE_MODE]: '시스템이 유지보수 모드입니다.',
  [ERROR_CODES.RATE_LIMIT_EXCEEDED]: '요청 비율 제한을 초과했습니다.',

  // 게이트웨이 오류 (504)
  [ERROR_CODES.TIMEOUT]: '요청 시간이 초과되었습니다.',
};
