const API_INFO = {
  // production: '{{API_END_POINT}}',
  development: 'http://ec2-54-169-201-201.ap-southeast-1.compute.amazonaws.com:30000'
};

// let environment: string;

/* let API_URL: string = '';
switch (process.env.NODE_ENV) {
  case 'production':
    API_URL = API_INFO['production'];
    environment = 'prod';
    break;
  default:
    API_URL = API_INFO['development'];
    environment = 'test';
    break;
} */
// tslint:disable-next-line:no-inferrable-types
const environment: string = 'test';
const API_URL: string = API_INFO.development;

const getApiUrl = () => {
  return API_URL;
};

const getEnv = () => environment;

const CONTENT_TYPE = 'application/vnd.mbc.v1+json;charset=UTF-8';
export {
  getApiUrl,
  CONTENT_TYPE,
  getEnv
};

export const HTTP_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  DELETED: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNSUPPORTED_MEDIA_TYPE: 415,
  ERROR: 500,
  NOT_IMPLEMENTED: 501
};

export const REDIRECT_HTTP_STATUS = [401, 403, 404, 415, 500, 501];
