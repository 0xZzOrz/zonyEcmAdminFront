import { request } from 'umi';
import { API } from './swagger/typings';

// =====================用户===========================

export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function currentUser(options?: { [key: string]: any }) {
  return request<{
    data: API.CurrentUser;
  }>('/auth/info', {
    method: 'GET',
    skipErrorHandler: true,
    ...(options || {}),
  });
}
