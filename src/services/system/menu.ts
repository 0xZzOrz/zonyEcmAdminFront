import { request } from 'umi';

// =====================用户===========================

export async function getMenu(options?: { [key: string]: any }) {
  return request('/api/menus/all', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
    skipErrorHandler: true,
  });
}

export async function buildMenu(options?: { [key: string]: any }) {
  return request('/api/menus/build', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
    skipErrorHandler: true,
  });
}
