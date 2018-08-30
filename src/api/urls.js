import { API_ENV } from 'config/env';

const API_HOST = `${API_ENV ? `${API_ENV}.` : ''}nz.com`;

export const USER = `//${API_HOST}/api/user`;
