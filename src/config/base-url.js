import { API_ENV } from './env';

export const API_BASE_URL = `//${API_ENV ? `${API_ENV}.` : ''}nz.com/api`;
